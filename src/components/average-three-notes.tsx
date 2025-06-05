import currency from 'currency.js'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import AverageStatus from './average-status'
import NumberInput from './number-input'

export default function AverageThreeNotes() {
  const [average, setAverage] = useState<number | null>(null)
  const [finalAverage, setFinalAverage] = useState<number>()

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
    const truncatedResult = Math.floor(avf * 100) / 100

    setFinalAverage(currency(truncatedResult).value)
  }

  return (
    <div className="flex flex-col justify-center">
      <h2 className="font-inter mb-4 text-center text-base font-semibold md:text-xl">
        Cálculo de 3 médias:
      </h2>
      <form
        onSubmit={handleSubmit(handleCalculate)}
        className="flex flex-col items-center justify-center space-y-4"
      >
        <div className="m-4 flex flex-wrap justify-center">
          {['AV1', 'AV2', 'AV3'].map((label, i) => (
            <div key={i} className="flex flex-col p-2 text-center md:p-4">
              <label htmlFor={`grade-${i}`} className="text-sm md:text-base">
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

        <button
          type="submit"
          className="group relative z-10 h-12 w-32 scale-[0.8] cursor-pointer overflow-hidden rounded bg-[#3892e6] text-xl text-white duration-1000 hover:text-white md:scale-none"
        >
          <span className="absolute -top-10 -left-2 -z-10 h-36 w-36 origin-center scale-0 transform rounded-full bg-[#0627D9] transition-all duration-700 group-hover:scale-100 group-hover:duration-500"></span>
          <span className="absolute -top-10 -left-2 -z-10 h-36 w-36 origin-center scale-0 transform rounded-full bg-[#0340EF] transition-all duration-500 group-hover:scale-100 group-hover:duration-700"></span>
          Calcular
        </button>
      </form>

      <div className="mx-8 flex flex-col items-center justify-center">
        <AverageStatus average={average} finalAverage={finalAverage} />
      </div>
    </div>
  )
}
