import close from '../assets/close.svg'
import thumbDown from '../assets/thumb-down.svg'
import thumbUp from '../assets/thumb-up.svg'

interface AverageStatusProps {
  average: number | null
  finalAverage?: number
}

export default function AverageStatus({
  average,
  finalAverage,
}: AverageStatusProps) {
  return (
    <>
      {average !== null && average < 4 && (
        <div className="flex flex-col items-center justify-center pt-5">
          <p className="block text-xl font-normal">Você não atingiu a média.</p>
          <p className="mt-2 flex items-center gap-2.5">
            <span className="text-4xl">Nota: {average}</span>
            <img src={close} alt="" />
          </p>
        </div>
      )}

      {average !== null && average >= 7 && (
        <div className="flex flex-col items-center justify-center pt-5">
          <p className="block text-xl font-normal">
            Parabéns! Você atingiu a média necessária.
          </p>
          <p className="mt-2 flex items-center gap-2.5">
            <span className="text-4xl">Nota: {average}</span>
            <img src={thumbUp} alt="" />
          </p>
        </div>
      )}

      {average !== null && average >= 4 && average < 7 && (
        <div className="flex flex-col items-center justify-center pt-5">
          <p className="block text-xl font-normal">
            Infelizmente você terá que realizar a AVF.
          </p>
          <p className="mt-2 flex items-center gap-2.5">
            <span className="text-4xl">Nota: {average}</span>
            <img src={thumbDown} alt="" />
          </p>
          <p className="block pt-3.5 text-justify text-xl font-normal">
            Se você alcançar pelo menos{' '}
            <span className="text-2xl font-bold text-yellow-400">5</span> na
            AVF, sua média final será considerada. Nesse caso, será necessário
            obter{' '}
            <span className="text-2xl font-bold text-yellow-400">
              {finalAverage}
            </span>{' '}
            ou mais na AVF para ser aprovado.
          </p>
        </div>
      )}
    </>

    // <>
    //   {average !== null && average < 4 && (
    //     <div className="my-4 w-full rounded-lg border border-red-500 bg-red-100 p-4 text-center text-red-500 shadow-lg">
    //       <h3 className="block text-xl font-bold">Reprovado ❌</h3>
    //       <p className="mt-2">
    //         Sua média é <span className="font-bold">{average}</span>. Você foi
    //         reprovado. <span className="font-bold">Não faz AVF</span>.
    //       </p>
    //     </div>
    //   )}

    //   {average !== null && average >= 7 && (
    //     <div className="my-4 w-full rounded-lg border border-green-500 bg-green-100 p-4 text-center text-green-500 shadow-lg">
    //       <h3 className="block text-xl font-bold">Aprovado ✅</h3>
    //       <p className="mt-2">
    //         Sua média é <span className="font-bold">{average}</span>. Você foi
    //         aprovado. <span className="font-bold">Não faz AVF</span>.
    //       </p>
    //     </div>
    //   )}

    //   {average !== null && average >= 4 && average < 7 && (
    //     <div className="my-4 w-full rounded-lg border border-yellow-500 bg-yellow-100 p-4 text-center text-yellow-600 shadow-lg">
    //       <h3 className="block text-xl font-bold">AVF ⚠️</h3>
    //       <p className="mt-2">
    //         Sua média é <span className="font-bold">{average}</span>. Você
    //         precisa fazer AVF.
    //       </p>
    //       {finalAverage !== undefined ? (
    //         <>
    //           <p className="mt-2">
    //             Para ser aprovado, precisa alcançar{' '}
    //             <span className="font-bold">5</span> na AVF <strong>e</strong>{' '}
    //             alcançar uma nota mínima de{' '}
    //             <span className="font-bold">{finalAverage}</span>.
    //             <TooltipProvider delayDuration={100}>
    //               <Tooltip>
    //                 <TooltipTrigger asChild>
    //                   <button className="cursor-help text-blue-500 hover:text-blue-700">
    //                     <QuestionIcon size={18} />
    //                   </button>
    //                 </TooltipTrigger>
    //                 <TooltipContent className="z-50 max-w-xs rounded-md border border-white/20 bg-zinc-900/90 px-4 py-3 text-sm text-white shadow-xl backdrop-blur-md">
    //                   <p className="mb-1 font-semibold text-white/90">
    //                     📘 Cálculo da AVF
    //                   </p>
    //                   <ul className="list-disc space-y-1 pl-5">
    //                     <li>
    //                       AVF mínima: <strong>5</strong>
    //                     </li>
    //                     <li>
    //                       Média final: <strong>≥ 5</strong>
    //                     </li>
    //                   </ul>
    //                   <p className="mt-2 text-white/70 italic">
    //                     Fórmula: (média inicial + AVF) ÷ 2
    //                   </p>
    //                 </TooltipContent>
    //               </Tooltip>
    //             </TooltipProvider>
    //           </p>
    //         </>
    //       ) : (
    //         <p className="mt-2">
    //           Para ser aprovado, precisa tirar pelo menos{' '}
    //           <span className="font-bold">5</span> na AVF e obter uma nota
    //           mínima ((média inicial + AVF) ÷ 2) de pelo menos{' '}
    //           <span className="font-bold">5</span>.
    //         </p>
    //       )}
    //     </div>
    //   )}
    // </>
  )
}
