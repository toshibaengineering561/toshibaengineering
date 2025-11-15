import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import ImageGallery from '../components/ImageGallery.jsx'
import { useData } from '../context/DataProvider.jsx'

export default function ProductDetails() {
  const { id } = useParams()
  const { data } = useData()
  const product = useMemo(
    () => data.products.find((x) => String(x.id) === String(id)),
    [data.products, id],
  )
  const categoryName = useMemo(() => {
    if (!product) return ''
    const category = data.categories.find(
      (c) => String(c.id) === String(product.categoryId),
    )
    return category?.name || ''
  }, [data.categories, product])

  const images = useMemo(() => product?.images || [], [product])

  if (!product) {
    return (
      <div className="container section">
        <p className="text-neutral-500">Product not found.</p>
      </div>
    )
  }

  const envPhone = import.meta.env.VITE_WHATSAPP_PHONE || ''
  const companyPhone = data.company?.whatsapp || ''
  const phoneRaw = envPhone || companyPhone
  const whatsapp = phoneRaw
    ? `https://wa.me/${phoneRaw.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
        `Hi, I would like to get a quote for ${product.name}`,
      )}`
    : null

  return (
    <div className="container section">
      <div className="text-sm text-neutral-500 mb-2">
        <Link to="/products" className="hover:underline">Products</Link> / {categoryName || 'Category'} / <span className="text-neutral-800 dark:text-neutral-200">{product.name}</span>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <ImageGallery images={images} />
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="mt-2 text-neutral-600 dark:text-neutral-300">{categoryName}</div>
          <div className="mt-4 text-xl font-semibold text-brand-700">
            {product.price != null ? `PKR ${Number(product.price).toLocaleString()}` : 'Contact for price'}
          </div>
          <p className="mt-4 text-sm text-neutral-700 dark:text-neutral-300">{product.description}</p>
          {product.specs && Object.keys(product.specs).length > 0 && (
            <div className="mt-6">
              <h2 className="font-semibold mb-2">Specifications</h2>
              <ul className="list-disc pl-5 text-sm space-y-1">
                {Object.entries(product.specs).map(([k, v]) => (
                  <li key={k}><span className="text-neutral-500">{k}:</span> {String(v)}</li>
                ))}
              </ul>
            </div>
          )}
          {whatsapp && (
            <a href={whatsapp} target="_blank" rel="noreferrer" className="btn btn-primary mt-6">
              Contact for Quote
            </a>
          )}
        </div>
      </div>
    </div>
  )
}


