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
    console.log('response', response.data)
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

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const response = await fetch(
      'https://api.cloudflare.com/client/v4/accounts/2a2c02516e07193e154bb45b8b72963a/images/v1',
      {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${process.env.CLOUDFLARE_API_KEY}`,
        },
      },
    )
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error uploading to Cloudflare:', error)
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 },
    )
  }
}
