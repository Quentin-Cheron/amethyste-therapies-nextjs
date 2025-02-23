import { useEffect, useRef, useState } from 'react'
import debounce from 'debounce'
import { Input } from './ui/input'
import { Button } from './ui/button'

interface FilterProps {
  filter: string
  setFilter: (value: string) => void
}

export default function Filter({ filter, setFilter }: FilterProps) {
  // État local pour répercuter instantanément la valeur saisie
  const [localValue, setLocalValue] = useState(filter)

  // Mémoriser la fonction debouncée pour éviter qu'elle ne soit recréée à chaque render
  const debouncedSetFilter = useRef(
    debounce((value: string) => {
      setFilter(value)
    }, 500),
  ).current

  useEffect(() => {
    setLocalValue(filter)
  }, [filter])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setLocalValue(newValue)
    debouncedSetFilter(newValue)
  }

  return (
    <div className="flex items-center gap-4 max-w-md mx-auto mb-10">
      <Input type="text" placeholder="Rechercher..." value={localValue} onChange={handleChange} />
      <Button className="cursor-pointer">Rechercher</Button>
    </div>
  )
}
