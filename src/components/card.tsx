'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import slugify from 'slugify'

type CardProps = {
  item: {
    id: string | number
    slug?: string
    name?: string
    description?: string
    media: { filename: string; imageId: string }
  }
  type: string
}

export default function Card({ item, type }: CardProps) {
  const [imageUrl, setImageUrl] = useState('')
  const slug = slugify((item.slug || item.name) as string, { lower: true })
  let url = ''

  switch (type) {
    case 'post':
      url = `/blog/post/${slug}`
      break
    case 'service':
      url = `/services/${slug}`
      break
    default:
      url = `/tarifs/${slug}`
      break
  }

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const response = await fetch(`/api/cloudflare?imageId=${item.media.imageId}`)
        const data = await response.json()
        setImageUrl(data)
      } catch (error) {
        console.error('Error fetching image URL:', error)
      }
    }

    if (item.media.imageId) {
      fetchImageUrl()
    }
  }, [item.media.imageId])
  return (
    <article
      key={item.id}
      className="cursor-pointer relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-48 group h-full bg-center bg-cover bg-no-repeat aos-init aos-animate"
      style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : undefined }}
      data-aos="fade-up"
    >
      {imageUrl && <Image src={imageUrl} alt={item.name || ''} width={1000} height={1000} />}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
      <h3 className="h-[50px] text-lg font-semibold leading-6 text-white line-clamp-2">
        {item.name}
      </h3>
      <p className="text-sm text-white line-clamp-2">{item.description}</p>
      <div className="cursor-pointer absolute inset-0 bg-black/40 transform translate-y-full transition-transform duration-700 group-hover:translate-y-0 flex items-center justify-center p-4 z-90">
        <Link
          href={url}
          className="absolute inset-0 z-10 text-white text-sm flex items-center justify-center"
          aria-label={`En savoir plus sur ${item.name}`}
        >
          <span className="hover:underline">En savoir plus</span>
        </Link>
      </div>
    </article>
  )
}
