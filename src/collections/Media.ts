import FormData from 'form-data'
import type { CollectionConfig } from 'payload'
import path from 'path'
import axios from 'axios'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    cacheTags: false,
  },
  hooks: {
    afterChange: [
      async ({ doc, req }) => {
        if (doc.cloudflareId || !doc.filename) {
          return doc
        }

        try {
          console.log('Starting Cloudflare upload for:', doc.filename)

          const form = new FormData()

          const fileData = await req.file?.data

          if (!fileData) {
            console.error('No file data found')
            return doc
          }

          form.append('file', Buffer.from(fileData), {
            filename: doc.filename,
            contentType: doc.mimeType || 'image/jpeg',
          })

          const response = await axios.post(
            'https://api.cloudflare.com/client/v4/accounts/2a2c02516e07193e154bb45b8b72963a/images/v1',
            form,
            {
              headers: {
                Authorization: `Bearer ${process.env.CLOUDFLARE_API_KEY}`,
                ...form.getHeaders(),
              },
            },
          )

          console.log(response.data)

          return doc
        } catch (error) {
          console.error('Error uploading to Cloudflare:', error)
          return doc
        }
      },
    ],
  },
}
