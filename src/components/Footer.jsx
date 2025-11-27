import img from "../assets/icon.png"

export default function Footer({ company }) {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="container section grid gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img className="h-10 w-10" src={img}/>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold">{company?.name}</span>
              <span className="text-xs text-neutral-500">{company?.tagline}</span>
            </div>
          </div>
          <div className="text-sm text-neutral-600 dark:text-neutral-300 space-y-1">
            <p>{company?.address}</p>
            <p>Phone: <a className="hover:underline" href={company?.phone ? `tel:${company.phone}` : '#'}>{company?.phone || '—'}</a></p>
            <p>Email: <a className="hover:underline" href={company?.email ? `mailto:${company.email}` : '#'}>{company?.email || '—'}</a></p>
          </div>
          <div className="flex items-center gap-3">
            <Social href={company?.social?.facebook} label="Facebook" icon="M18 8a6 6 0 11-12 0 6 6 0 0112 0z" />
            <Social href={company?.social?.linkedin} label="LinkedIn" icon="M4 4h16v16H4z" />
            <Social href={company?.social?.instagram} label="Instagram" icon="M7 4h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3z" />
            <Social href={company?.social?.youtube} label="YouTube" icon="M4 6h16v12H4z" />
          </div>
          <a className="btn btn-outline w-fit" href={company?.map?.link || '#'} target="_blank" rel="noreferrer">View on Google Maps</a>
        </div>
        <div className="rounded overflow-hidden border border-neutral-200 dark:border-neutral-800">
          <iframe
            title="Google Map"
            src={company?.map?.embed || ''}
            className="w-full h-64 md:h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div className="py-4 text-center text-xs text-neutral-500">
        © {year} Toshiba Engineering Works. All rights reserved.
      </div>
    </footer>
  )
}

function Social({ href, label, icon }) {
  if (!href) return null
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="inline-flex h-9 w-9 items-center justify-center rounded border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d={icon} />
      </svg>
    </a>
  )
}


