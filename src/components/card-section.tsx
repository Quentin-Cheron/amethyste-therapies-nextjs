'use client'

import { Suspense } from 'react'
import Card from './card'

type CardSectionProps = {
  id: string | number
  name: string
  slug: string
  description?: string
  media: { filename: string }
}[]

export default function CardSection({ items, type }: { items: CardSectionProps; type: string }) {
  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 mt-10">
      {items.map((item) => (
        <Suspense
          key={item.id}
          fallback={<div className="text-center text-gray-600">Chargement...</div>}
        >
          <Card item={item} type={type} />
        </Suspense>
      ))}
    </section>
  )
}
