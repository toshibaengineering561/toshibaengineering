import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50 to-white dark:from-neutral-900 dark:to-neutral-950" />
        <img
          alt=""
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1920&auto=format&fit=crop"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
      </div>
      <div className="container section flex flex-col items-start gap-6 md:gap-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
        >
          Toshiba Engineering Works
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-neutral-600 dark:text-neutral-300 max-w-2xl"
        >
          Innovating Packaging Automation Since 1985. Designing and manufacturing packaging machines trusted by leading companies across Pakistan.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <Link to="/products" className="btn btn-primary">Explore Machines</Link>
          <Link to="/about" className="btn btn-outline">Learn More</Link>
        </motion.div>
      </div>
    </section>
  )
}


