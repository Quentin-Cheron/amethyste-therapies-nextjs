import { Suspense } from 'react'
import Card from './card'

type CardSectionProps = {
  id: string | number
  name: string
  slug: string
  description?: string
  media: { filename: string; imageId: string }
}[]

export default function CardSection({ items, type }: { items: CardSectionProps; type: string }) {
  return (
    <section className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 mt-10">
      {items.map((item) => (
        <Card key={item.id} item={item} type={type} />
      ))}
    </section>
  )
}
