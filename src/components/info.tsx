import Link from 'next/link'

export default function Info() {
  return (
    <div className="border-y bg-white mx-auto max-w-7xl px-6 py-12 lg:px-8 md:flex md:items-center md:justify-between">
      <div data-aos="fade-right" className="aos-init aos-animate md:order-1 md:mt-0">
        <p className="text-center text-sm leading-5 text-gray-500 mb-3 sm:mb-0">
          Prenez rendez-vous sur
        </p>
      </div>
      <div
        data-aos="fade-left"
        className="aos-init aos-animate flex justify-center space-x-6 md:order-2"
      >
        <div className="flex flex-col justify-between gap-5 lg:flex-row">
          <Link
            href="https://www.resalib.fr/praticien/43834-stephanie-morier-praticien-emdr-salon-de-provence"
            target="_blank"
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8"
          >
            Resalib
          </Link>
        </div>
      </div>
    </div>
  )
}
