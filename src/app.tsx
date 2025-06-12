import { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa6'

import logoUnileao from './assets/logo-unileao.svg'
import AverageOtherCourses from './components/average-other-courses'
import AverageThreeNotes from './components/average-three-notes'
import TopBar from './components/topbar'

export const CalculationTypes = {
  MEDICINE: 'medicine',
  OTHER: 'other',
} as const

export type CalculationType =
  (typeof CalculationTypes)[keyof typeof CalculationTypes]

export default function App() {
  const [calcHistory, setCalcHistory] = useState<CalculationType[]>([])

  const currentCalcType = calcHistory[calcHistory?.length - 1] ?? null

  const handleSelectCalcType = (type: CalculationType) => {
    setCalcHistory((prev) => [...prev, type])
  }

  const handleGoBack = () => {
    setCalcHistory((prev) => prev.slice(0, -1))
  }

  return (
    <div className="flex min-h-dvh w-full flex-col">
      <TopBar />

      <section className="my-8 flex flex-1 flex-col items-center justify-center space-y-16">
        <div className="flex flex-col items-center justify-center gap-2">
          <img src={logoUnileao} className="w-[250px] md:w-[400px]" />
          <h1 className="font-nunito text-xl font-extralight text-white">
            Calculadora de Notas Unileão
          </h1>
        </div>

        <main className="rounded bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur">
          <section className="text-white transition-all duration-300 ease-in-out">
            {currentCalcType === null ? (
              <>
                <h2 className="font-inter mb-4 text-center text-xl font-semibold">
                  Selecione o curso para calcular:
                </h2>
                <div
                  key="buttons"
                  className="animate-fade-in flex flex-wrap justify-center gap-4"
                >
                  <button
                    onClick={() => handleSelectCalcType('medicine')}
                    className="w-xs cursor-pointer rounded-lg bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
                  >
                    Média - Medicina
                  </button>
                  <button
                    onClick={() => handleSelectCalcType('other')}
                    className="w-xs cursor-pointer rounded-lg bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
                  >
                    Média - Demais Cursos
                  </button>
                </div>
              </>
            ) : (
              <div className="animate-fade-in flex scale-100 flex-col items-center transition duration-500 md:items-baseline">
                <button
                  onClick={handleGoBack}
                  className="cursor-pointer self-start rounded-lg bg-white/10 px-4 py-2 font-semibold text-white backdrop-blur transition hover:bg-white/20 md:px-6 md:py-4"
                >
                  <FaArrowLeft size={16} />
                </button>
                {currentCalcType === 'medicine' && <AverageThreeNotes />}

                {currentCalcType === 'other' && <AverageOtherCourses />}
              </div>
            )}
          </section>
        </main>
      </section>
    </div>
  )
}
