import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { supabase } from '../lib/supabaseClient.js'

const DataContext = createContext({
  data: {
    company: null,
    categories: [],
    products: [],
    services: [],
    team: [],
    testimonials: [],
    partners: [],
  },
  loading: true,
  error: null,
  refresh: async () => {},
})

async function fetchTable(table) {
  const { data, error, count } = await supabase.from(table).select('*', { count: 'exact' })
  if (error) {
    console.error(`Error fetching ${table}:`, error)
    console.error(`Error details:`, {
      message: error.message,
      details: error.details,
      hint: error.hint,
      code: error.code,
    })
    throw error
  }
  console.log(`Successfully fetched ${table}:`, data?.length || 0, 'items', `(Total in DB: ${count || 'unknown'})`)
  
  // If we got 0 items but there might be data, warn about RLS
  if ((data?.length || 0) === 0 && count && count > 0) {
    console.warn(`⚠️ ${table} table has ${count} rows but query returned 0. This likely means RLS policies are blocking access.`)
  }
  
  return data || []
}

export function DataProvider({ children }) {
  const [state, setState] = useState({
    data: {
      company: null,
      categories: [],
      products: [],
      services: [],
      team: [],
      testimonials: [],
      partners: [],
    },
    loading: true,
    error: null,
  })

  const load = async () => {
    try {
      setState((prev) => ({ ...prev, loading: true, error: null }))
      
      // Test query to verify table exists and structure
      console.log('Testing categories table connection...')
      const testQuery = await supabase.from('categories').select('*').limit(1)
      console.log('Test query result:', testQuery)
      
      const [categories, products, services, team, testimonials, partners, company] =
        await Promise.all([
          fetchTable('categories'),
          fetchTable('products'),
          fetchTable('services'),
          fetchTable('team'),
          fetchTable('testimonials'),
          fetchTable('partners'),
          import('../data/company.json').then((m) => m.default),
        ])

      console.log('Fetched categories:', categories)
      console.log('Fetched products:', products)

      const categoriesById = new Map(categories.map((c) => [String(c.id), c.name]))

      const enrichedProducts = products.map((product) => ({
        ...product,
        categoryId: product.category_id ? String(product.category_id) : null,
        categoryName: product.category_id
          ? categoriesById.get(String(product.category_id)) || ''
          : '',
        images: Array.isArray(product.images) && product.images.length > 0 ? product.images : [product.image],
        specs:
          product.specs && typeof product.specs === 'object'
            ? product.specs
            : {},
      }))

      const normalizedCategories = categories.map((c) => ({ ...c, id: String(c.id) }))
      
      console.log('Normalized categories:', normalizedCategories)
      console.log('Enriched products:', enrichedProducts)

      setState({
        data: {
          company,
          categories: normalizedCategories,
          products: enrichedProducts,
          services,
          team,
          testimonials,
          partners,
        },
        loading: false,
        error: null,
      })
    } catch (error) {
      console.error('Failed to load data', error)
      setState((prev) => ({ ...prev, loading: false, error }))
    }
  }

  useEffect(() => {
    load()
  }, [])

  const value = useMemo(
    () => ({
      ...state,
      refresh: load,
    }),
    [state],
  )

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export function useData() {
  return useContext(DataContext)
}



