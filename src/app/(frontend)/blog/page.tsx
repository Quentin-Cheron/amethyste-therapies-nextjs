import InitFilter from '@/components/init-filter'
import { Suspense } from 'react'

export default async function BlogsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-8">
      <h1 className="text-center text-4xl font-bold mb-12 text-gray-800">Explorez nos Articles</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <InitFilter />
      </Suspense>
    </div>
  )
}
