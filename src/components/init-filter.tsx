'use client'

import { useEffect, useState } from 'react'
import CategorySection from './category-section'
import CardSection from './card-section'
import { getAllPosts } from '@/actions/blog'
import slugify from 'slugify'
import Filter from './filter'
import { Skeleton } from './ui/skeleton'
import { useSearchParams } from 'next/navigation'
import { useQueryState, parseAsString } from 'nuqs'

type CardSectionProps = {
  id: string
  name: string
  slug: string
  category: { name: string }
  media: { filename: string }
}

export default function InitFilter() {
  const [postsData, setPostsData] = useState<CardSectionProps[]>([])
  const [filter, setFilter] = useQueryState('filter', parseAsString.withDefault(''))
  const searchParams = useSearchParams()
  const categoryFilter = searchParams.get('categories') || ''

  const [loading, setLoading] = useState(false)

  const fetchAllPosts = async () => {
    setLoading(true)
    const postsData = await getAllPosts()
    setPostsData(postsData.data as CardSectionProps[])
    setLoading(false)
  }

  useEffect(() => {
    fetchAllPosts()
  }, [])

  const filterPosts = postsData
    .filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
    .filter((item) =>
      slugify(item.category.name, { lower: true }).includes(categoryFilter.toLowerCase()),
    )

  return (
    <div>
      <Filter />
      <CategorySection />
      {loading ? (
        <div className="flex flex-wrap gap-4 mt-10">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <Skeleton className="h-[274px] w-[362.66px]" key={i} />
            ))}
        </div>
      ) : (
        <CardSection items={filterPosts} type="post" />
      )}
    </div>
  )
}
