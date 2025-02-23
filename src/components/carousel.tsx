import * as React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { CardContent, Card as Cards } from '@/components/ui/card'
import Card from './card'
import { getAllServices } from '@/actions/services'

type CardSectionProps = {
  id: string | number
  name: string
  slug: string
  description?: string
  media: { filename: string }
}

export async function CarouselSize() {
  const postsData = await getAllServices()
  const { data } = postsData as { success: boolean; data: CardSectionProps[] }

  return (
    <Carousel
      opts={{
        align: 'start',
      }}
    >
      <CarouselContent>
        {data.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="py-1">
              <Cards>
                <CardContent>
                  <Card type="service" item={item} />
                </CardContent>
              </Cards>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
