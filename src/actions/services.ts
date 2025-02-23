'use server'

import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })

export const getAllServices = async () => {
  try {
    const services = await payload.find({
      collection: 'service',
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        image: true,
        media: true,
      },
    })
    return { success: true, data: services.docs }
  } catch (error) {
    console.error(error)
  }
}

export const getServiceBySlug = async (slug: string) => {
  try {
    const data = await payload.find({
      collection: 'service',
      select: {
        id: true,
        name: true,
        slug: true,
        description: true,
        content: true,
        author: true,
        category: true,
        media: true,
      },
      where: {
        slug: { equals: slug },
      },
    })
    if (!data.docs) {
      return { success: false, data: 'No data' }
    }

    return { success: true, data: data.docs[0] }
  } catch (error) {
    console.error(error)
  }
}
