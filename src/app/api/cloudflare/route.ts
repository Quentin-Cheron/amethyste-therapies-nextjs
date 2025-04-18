import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  const nextUrl = req.nextUrl
  const imageId = nextUrl.searchParams.get('imageId') as string

  try {
    const response = await axios.get(
      `https://api.cloudflare.com/client/v4/accounts/2a2c02516e07193e154bb45b8b72963a/images/v1/${imageId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.CLOUDFLARE_API_KEY}`,
        },
      },
    )

    if (response.data.result && response.data.result.variants) {
      return NextResponse.json(response.data.result.variants[0])
    } else {
      console.error('Image ou variante non trouvée')
      return NextResponse.json({ error: 'Image not found' }, { status: 404 })
    }
  } catch (error) {
    console.error("Erreur lors de la récupération de l'image:", error)
    return NextResponse.json(
      { error: "Erreur lors de la récupération de l'image" },
      { status: 500 },
    )
  }
}
