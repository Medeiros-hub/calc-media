import { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa6'

import logoUnileao from './assets/logo-unileao.svg'
import AverageOtherCourses from './components/average-other-courses'
import AverageThreeNotes from './components/average-three-notes'
import TopBar from './components/topbar'

const CalculationType = {
  THREENOTES: 'threeNotes',
  OTHER: 'other',
} as const

type CalculationType = (typeof CalculationType)[keyof typeof CalculationType]

export default function App() {
  const [calcType, setCalcType] = useState<CalculationType | null>(null)

  const handleSelectCalcType = (type: CalculationType) => {
    setCalcType(type)
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
            {calcType === null ? (
              <>
                <h2 className="font-inter mb-4 text-center text-xl font-semibold">
                  Selecione o tipo de cálculo:
                </h2>
                <div
                  key="buttons"
                  className="animate-fade-in flex flex-wrap justify-center gap-4"
                >
                  <button
                    onClick={() => handleSelectCalcType('threeNotes')}
                    className="w-xs cursor-pointer rounded-lg bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
                  >
                    Média de 3 Notas - Medicina
                  </button>
                  <button
                    onClick={() => handleSelectCalcType('other')}
                    className="w-xs cursor-pointer rounded-lg bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
                  >
                    Média Demais Cursos
                  </button>
                </div>
              </>
            ) : (
              <div className="animate-fade-in flex scale-100 flex-col items-center transition duration-500 md:items-baseline">
                <button
                  onClick={() => setCalcType(null)}
                  className="cursor-pointer self-start rounded-lg bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  <FaArrowLeft size={20} />
                </button>
                {calcType === 'threeNotes' && <AverageThreeNotes />}
                {calcType === 'other' && <AverageOtherCourses />}
              </div>
            )}
          </section>
        </main>
      </section>
    </div>
  )
}
