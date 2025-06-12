import currency from 'currency.js'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import AverageStatus from './average-status'
import NumberInput from './number-input'

export default function AverageThreeNotes() {
  const [average, setAverage] = useState<number | null>(null)
  const [finalAverage, setFinalAverage] = useState<number | null>(null)

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm<{
    'grade-0': string
    'grade-1': string
    'grade-2': string
    avf?: string
  }>({})

  const handleCalculate = () => {
    setAverage(null)
    setFinalAverage(null)

    const { ['grade-0']: av1, ['grade-1']: av2, ['grade-2']: av3 } = getValues()

    const gradesToCurrency = [av1, av2, av3].map((value) =>
      currency(parseFloat(value)),
    )

    const avg =
      gradesToCurrency.reduce(
        (total, nextItem) => total.add(nextItem),
        currency(0),
      ).value / 3

    setAverage(currency(avg).value)

    // calculate final average
    const avf = 5 * 2 - currency(avg).value
    if (average === null) return
    const truncatedResult = Math.floor(avf * 100) / 100

    setFinalAverage(currency(truncatedResult).value)
  }

  return (
    <div className="shadow-card-input flex max-w-[550px] flex-col rounded-lg bg-linear-210 from-[#024269] to-[#00000033] py-8">
      <div className="text-center">
        <h2 className="text-[40px] font-extrabold">Medicina</h2>
        <p className="text-lg text-white/70 lg:text-2xl">
          Preencha suas notas para saber sua média
        </p>
      </div>
      <form
        onSubmit={handleSubmit(handleCalculate)}
        className="flex flex-col items-center justify-center space-y-4"
      >
        <div className="m-4 flex flex-wrap justify-center">
          {['N1', 'N2', 'N3'].map((label, i) => (
            <div key={i} className="flex flex-col p-4">
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
                <span className="text-red-400">
                  {errors[`grade-${i}` as 'grade-0' | 'grade-1']?.message}
                </span>
              )}
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="text-inter w-full max-w-xs cursor-pointer rounded-lg bg-white/30 px-6 py-2.5 text-xl text-white transition lg:text-4xl"
        >
          Calcular
        </button>
      </form>

      <div className="mx-8 flex flex-col items-center justify-center">
        <AverageStatus average={average} finalAverage={finalAverage} />
      </div>
    </div>
  )
}
