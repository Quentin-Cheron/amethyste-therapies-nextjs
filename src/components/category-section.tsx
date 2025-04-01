import { getAllCategories } from '@/actions/blog'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Skeleton } from './ui/skeleton'
import { useRouter } from 'next/navigation'
import { useQueryState, parseAsString } from 'nuqs'

type CategorySectionProps = {
  id: string
  name: string
  media: { filename: string }
}

export default function CategorySection() {
  const [categories, setCategories] = useState<CategorySectionProps[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const [filter, setFilter] = useQueryState('categories', parseAsString.withDefault(''))

  const getCategory = async () => {
    const categoriesData = await getAllCategories()
    const { data } = categoriesData as { success: boolean; data: CategorySectionProps[] }
    setCategories(data)
    setLoading(false)
  }

  const categoryFilterPosts = (e: string) => {
    setFilter(e)
  }

  useEffect(() => {
    getCategory()
  }, [])

  return (
    <div className="max-w-sm mx-auto gap-4 flex justify-center">
      <Button className="cursor-pointer" onClick={() => categoryFilterPosts('')}>
        Tous
      </Button>
      {categories.map((category) =>
        loading ? (
          <Skeleton className="h-10 w-full" key={category.id} />
        ) : (
          <Button
            key={category.id}
            className="cursor-pointer"
            onClick={() => categoryFilterPosts(category.name)}
          >
            {category.name}
          </Button>
        ),
      )}
    </div>
  )
}
