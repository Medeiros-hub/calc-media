import { useState } from 'react'

import NumberInput from './number-input'

export default function AverageThreeNotes() {
  const [grades, setGrades] = useState<string[]>(['', '', ''])
  const [average, setAverage] = useState<number | null>(null)

  const handleSetGrade = (index: number, value: string) => {
    const newGrades = [...grades]
    newGrades[index] = value
    setGrades(newGrades)
  }

  const handleCalculate = () => {
    const gradesToFloat = grades.map((value) => parseFloat(value))

    const isInvalid = gradesToFloat.some(
      (value) => isNaN(value) || value < 0 || value > 10,
    )

    if (isInvalid) {
      setAverage(null)
      return
    }

    const avg = gradesToFloat.reduce((acc, curr) => acc + curr, 0) / 3
    const roundedAvg = parseFloat(avg.toFixed(2))

    setAverage(roundedAvg)
  }

  return (
    <div className='flex justify-center flex-col'>
      <h2 className="font-inter mb-4 text-center text-xl font-semibold">
        Cálculo de 3 médias:
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleCalculate()
        }}
        className='flex flex-col items-center justify-center space-y-4'
      >
        <div className="space-y-4 space-x-4 flex flex-wrap justify-center">
          {['AV1', 'AV2', 'AV3'].map((label, i) => (
            <div key={i} className="flex flex-col text-center">
              <label htmlFor={`grade-${i}`}>Nota da {label}</label>
              <NumberInput
                id={`grade-${i}`}
                onChange={(e) => handleSetGrade(i, e.target.value)}
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="my-4 cursor-pointer rounded-lg bg-red-500 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-red-700/80"
        >
          Calcular
        </button>
      </form>

      <div className="flex flex-col items-center justify-center">
        {average !== null && average < 4 && (
          <div className="mt-4 w-full max-w-md rounded-lg border border-red-500 bg-red-100 p-4 text-center text-red-500 shadow-lg backdrop-blur">
            <strong className="block text-xl">Reprovado ❌</strong>
            <p className="mt-2">
              Sua média é <span className="font-bold">{average}</span>. Você foi
              reprovado. Não faz AVF.
            </p>
          </div>
        )}

        {average !== null && average >= 7 && (
          <div className="mt-4 w-full max-w-md rounded-lg border border-green-500 bg-green-100 p-4 text-center text-green-500 shadow-lg backdrop-blur">
            <strong className="block text-xl">Aprovado ✅</strong>
            <p className="mt-2">
              Sua média é <span className="font-bold">{average}</span>. Você foi
              aprovado. Não faz AVF.
            </p>
          </div>
        )}

        {average !== null && average >= 4 && average < 7 && (
          <div className="mt-4 w-full max-w-md rounded-lg border border-yellow-500 bg-yellow-100 p-4 text-center text-yellow-600 shadow-lg backdrop-blur">
            <strong className="block text-xl">Recuperação ⚠️</strong>
            <p className="mt-2">
              Sua média é <span className="font-bold">{average}</span>. Você
              está de recuperação. Precisa fazer AVF.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
