import { useState } from 'react'

// import { FaArrowLeft } from 'react-icons/fa6'
import logoUnileao from './assets/logo-unileao.svg'
import AverageOtherCourses from './components/average-other-courses'
import AverageThreeNotes from './components/average-three-notes'
// import TopBar from './components/topbar'

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
    <div className="font-inter flex min-h-dvh w-full flex-col">
      {/* <TopBar /> */}

      <section className="flex flex-1 flex-col items-center justify-center gap-10">
        <img src={logoUnileao} className="mt-2 w-[300px] md:w-[400px]" />

        <main>
          <section className="flex flex-col items-center justify-center text-white transition-all duration-300 ease-in-out">
            {calcType === null ? (
              <>
                <div className="flex flex-col gap-y-[18px] text-center md:gap-y-3">
                  <h1 className="text-[32px] font-extrabold md:text-4xl">
                    Selecione seu Curso
                  </h1>
                  <p className="text-base font-medium lg:text-2xl">
                    Vamos calcular sua média de forma simples e rápida
                  </p>
                </div>

                <div
                  key="buttons"
                  className="animate-fade-in mt-7 flex flex-col gap-6 lg:mt-[76px] lg:flex-row lg:gap-0"
                >
                  <button
                    onClick={() => handleSelectCalcType('threeNotes')}
                    className="w-full cursor-pointer rounded-lg shadow-[0px_3px_6px_0px_#00000040] lg:mx-10"
                  >
                    <div className="bg-card flex h-full flex-col items-center rounded-t-lg px-14 py-14">
                      <h2 className="text-[32px] font-extrabold lg:text-4xl">
                        Medicina
                      </h2>
                      <p className="text-base text-white/85 lg:text-2xl">
                        Cálculo especial para o curso de Medicina
                      </p>
                    </div>
                    <div className="rounded-b-lg bg-white text-xl text-[#060606]/70 lg:text-2xl">
                      Ir para calculo
                    </div>
                  </button>

                  <button
                    onClick={() => handleSelectCalcType('other')}
                    className="w-full cursor-pointer rounded-lg shadow-[0px_3px_6px_0px_#00000040] lg:mx-10"
                  >
                    <div className="bg-card flex h-full flex-col items-center rounded-t-lg px-14 py-14">
                      <h2 className="text-[32px] font-extrabold lg:text-4xl">
                        Demais Cursos
                      </h2>
                      <p className="text-base text-white/85 lg:text-2xl">
                        Cálculo padrão para todos os outros cursos
                      </p>
                    </div>
                    <div className="rounded-b-lg bg-white text-xl text-[#060606]/70 lg:text-2xl">
                      Ir para calculo
                    </div>
                  </button>
                </div>
              </>
            ) : (
              <div className="animate-fade-in flex scale-100 flex-col items-center transition duration-500 md:items-baseline">
                {/* <button
                  onClick={() => setCalcType(null)}
                  className="cursor-pointer self-start rounded-lg bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  <FaArrowLeft size={20} />
                </button> */}
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
