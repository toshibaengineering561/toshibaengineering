import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Testimonials({ testimonials = [] }) {
  const idxRef = useRef(0)
  const [active, setActive] = useState(0)

  useEffect(() => {
    idxRef.current = 0
    setActive(0)
  }, [testimonials])

  useEffect(() => {
    const id = setInterval(() => {
      if (testimonials.length === 0) return
      idxRef.current = (idxRef.current + 1) % testimonials.length
      setActive(idxRef.current)
    }, 3500)
    return () => clearInterval(id)
  }, [testimonials])

  if (testimonials.length === 0) return null

  return (
    <section className="section bg-neutral-50/60 dark:bg-neutral-900/30">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">What clients say</h2>
        <div className="relative">
          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.client}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: i === active ? 1 : 0.4, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-950 p-4 ${i === active ? 'ring-1 ring-brand-200 dark:ring-brand-800' : ''}`}
              >
                <div className="flex gap-3 items-center">
                  <img src={t.image} alt={t.client} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold">{t.client}</div>
                    <div className="text-xs text-neutral-500">
                      {t.position}
                      {t.company ? `, ${t.company}` : ''}
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">{t.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


