import { NextResponse } from 'next/server'

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
