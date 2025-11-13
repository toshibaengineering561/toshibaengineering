import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function FeaturedMachines({ products = [] }) {
  const visible = products.slice(0, 6)
  return (
    <section className="section">
      <div className="container">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Machines</h2>
          <Link to="/products" className="text-sm text-brand-700 dark:text-brand-400">Browse all</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-950"
            >
              <Link to={`/products/${p.id}`} className="block">
                <img src={p.image} alt={p.name} className="h-44 w-full object-cover" />
              </Link>
              <div className="p-4">
                <div className="text-sm text-neutral-500 mb-1">{p.categoryName}</div>
                <h3 className="font-semibold line-clamp-1">{p.name}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-brand-700 font-medium">
                    {p.price != null ? `PKR ${Number(p.price).toLocaleString()}` : 'Contact for price'}
                  </div>
                  <Link to={`/products/${p.id}`} className="text-sm text-brand-600 hover:text-brand-700">View Details</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


