'use server'

import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })

export const getAllPosts = async () => {
  try {
    const data = await payload.find({
      collection: 'post',
      sort: '-createdAt',
    })
    if (!data.docs) {
      return { success: false, data: 'No data' }
    }

    return { success: true, data: data.docs }
  } catch (error) {
    return { success: false, data: error }
  }
}

export const getPostBySlug = async (slug: string) => {
  try {
    const data = await payload.find({
      collection: 'post',
      select: {
        id: true,
        name: true,
        slug: true,
        summary: true,
        content: true,
        author: true,
        category: true,
        media: true,
      },
      where: {
        slug: { equals: slug },
      },
    })
    console.log(slug)
    if (!data.docs) {
      return { success: false, data: 'No data' }
    }

    return { success: true, data: data.docs[0] }
  } catch (error) {
    return { success: false, data: error }
  }
}

export const getAllCategories = async () => {
  try {
    const data = await payload.find({
      collection: 'category',
      sort: 'ASC',
      select: {
        id: true,
        name: true,
        media: true,
      },
    })
    if (!data.docs) {
      return { success: false, data: 'No data' }
    }

    return { success: true, data: data.docs }
  } catch (error) {
    return { success: false, data: error }
  }
}
