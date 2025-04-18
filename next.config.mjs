import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'imagedelivery.net'],
  },
  // Your Next.js config here
}

export default withPayload(nextConfig)
