import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { parseAsString, useQueryState } from 'nuqs'

export default function Filter() {
  const [inputValue, setInputValue] = useState('')
  const [value, setValue] = useQueryState('filter', parseAsString.withDefault(''))

  const handleChange = () => {
    setValue(inputValue)
  }

  return (
    <div className="flex items-center gap-4 max-w-md mx-auto mb-10">
      <Input
        type="text"
        value={inputValue}
        placeholder="Rechercher..."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button className="cursor-pointer" onClick={handleChange}>
        Rechercher
      </Button>
    </div>
  )
}
