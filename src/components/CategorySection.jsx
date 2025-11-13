import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function CategorySection({ categories = [], products = [] }) {
  console.log('CategorySection - categories:', categories, 'count:', categories.length)
  console.log('CategorySection - products:', products.length)

  const getFeatured = (categoryId) =>
    products
      .filter((p) => String(p.categoryId) === String(categoryId))
      .slice(0, 3)

  if (categories.length === 0) {
    return (
      <section className="section bg-neutral-50/60 dark:bg-neutral-900/30">
        <div className="container">
          <p className="text-sm text-neutral-500">No categories available.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="section bg-neutral-50/60 dark:bg-neutral-900/30">
      <div className="container">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold">Machine Categories</h2>
          <Link to="/products" className="text-sm hidden sm:inline text-brand-700 dark:text-brand-400">View all products</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, idx) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-950 p-4"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold">{c.name}</h3>
                <Link to="/products" className="text-sm text-brand-600">See more</Link>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1">{c.description}</p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {getFeatured(c.id).map((p) => (
                  <Link to={`/products/${p.id}`} key={p.id} className="group rounded border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-900">
                    <img src={p.image} alt={p.name} className="h-24 w-full object-cover group-hover:scale-105 transition-transform duration-200" />
                    <div className="p-2">
                      <div className="line-clamp-1 text-xs">{p.name}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


