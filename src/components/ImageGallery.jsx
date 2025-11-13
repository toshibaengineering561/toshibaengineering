import { useState } from 'react'

export default function ImageGallery({ images = [] }) {
  const [active, setActive] = useState(0)
  const list = images.length ? images : ['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop']
  return (
    <div>
      <div className="aspect-video w-full overflow-hidden rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
        <img src={list[active]} alt="" className="h-full w-full object-cover" />
      </div>
      {list.length > 1 && (
        <div className="mt-2 grid grid-cols-5 gap-2">
          {list.map((src, i) => (
            <button key={i} onClick={() => setActive(i)} className={`aspect-video overflow-hidden rounded border ${i === active ? 'border-brand-500' : 'border-neutral-200 dark:border-neutral-800'}`}>
              <img src={src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}


