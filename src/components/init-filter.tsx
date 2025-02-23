'use client'

import { Suspense, useEffect, useState } from 'react'
import CategorySection from './category-section'
import CardSection from './card-section'
import { getAllPosts } from '@/actions/blog'
import slugify from 'slugify'
import Filter from './filter'

type CardSectionProps = {
  id: string
  name: string
  slug: string
  category: { name: string }
  media: { filename: string }
}

export default function InitFilter() {
  const [postsData, setPostsData] = useState<CardSectionProps[]>([])
  const [categoryFilter, setCategoryFilter] = useState<string>('')
  const [filter, setFilter] = useState<string>('')

  const fetchAllPosts = async () => {
    const postsData = await getAllPosts()

    setPostsData(postsData.data as CardSectionProps[])
  }

  useEffect(() => {
    fetchAllPosts()
  }, [])

  const filterPosts = postsData
    .filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
    .filter((item) =>
      slugify(item.category.name, { lower: true }).includes(categoryFilter.toLowerCase()),
    )

  const categoryFilterPosts = (e: string) => {
    setCategoryFilter(e)
    setFilter('')
  }

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      <Suspense fallback={<div className="text-center text-gray-600">Chargement...</div>}>
        <CategorySection setCategoryFilter={categoryFilterPosts} />
      </Suspense>
      <CardSection items={filterPosts} type="post" />
    </div>
  )
}
