'use server'

import { getAllServices } from '@/actions/services'
import Card from '@/components/card'

type CardProps = {
  id: string | number
  slug?: string
  name?: string
  description: string
  media: { filename: string; imageId: string }
}

export default async function Page() {
  const services = await getAllServices()
  const data = services?.data as CardProps[]

  console.log(data)
  return (
    <div className="max-w-6xl mx-auto px-4 pb-8">
      <h1 className="text-center text-4xl font-bold mb-12 text-gray-800">Les Services proposés</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((service) => <Card key={service.id} item={service} type="service" />)}
      </div>
    </div>
  )
}
