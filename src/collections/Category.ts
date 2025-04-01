import type { CollectionConfig } from 'payload'

export const CategoryPost: CollectionConfig = {
  slug: 'category-post',
  labels: {
    plural: 'Catégorie des posts',
    singular: 'Categorie',
  },
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
      name: 'description',
      type: 'textarea',
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
