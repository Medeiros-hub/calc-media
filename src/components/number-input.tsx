export default function NumberInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
) {
  return (
    <input
      {...props}
      type="number"
      step="0.01"
      inputMode="decimal"
      placeholder="0 a 10"
      className="text-nunito w-full rounded-lg bg-white/30 px-6 py-2.5 text-right text-xl text-white transition valid:bg-white/30 focus:border-white/30 focus:ring-2 focus:ring-white/40 focus:outline-none lg:text-3xl"
      // className="w-full max-w-xs rounded-md bg-white/10 px-4 py-3 text-white placeholder-white/60 backdrop-blur transition valid:bg-white/30 focus:border-white/30 focus:ring-2 focus:ring-white/40 focus:outline-none"
    />
  )
}
