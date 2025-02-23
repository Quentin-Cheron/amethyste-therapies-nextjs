import InitFilter from '@/components/init-filter'

export default async function BlogsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-8">
      <h1 className="text-center text-4xl font-bold mb-12 text-gray-800">Explorez nos Articles</h1>
      <InitFilter />
    </div>
  )
}
