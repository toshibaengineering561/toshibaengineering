import { useEffect, useMemo, useState } from 'react'
import SearchFilter from '../components/SearchFilter.jsx'
import ProductCard from '../components/ProductCard.jsx'

export default function Products() {
  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState({})

  useEffect(() => {
    Promise.all([
      import('../data/products.json').then((m) => m.default),
      import('../data/categories.json').then((m) => m.default),
    ]).then(([prods, cats]) => {
      const idToName = Object.fromEntries(cats.map((c) => [c.id, c.name]))
      setProducts(prods.map((p) => ({ ...p, categoryName: idToName[p.categoryId] })))
    })
  }, [])

  const filtered = useMemo(() => {
    const q = (filters.query || '').toLowerCase()
    const c = filters.categoryId || ''
    const min = filters.minPrice ? Number(filters.minPrice) : 0
    const max = filters.maxPrice ? Number(filters.maxPrice) : Number.MAX_VALUE
    return products.filter((p) => {
      const nameMatch = p.name.toLowerCase().includes(q)
      const catMatch = c ? p.categoryId === c : true
      const price = p.price || 0
      const priceMatch = price >= min && price <= max
      return nameMatch && catMatch && priceMatch
    })
  }, [products, filters])

  return (
    <div className="container section">
      <h1 className="text-2xl font-bold mb-4">All Machines</h1>
      <SearchFilter onChange={setFilters} />
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}


