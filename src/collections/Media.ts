import FormData from 'form-data'
import type { CollectionConfig } from 'payload'
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
    { name: 'imageId', type: 'text', admin: { readOnly: true } },
  ],
  upload: {
    cacheTags: false,
  },
  hooks: {
    afterChange: [
      async ({ doc, req, operation }) => {
        if (!doc.filename || operation !== 'create') {
          return doc
        }

        try {
          console.log('Starting Cloudflare upload for:', doc.filename)

          const formData = new FormData()

          const fileData = req.file?.data
          if (!fileData) {
            console.error('No file data found')
            return doc
          }

          formData.append('file', Buffer.from(fileData), {
            filename: doc.filename,
            contentType: doc.mimeType || 'image/jpeg',
          })

          const response = await axios.post('/api/cloudflare', formData, {
            headers: {
              ...formData.getHeaders(),
            },
          })

          const imageId = response.data?.result?.id

          if (!imageId) {
            console.error('No image ID returned from Cloudflare')
            return doc
          }

          await req.payload.update({
            collection: 'media',
            id: doc.id,
            data: { imageId },
          })

          console.log('Cloudflare image ID set:', imageId)

          return doc
        } catch (error) {
          console.error('Error uploading to Cloudflare:', error)
          return doc
        }
      },
    ],
  },
}
