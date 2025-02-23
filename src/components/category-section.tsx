'use client'

import { getAllCategories } from '@/actions/blog'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'

type CategorySectionProps = {
  id: string
  name: string
  media: { filename: string }
}

type CategorySectionPropsType = {
  setCategoryFilter: (categoryName: string) => void
}

export default function CategorySection({ setCategoryFilter }: CategorySectionPropsType) {
  const [categories, setCategories] = useState<CategorySectionProps[]>([])

  const getCategory = async () => {
    const categoriesData = await getAllCategories()
    const { data } = categoriesData as { success: boolean; data: CategorySectionProps[] }
    setCategories(data)
  }

  useEffect(() => {
    getCategory()
  }, [])

  return (
    <div className="max-w-sm mx-auto gap-4 flex justify-center">
      <Button className="cursor-pointer" onClick={() => setCategoryFilter('')}>
        Tous
      </Button>
      {categories.map((category) => (
        <Button
          key={category.id}
          className="cursor-pointer"
          onClick={() => setCategoryFilter(category.name)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  )
}
