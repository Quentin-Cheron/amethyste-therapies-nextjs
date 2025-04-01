import { getServiceBySlug } from '@/actions/services'
import { RichText } from '@payloadcms/richtext-lexical/react'
import Image from 'next/image'
import style from './service.module.scss'

type ServiceProps = {
  id: number
  name: string
  content: any
  media: { filename: string; width: number; height: number }
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const slugParam = await params.slug
  const service = await getServiceBySlug(slugParam)

  const { name, content, media } = service?.data as ServiceProps

  return (
    <div className="overflow-hidden bg-white">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen h-96 bg-gray-50 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <h1 className="mt-2 text-3xl/8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            {name}
          </h1>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              fill="none"
              width={404}
              height={384}
              viewBox="0 0 404 384"
              aria-hidden="true"
              className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
            >
              <defs>
                <pattern
                  x={0}
                  y={0}
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    fill="currentColor"
                    width={4}
                    height={4}
                    className="text-gray-200"
                  />
                </pattern>
              </defs>
              <rect fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" width={404} height={384} />
            </svg>
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <Image
                  alt="Whitney leaning against a railing on a downtown street"
                  src={`/uploads/${media.filename}`}
                  width={media.width}
                  height={media.height}
                  className="aspect-12/7 h-96 w-full rounded-lg object-cover shadow-lg lg:aspect-auto"
                />
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto text-base/7 text-gray-500">
              <RichText data={content} className={style.richText} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
