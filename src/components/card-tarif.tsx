type CardProps = {
  item: {
    id: number
    media: { filename: string }
    consultationType: string
    consultationService: { id: string; name: string }[]
    category: { id: string; name: string }[]
    price: string
    time: string
  }
}

export default function CardTarif({ item }: CardProps) {
  return (
    <article
      key={item.id}
      className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-48 group h-full bg-center bg-cover bg-no-repeat aos-init aos-animate"
      style={{ backgroundImage: `url(/uploads/${item.media.filename})` }}
      data-aos="fade-up"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
      <p className="text-sm text-gray-400 mb-2">{item.consultationType}</p>
      <ul className="mb-4 flex gap-1 max-w-[300px] flex-wrap">
        {item.consultationService.map((service, index, array) => (
          <li key={service.id} className="text-sm text-gray-400">
            {service.name}
            {index < array.length - 1 && ', '}
          </li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold leading-6 text-white line-clamp-2">
        {item.time}min - {Number(item.price).toFixed(2)} EUR
      </h3>
    </article>
  )
}
