import React from 'react'
import '@/app/globals.css'
import Header from '@/components/layout/header'
import { Toaster } from 'sonner'
import Footer from '@/components/Footer'
import Info from '@/components/info'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Header />
        <NuqsAdapter>
          <main className="max-w-7xl mx-auto mt-29">
            {children}
            <Info />
          </main>
        </NuqsAdapter>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
