import { getTarifsByCategoryTarif } from '@/actions/tarifs'
import CardTarif from '@/components/card-tarif'

type CardProps = {
  id: number
  slug?: string
  name?: string
  price: string
  time: string
  media: { filename: string }
  consultationType: string
  consultationService: { id: string; name: string }[]
  category: { id: string; name: string }[]
}

export default async function TarifsPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const slugParam = params.slug

  const tarifs = await getTarifsByCategoryTarif(slugParam)

  const data: CardProps[] =
    Array.isArray(tarifs.data) && tarifs.data.every((tarif) => isCardProps(tarif))
      ? tarifs.data
      : []

  return (
    <div className="max-w-6xl mx-auto px-4 pb-8">
      <h1 className="text-center text-4xl font-bold mb-12 text-gray-800">
        {slugParam.charAt(0).toUpperCase() + slugParam.slice(1)}
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((tarif) => (
          <CardTarif key={tarif.id} item={tarif} />
        ))}
      </div>
    </div>
  )
}

// Helper function to check if the tarif object matches CardProps type
function isCardProps(tarif: any): tarif is CardProps {
  return (
    tarif &&
    typeof tarif.id === 'number' &&
    typeof tarif.price === 'string' &&
    tarif.media?.filename
  )
}
