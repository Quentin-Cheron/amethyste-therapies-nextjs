import { User } from '@/payload-types'
import { HTMLConverterFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'
import slugify from 'slugify'

export const Post: CollectionConfig = {
  slug: 'post',
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
      admin: {
        hidden: true,
      },
      required: true,
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      hidden: true,
      defaultValue: ({ req: { user } }: { req: { user: User } }) => user?.id,
      required: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'category',
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
