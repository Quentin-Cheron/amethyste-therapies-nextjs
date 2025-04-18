'use server'

import { getAllCategoryTarifs } from '@/actions/categoryTarifs'
import Card from '@/components/card'

type CardProps = {
  id: string | number
  slug?: string
  name?: string
  description?: string
  media: { filename: string; imageId: string }
}

export default async function Page() {
  const tarifs = await getAllCategoryTarifs()
  const data = (tarifs?.data as CardProps[]) || []

  return (
    <div className="max-w-6xl mx-auto px-4 pb-8">
      <h1 className="text-center text-4xl font-bold mb-12 text-gray-800">Les Tarifs</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((tarif) => <Card key={tarif.id} item={tarif} type="tarif" />)}
      </div>
    </div>
  )
}
