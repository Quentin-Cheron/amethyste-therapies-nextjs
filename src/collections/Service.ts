import type { CollectionConfig } from 'payload'
import slugify from 'slugify'

export const Service: CollectionConfig = {
  slug: 'service',
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
      name: 'slug',
      type: 'text',
      required: true,
      admin: {
        hidden: true,
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
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
