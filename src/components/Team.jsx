import { motion } from 'framer-motion'

export default function Team({ members = [] }) {
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">Our Team</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-950"
            >
              <img src={t.photo} alt={t.name} className="h-52 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{t.name}</h3>
                <div className="text-sm text-brand-700 dark:text-brand-400">{t.position}</div>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{t.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


