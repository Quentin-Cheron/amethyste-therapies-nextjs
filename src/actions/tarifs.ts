'use server'

import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })

export const getAllTarifs = async () => {
  try {
    const tarifs = await payload.find({
      collection: 'tarif',
      select: {
        price: true,
        description: true,
        category: true,
        type: true,
        media: true,
      },
    })
    return { success: true, data: tarifs.docs }
  } catch (error) {
    return { success: false, data: 'Error fetching tarifs' }
  }
}
export const getTarifsByCategoryTarif = async (categorySlug: string) => {
  try {
    const payload = await getPayload({ config })

    // 1️⃣ Trouver l'ID de la catégorie à partir du slug
    const categoryData = await payload.find({
      collection: 'category-tarif',
      where: {
        slug: { equals: categorySlug },
      },
    })

    if (!categoryData.docs.length) {
      return { success: false, data: 'Category not found' }
    }

    const categoryId = categoryData.docs[0].id

    // 2️⃣ Trouver tous les tarifs qui ont cette catégorie
    const data = await payload.find({
      collection: 'tarif',
      select: {
        price: true,
        description: true,
        type: true,
        media: true,
        category: true,
        consultationType: true,
        consultationService: true,
        time: true,
      },
      populate: {
        media: { filename: true },
      },
      where: {
        category: { contains: categoryId },
      },
    })

    if (!data.docs.length) {
      return { success: false, data: 'No tarifs found' }
    }

    return { success: true, data: data.docs }
  } catch (error) {
    console.error(error)
    return { success: false, data: 'Error fetching tarifs' }
  }
}
