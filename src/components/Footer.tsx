import Image from 'next/image'
import Link from 'next/link'

const navigation = {
  services: [
    { name: 'Services', href: '/services' },
    { name: 'Tarifs', href: '/tarifs' },
    {
      name: 'Rendez-vous',
      href: 'https://www.resalib.fr/praticien/43834-stephanie-morier-praticien-emdr-salon-de-provence',
    },
  ],
  about: [
    { name: 'Qui suis-je ?', href: '/qui-suis-je' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/amethyste.therapies',
      icon: (props = {}) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            color="#0765FF"
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
  contact: [
    {
      name: 'contact@amethyste-therapies.fr',
      href: 'mailto:contact@amethyste-therapies.fr',
      type: 'email',
    },
    { name: '06 XX XX XX XX', href: 'tel:+336XXXXXXXX', type: 'phone' },
    {
      name: '123 Avenue Example, 13300 Salon-de-Provence',
      href: 'https://goo.gl/maps/XXXXX',
      type: 'address',
    },
  ],
}

export default function Example() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <Image
            alt="Amethyste therapies"
            src="/uploads/global/logo.webp"
            className="h-9"
            width={150}
            height={150}
          />
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-gray-900">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm/6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-gray-900">À propos</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.about.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm/6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm/6 font-semibold text-gray-900">Contact</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.contact.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm/6 text-gray-600 hover:text-gray-900">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex gap-x-6 md:order-2">
            {navigation.social.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-600 hover:text-gray-800">
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="size-6" />
              </Link>
            ))}
          </div>
          <p className="mt-8 text-sm/6 text-gray-600 md:order-1 md:mt-0">
            &copy; 2025 Amethyste therapies, Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
