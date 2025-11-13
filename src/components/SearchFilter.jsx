import { useEffect, useMemo, useState } from 'react'

export default function SearchFilter({ categories = [], onChange }) {
  const [query, setQuery] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const filters = useMemo(() => ({ query, categoryId, minPrice, maxPrice }), [query, categoryId, minPrice, maxPrice])

  useEffect(() => {
    onChange?.(filters)
  }, [filters, onChange])

  return (
    <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-950 p-4 grid gap-3 md:grid-cols-4">
      <input
        type="text"
        placeholder="Search machines..."
        className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300 dark:bg-neutral-900 dark:border-neutral-700"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select
        className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300 dark:bg-neutral-900 dark:border-neutral-700"
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
      >
        <option value="">All categories</option>
        {categories.map((c) => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>
      <div className="flex items-center gap-2">
        <input
          type="number"
          min="0"
          placeholder="Min price"
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300 dark:bg-neutral-900 dark:border-neutral-700"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          min="0"
          placeholder="Max price"
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300 dark:bg-neutral-900 dark:border-neutral-700"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <button
        type="button"
        onClick={() => { setQuery(''); setCategoryId(''); setMinPrice(''); setMaxPrice('') }}
        className="btn btn-outline"
      >
        Reset
      </button>
    </div>
  )
}


