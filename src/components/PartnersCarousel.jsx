import { useEffect, useRef } from 'react'

export default function PartnersCarousel({ partners = [] }) {
  const scrollerRef = useRef(null)

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    let raf
    let offset = 0
    let paused = false
    const speed = 0.5
    const loop = () => {
      if (!paused) {
        offset -= speed
        if (Math.abs(offset) >= el.scrollWidth / 2) offset = 0
        el.style.transform = `translateX(${offset}px)`
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    el.addEventListener('mouseenter', () => (paused = true))
    el.addEventListener('mouseleave', () => (paused = false))
    return () => cancelAnimationFrame(raf)
  }, [])

  const items = [...partners, ...partners]

  return (
    <section className="section">
      <div className="container">
        <h2 className="text-lg font-semibold mb-4">Trusted by leading manufacturers</h2>
        <div className="relative overflow-hidden border border-neutral-200 dark:border-neutral-800 rounded">
          <div className="flex whitespace-nowrap will-change-transform" ref={scrollerRef}>
            {items.map((p, idx) => (
              <div key={idx} className="shrink-0 w-40 h-20 grid place-items-center border-r border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-950">
                <img src={p.logo} alt={p.name} className="max-h-10 object-contain opacity-80" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


