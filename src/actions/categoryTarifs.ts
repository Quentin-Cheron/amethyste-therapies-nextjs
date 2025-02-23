import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })

export const getAllCategoryTarifs = async () => {
  try {
    const categoryTarifs = await payload.find({
      collection: 'category-tarif',
      sort: 'ASC',
      select: {
        id: true,
        name: true,
        media: true,
      },
    })
    return { success: true, data: categoryTarifs.docs }
  } catch (error) {
    console.error(error)
  }
}
