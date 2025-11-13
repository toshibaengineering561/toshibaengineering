import { useData } from '../context/DataProvider.jsx'

export default function About() {
  const { data } = useData()
  const company = data.company
  return (
    <div className="container section">
      <h1 className="text-3xl font-bold">About Toshiba Engineering</h1>
      <p className="mt-3 text-neutral-700 dark:text-neutral-300 max-w-3xl">
        40 years of innovation in packaging automation. We design and manufacture high‑performance packaging machines trusted by major manufacturers such as National Foods, Volka Foods, and Hilton Pharma.
      </p>
      <div className="grid gap-6 md:grid-cols-3 mt-8">
        <Card title="Mission" text="Deliver reliable, efficient, and future‑ready packaging solutions that drive productivity and quality." />
        <Card title="Values" text="Engineering excellence, customer success, and continuous improvement." />
        <Card title="Vision" text="Be the most trusted packaging automation partner in Pakistan and beyond." />
      </div>
      {company?.map?.embed && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Visit our facility</h2>
          <div className="rounded overflow-hidden border border-neutral-200 dark:border-neutral-800">
            <iframe
              title="Google Map"
              src={company.map.embed}
              className="w-full h-72"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      )}
    </div>
  )
}

function Card({ title, text }) {
  return (
    <div className="rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-950 p-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">{text}</p>
    </div>
  )
}


