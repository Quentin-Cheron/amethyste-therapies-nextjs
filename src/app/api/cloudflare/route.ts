import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  const nextUrl = req.nextUrl
  const imageId = nextUrl.searchParams.get('imageId') as string

  console.log('imageId', imageId)
  try {
    const response = await axios.get(
      `https://api.cloudflare.com/client/v4/accounts/2a2c02516e07193e154bb45b8b72963a/images/v1/${imageId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.CLOUDFLARE_API_KEY}`,
        },
      },
    )
    return NextResponse.json(response.data.result.variants[0])
  } catch (error) {
    console.error("Erreur lors de la récupération de l'image:", error)
    return null
  }
}
