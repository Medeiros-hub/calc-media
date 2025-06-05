interface AverageStatusProps {
  average: number | null
  finalAverage?: number | null
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
            reprovado. Não faz AVF.
          </p>
        </div>
      )}

      {average !== null && average >= 7 && (
        <div className="my-4 w-full rounded-lg border border-green-500 bg-green-100 p-4 text-center text-green-500 shadow-lg">
          <h3 className="block text-xl font-bold">Aprovado ✅</h3>
          <p className="mt-2">
            Sua média é <span className="font-bold">{average}</span>. Você foi
            aprovado. Não faz AVF.
          </p>
        </div>
      )}

      {average !== null && average >= 4 && average < 7 && (
        <div className="my-4 w-full rounded-lg border border-yellow-500 bg-yellow-100 p-4 text-center text-yellow-600 shadow-lg">
          <h3 className="block text-xl font-bold">AVF ⚠️</h3>
          <p className="mt-2">
            Sua média é <span className="font-bold">{average}</span>. Você está
            de recuperação. Precisa fazer AVF.
          </p>
          <p className="mt-2">
            Para ser aprovado, precisa tirar no mínimo{' '}
            <span className="font-bold">{finalAverage}</span> na AVF.
          </p>
        </div>
      )}
    </>
  )
}
