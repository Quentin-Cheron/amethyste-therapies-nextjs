import axios from 'axios'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const response = await axios.post(
      'https://api.cloudflare.com/client/v4/accounts/2a2c02516e07193e154bb45b8b72963a/images/v1',
      formData,
      {
        headers: {
          Authorization: `Bearer ${process.env.CLOUDFLARE_API_KEY}`,
          'Content-Type': 'multipart/form-data',
        },
      },
    )

    return NextResponse.json(response.data)
  } catch (error) {
    console.error('Error uploading to Cloudflare:', error)
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}
