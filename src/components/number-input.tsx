export default function NumberInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
) {
  return (
    <input
      type="number"
      step="0.1"
      min="0"
      max="10"
      inputMode="decimal"
      className="w-full min-w-[300px] rounded-lg bg-white/10 px-4 py-3 text-white placeholder-white/60 backdrop-blur transition valid:bg-white/30 focus:border-white/30 focus:ring-2 focus:ring-white/40 focus:outline-none"
      placeholder="0 a 10"
      required
      {...props}
    />
  )
}
