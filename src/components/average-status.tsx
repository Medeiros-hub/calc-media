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
        <div className="my-4 w-full rounded-lg border border-red-500 bg-red-100 p-4 text-center text-red-500 shadow-lg">
          <h3 className="block text-xl font-bold">Reprovado ❌</h3>
          <p className="mt-2">
            Sua média é <span className="font-bold">{average}</span>. Você foi
            reprovado. <span className="font-bold">Não faz AVF</span>.
          </p>
        </div>
      )}

      {average !== null && average >= 7 && (
        <div className="my-4 w-full rounded-lg border border-green-500 bg-green-100 p-4 text-center text-green-500 shadow-lg">
          <h3 className="block text-xl font-bold">Aprovado ✅</h3>
          <p className="mt-2">
            Sua média é <span className="font-bold">{average}</span>. Você foi
            aprovado. <span className="font-bold">Não faz AVF</span>.
          </p>
        </div>
      )}

      {average !== null && average >= 4 && average < 7 && (
        <div className="my-4 w-full rounded-lg border border-yellow-500 bg-yellow-100 p-4 text-center text-yellow-600 shadow-lg">
          <h3 className="block text-xl font-bold">AVF ⚠️</h3>
          <p className="mt-2">
            Sua média é <span className="font-bold">{average}</span>. Você
            precisa fazer AVF.
          </p>
          {finalAverage !== undefined ? (
            <p className="mt-2">
              Para ser aprovado, precisa tirar pelo menos{' '}
              <span className="font-bold">5</span> na AVF <strong>e</strong>{' '}
              alcançar média final mínima de{' '}
              <span className="font-bold">{finalAverage}</span>.
            </p>
          ) : (
            <p className="mt-2">
              Para ser aprovado, precisa tirar pelo menos{' '}
              <span className="font-bold">5</span> na AVF e obter média final
              (média inicial + AVF ÷ 2) de pelo menos{' '}
              <span className="font-bold">5</span>.
            </p>
          )}
        </div>
      )}
    </>
  )
}
