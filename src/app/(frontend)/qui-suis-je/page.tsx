import Image from 'next/image'
import React from 'react'

const formations = [
  {
    name: 'Formation Initiale',
    description:
      "Licence en Sciences du Langage et de la Communication, suivie d'un Master en Sciences du Langage, spécialisation en psycholinguistique et plurilinguisme.",
    date: '2016',
    dateTime: '2016-09',
  },
  {
    name: 'Certifications Thérapeutiques',
    description:
      'Praticien supérieur en Psychothérapie et TCC, certification en Hypnothérapie clinique Cognitivo-Comportementale.',
    date: '2018',
    dateTime: '2018-09',
  },
  {
    name: 'Spécialisations Avancées',
    description:
      'Certifications en EMDR+, PNL, ICV (Intégration du Cycle de la Vie), et formations en trauma psychique avec la Dre Pascale Brillon.',
    date: '2020',
    dateTime: '2020-06',
  },
  {
    name: 'Expertise Bien-être',
    description:
      'Certifications en Relaxologie, Sophrologie, EFT/TLE, et hypnose Ericksonienne spécialisée pour enfants et adolescents.',
    date: '2021',
    dateTime: '2021-01',
  },
]

export default function Example() {
  return (
    <div className="bg-white">
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-primary/10 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-5xl font-bold tracking-tight text-balance text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                Une approche thérapeutique intégrative et personnalisée
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
                  Passionnée par l&apos;Humain dans sa globalité, j&apos;ai construit mon parcours
                  professionnel autour de valeurs d&apos;empathie, d&apos;authenticité et de
                  bienveillance. Mon approche thérapeutique intégrative combine différentes méthodes
                  validées scientifiquement pour répondre aux besoins spécifiques de chaque patient.
                </p>
              </div>
              <Image
                width={1980}
                height={1900}
                alt="Therapeutic approach"
                src="/uploads/global/head.webp"
                className="mt-10 aspect-6/5 w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

        {/* Domaines d'expertise */}
        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Domaines d&apos;Accompagnement
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              J&apos;accompagne mes patients dans diverses problématiques incluant :
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 list-disc list-inside max-w-lg mx-auto">
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 flex-shrink-0 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm0-4h-2V7h2v6z"
                    clipRule="evenodd"
                  />
                </svg>
                Addictions et dépendances
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 flex-shrink-0 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm0-4h-2V7h2v6z"
                    clipRule="evenodd"
                  />
                </svg>
                Dépressions et burn-out
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 flex-shrink-0 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm0-4h-2V7h2v6z"
                    clipRule="evenodd"
                  />
                </svg>
                Stress post-traumatique
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 flex-shrink-0 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm0-4h-2V7h2v6z"
                    clipRule="evenodd"
                  />
                </svg>
                Phobies et angoisses
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 flex-shrink-0 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm0-4h-2V7h2v6z"
                    clipRule="evenodd"
                  />
                </svg>
                Difficultés relationnelles
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-4 w-4 flex-shrink-0 text-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm0-4h-2V7h2v6z"
                    clipRule="evenodd"
                  />
                </svg>
                Développement personnel
              </li>
            </ul>
          </div>
        </div>

        {/* Timeline section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12">
            Mon Parcours Professionnel
          </h2>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {formations.map((item) => (
              <div key={item.name} className="border border-gray-200 p-6 rounded-lg shadow-sm">
                <time
                  dateTime={item.dateTime}
                  className="flex items-center text-sm font-semibold text-primary"
                >
                  <svg viewBox="0 0 4 4" aria-hidden="true" className="mr-4 size-1 flex-none">
                    <circle r={2} cx={2} cy={2} fill="currentColor" />
                  </svg>
                  {item.date}
                </time>
                <p className="mt-6 text-lg font-semibold tracking-tight text-gray-900">
                  {item.name}
                </p>
                <p className="mt-1 text-base text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Approche section */}
        <div className="mx-auto my-16 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Mon Approche Thérapeutique
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Mon approche repose sur l&apos;alliance thérapeutique et le respect du rythme de
              chacun. Je propose des séances en présentiel ou en visio, adaptées à vos besoins et
              disponibilités. Membre de l&apos;Association professionnelle d&apos;Hypnose
              Francophone clinique thérapeutique, je m&apos;engage à respecter une éthique
              professionnelle stricte et une déontologie rigoureuse.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
