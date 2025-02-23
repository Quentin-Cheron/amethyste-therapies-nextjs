import React from 'react'
import '@/app/globals.css'
import Hero from '@/components/hero'
import Features from '@/components/feature'
import { CarouselSize } from '@/components/carousel'
import { Metadata } from 'next'
import Accompagnement from '@/components/accompagnement'

export const metadata: Metadata = {
  title: 'Psychothérapeute à Salon-de-Provence | EMDR & TCC | Cabinet de Psychothérapie',
  description:
    'Psychothérapeute spécialisée en EMDR, TCC et hypnothérapie à Salon-de-Provence. Accompagnement personnalisé pour anxiété, dépression, traumatismes. Prenez rendez-vous.',
  keywords:
    'psychothérapeute Salon-de-Provence, EMDR, TCC, thérapie cognitive comportementale, hypnothérapie, anxiété, dépression, traumatisme, thérapie, bien-être mental',
}

export default async function HomePage() {
  return (
    <div>
      <Hero />
      <Features />
      <Accompagnement />
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Découvrez nos Services Thérapeutiques
        </h2>
        <CarouselSize />
      </section>
    </div>
  )
}
