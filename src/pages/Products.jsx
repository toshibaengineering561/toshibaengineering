import { useMemo, useState } from 'react'
import SearchFilter from '../components/SearchFilter.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { useData } from '../context/DataProvider.jsx'

export default function Products() {
  const { data } = useData()
  const products = data.products
  const categories = data.categories
  const [filters, setFilters] = useState({})

  const filtered = useMemo(() => {
    const q = (filters.query || '').toLowerCase()
    const c = filters.categoryId || ''
    const min = filters.minPrice ? Number(filters.minPrice) : 0
    const max = filters.maxPrice ? Number(filters.maxPrice) : Number.MAX_VALUE
    return products.filter((p) => {
      const nameMatch = p.name.toLowerCase().includes(q)
      const catMatch = c ? p.categoryId === c : true
      const price =
        p.price !== null && p.price !== undefined ? Number(p.price) : null
      const priceMatch =
        price === null ? true : price >= min && price <= max
      return nameMatch && catMatch && priceMatch
    })
  }, [products, filters])

  return (
    <div className="container section">
      <h1 className="text-2xl font-bold mb-4">All Machines</h1>
      <SearchFilter categories={categories} onChange={setFilters} />
      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      ) : (
        <div className="mt-6 text-sm text-neutral-500">
          No machines match your filters. Try adjusting search criteria.
        </div>
      )}
    </div>
  )
}


