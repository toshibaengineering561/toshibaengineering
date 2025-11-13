import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from './SupabaseClient.jsx'

const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({
    products: [],
    categories: [],
    partners: [],
    services: [],
    team: [],
    testimonials: []
  })

  // Fetch all data on app start
  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true)

      const tables = ['products', 'categories', 'partners', 'services', 'team', 'testimonials']

      const results = await Promise.all(
        tables.map(async (table) => {
          const { data, error } = await supabase.from(table).select('*')
          if (error) {
            console.error(`Error fetching ${table}:`, error.message)
            return { [table]: [] }
          }
          return { [table]: data }
        })
      )

      // Merge all results into one object
      const mergedData = results.reduce((acc, obj) => ({ ...acc, ...obj }), {})

      setData(mergedData)
      setLoading(false)
    }

    fetchAllData()
  }, [])

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => useContext(DataContext)
