import currency from 'currency.js'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import AverageStatus from './average-status'
import NumberInput from './number-input'

export default function AverageOtherCourses() {
  const [average, setAverage] = useState<string>()
  const [finalAverage, setFinalAverage] = useState<string>()

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm<{
    'grade-0': string
    'grade-1': string
  }>({})

  const handleCalculate = () => {
    const { ['grade-0']: av1, ['grade-1']: av2 } = getValues()

    let avg = currency(av1).add(currency(av2).multiply(2))
    avg = currency(avg).divide(3)

    const formattedAvg = avg.value.toFixed(2)
    setAverage(formattedAvg)

    const avf = currency(Math.max(5, 10 - Number(formattedAvg)))
    const formattedAvf = avf.value.toFixed(2)
    setFinalAverage(formattedAvf)
  }

  return (
    <div className="shadow-card-input flex max-w-[550px] flex-col rounded-lg bg-linear-210 from-[#024269] to-[#00000033] py-8">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold">Cursos com AV1 e AV2</h2>
        <p className="block text-xl font-normal">
          Preencha suas notas para calcular a sua média
        </p>
      </div>
      <form
        onSubmit={handleSubmit(handleCalculate)}
        className="flex flex-col items-center justify-center space-y-4"
      >
        <div className="m-4 flex w-full flex-wrap justify-center">
          {['AV1', 'AV2'].map((label, i) => (
            <div key={i} className="flex w-full flex-col px-4 py-2">
              <label
                htmlFor={`grade-${i}`}
                className="font-nunito ml-4 text-xl lg:text-2xl"
              >
                Nota da {label}
              </label>
              <NumberInput
                id={`grade-${i}`}
                {...register(`grade-${i}` as 'grade-0' | 'grade-1', {
                  required: 'Campo obrigatório',
                  min: {
                    value: 0,
                    message: 'A nota deve ser maior ou igual a 0',
                  },
                  max: {
                    value: 10,
                    message: 'A nota deve ser menor ou igual a 10',
                  },
                })}
              />
              {errors[`grade-${i}` as 'grade-0' | 'grade-1'] && (
                <span className="text-sm text-red-400 md:text-base">
                  {errors[`grade-${i}` as 'grade-0' | 'grade-1']?.message}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="w-full px-4 py-2">
          <button
            type="submit"
            className="text-inter w-full cursor-pointer rounded-lg bg-white/30 px-6 py-2.5 text-xl text-white transition lg:text-4xl"
          >
            Calcular
          </button>
        </div>
      </form>

      <div className="mx-8 flex flex-col items-center justify-center">
        <AverageStatus average={average!} finalAverage={finalAverage} />
      </div>
    </div>
  )
}
