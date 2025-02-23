'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Tarifs', href: '/tarifs' },
  { name: 'Qui suis-je ?', href: '/qui-suis-je' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  return (
    <header className="px-4 py-2 shadow-sm h-20 flex items-center fixed w-full z-50 top-0 bg-white">
      <nav className="flex justify-between items-center w-full">
        <Link href="/">
          <Image src="/uploads/global/logo.webp" alt="Logo" width={125} height={300} />
        </Link>
        <ul className="hidden md:flex items-center gap-x-5">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'text-sm font-semibold leading-6 text-gray-900 transition-colors duration-200 hover:text-primary',
                isActive(item.href) && 'text-primary',
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="https://www.resalib.fr/praticien/43834-stephanie-morier-praticien-emdr-salon-de-provence"
            target="_blank"
            className="text-sm font-semibold leading-6 transition-colors duration-200 bg-primary text-white rounded-md px-3 py-2 hover:bg-primary/80"
          >
            Rendez-vous
          </Link>
        </ul>
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Menu size={24} className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader className="mb-7 text-left">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col gap-y-4">
                {navigation
                  .concat({
                    name: 'Rendez-vous',
                    href: 'https://www.resalib.fr/praticien/43834-stephanie-morier-praticien-emdr-salon-de-provence',
                  })
                  .map((item) => (
                    <li key={item.name}>
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            'pb-3 block text-sm font-semibold leading-6 text-gray-900 transition-colors duration-200 hover:text-primary border-b border-gray-200',
                            isActive(item.href) && 'text-primary',
                          )}
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
