import { useState, type ChangeEvent } from "react"

export default function NumberInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
) {
  const [value, setValue] = useState<string>('')

  const handleSetInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const valueAsNumber = parseFloat(e.target.value)

    if (e.target.value === '') {
      setValue('')
      props.onChange?.(e)
      return
    }

    if (valueAsNumber > 10) {
      setValue('10')
      e.target.value = "10"
    } else {
      setValue(e.target.value)
    }
    
    props.onChange?.(e)
  }

  return (
    <input
      {...props}
      type="number"
      step="0.1"
      min="0"
      max="10"
      inputMode="decimal"
      placeholder="0 a 10"
      value={value}
      onChange={handleSetInputValue}
      required
      className="w-full min-w-[300px] rounded-lg bg-white/10 px-4 py-3 text-white placeholder-white/60 backdrop-blur transition valid:bg-white/30 focus:border-white/30 focus:ring-2 focus:ring-white/40 focus:outline-none"
    />
  )
}
