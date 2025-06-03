interface NumberInputProps {
  onChange: (value: string) => void
}

export default function NumberInput({ onChange }: NumberInputProps) {
  return (
    <input
      type="number"
      className="w-full rounded-lg border border-gray-300 bg-white p-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
      placeholder="0 a 10"
      onChange={(e) => onChange(e.target.value)}
    />
  )
}
