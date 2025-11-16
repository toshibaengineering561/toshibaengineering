import { motion } from 'framer-motion'

export default function Services({ services = [] }) {
  const renderLogo = (service) => {
    const value = service.icon || null
    if (!value) return <span className="text-lg">⚙️</span>
    const isUrl = typeof value === 'string' && value.startsWith('http')
    if (isUrl) {
      return (
        <img src={value} alt={service.name} className="h-8 w-8 object-contain" />
      )
    }
    return <span className="text-lg">{value}</span>
  }

  return (
    <section className="section bg-neutral-50/60 dark:bg-neutral-900/30">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">After‑Sales Services</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-950 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 grid place-items-center rounded bg-brand-50 text-brand-700">
                  {renderLogo(s)}
                </div>
                <div>
                  <h3 className="font-semibold">{s.name}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{s.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


