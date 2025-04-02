'use client'

import FormInput from '@/components/form-input'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

export default function Page() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>()

  const [isPending, startTransition] = useTransition()

  const sendMail = async (data: FormData) => {
    const { firstName, lastName, email, phone, message } = data
    startTransition(async () => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          message,
        }),
      })

      if (response.ok) {
        toast.success('Message envoyé avec succès')
        reset()
      } else {
        toast.error('Something went wrong')
      }
    })
  }

  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-gray-200/50 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full stroke-gray-300 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="100%" y={-1} className="overflow-visible fill-gray-100/20">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                />
              </svg>
              <div
                aria-hidden="true"
                className="absolute top-[calc(100%-13rem)] -left-56 transform-gpu blur-3xl lg:top-[calc(50%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))]"
              >
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                  }}
                  className="aspect-1155/678 w-[72.1875rem] bg-linear-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                />
              </div>
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Contact
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Vous souhaitez prendre rendez-vous ou avez des questions ? N&apos;hésitez pas à me
              contacter. Je vous répondrai dans les plus brefs délais.
            </p>
            <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Adresse</span>
                </dt>
                <dd>
                  Centre Médical du Vert Bocage
                  <br />
                  248 avenue de Wertheim
                  <br />
                  13300 Salon-de-Provence
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Téléphone</span>
                </dt>
                <dd>
                  <a href="tel:+33 6 24 66 30" className="hover:text-gray-900">
                    +33 6 27 34 66 30
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                </dt>
                <dd>
                  <a href="mailto:hello@example.com" className="hover:text-gray-900">
                    amethyste.therapies@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(sendMail)}
          method="POST"
          className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <FormInput
                label="Prénom"
                name="firstName"
                type="text"
                register={register}
                errors={errors}
                validation={{
                  required: 'Ce champ est obligatoire',
                }}
              />
              <FormInput
                label="Nom"
                name="lastName"
                type="text"
                register={register}
                errors={errors}
                validation={{
                  required: 'Ce champ est obligatoire',
                }}
              />
              <FormInput
                label="Email"
                name="email"
                type="email"
                register={register}
                validation={{
                  required: 'Ce champ est obligatoire',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Adresse email invalide',
                  },
                }}
                errors={errors}
              />
              <FormInput
                label="Téléphone"
                name="phone"
                type="tel"
                register={register}
                errors={errors}
                validation={{
                  required: 'Ce champ est obligatoire',
                }}
              />
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                  Message <span className="text-red-600">*</span>
                </label>
                <div className="mt-2.5">
                  <textarea
                    {...register('message', {
                      required: 'Ce champ est obligatoire',
                    })}
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md bg-gray-100 px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-200 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                    defaultValue={''}
                  />
                </div>
                {errors['message'] && (
                  <p className="mt-2 text-sm/6 text-red-600">
                    {errors['message'].message as string}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <Button type="submit">
                {isPending ? (
                  <span className="flex items-center">
                    Envoi en cours <Loader2 size={16} className="animate-spin ml-2" />
                  </span>
                ) : (
                  <span>Envoyer le message</span>
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
