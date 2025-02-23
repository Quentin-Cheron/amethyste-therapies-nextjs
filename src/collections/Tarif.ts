import type { CollectionConfig } from 'payload'

export const Tarif: CollectionConfig = {
  slug: 'tarif',
  admin: {
    useAsTitle: 'price',
  },
  fields: [
    {
      name: 'price',
      type: 'text',
      required: true,
    },
    {
      name: 'time',
      type: 'text',
      required: true,
    },
    {
      name: 'consultationType',
      type: 'select',
      options: [
        { label: 'Première consultation', value: 'Première consultation' },
        { label: 'Consultation de suivi', value: 'Consultation de suivi' },
      ],
    },
    {
      name: 'consultationService',
      type: 'relationship',
      relationTo: 'service',
      hasMany: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'category-tarif',
      hasMany: true,
      required: true,
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
