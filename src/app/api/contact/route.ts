import { EmailTemplate } from '@/components/template/contact'
import { NextRequest, NextResponse } from 'next/server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Utiliser les données reçues pour générer l'email
    const emailContent = await EmailTemplate(body)

    const { data, error } = await resend.emails.send({
      from: 'contact@amethyste-therapies.fr',
      to: 'amethyste.therapies@gmail.com',
      subject: 'Contact Amethyste Therapies',
      react: emailContent,
    })

    if (error) {
      return new NextResponse(JSON.stringify({ error }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    return new NextResponse(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
