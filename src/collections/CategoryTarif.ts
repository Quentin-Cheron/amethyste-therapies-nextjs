import type { CollectionConfig } from 'payload'
import slugify from 'slugify'

export const CategoryTarif: CollectionConfig = {
  slug: 'category-tarif',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      admin: {
        hidden: true,
      },
      required: true,
    },
  ],
  hooks: {
    beforeChange: [
      ({ data, operation }) => {
        if (operation === 'create' || operation === 'update') {
          return {
            ...data,
            slug: slugify(data.name, { lower: true, strict: true }),
          }
        }
        return data
      },
    ],
  },
}
