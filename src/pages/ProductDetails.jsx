import { useEffect, useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ImageGallery from '../components/ImageGallery.jsx'

export default function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [categoryName, setCategoryName] = useState('')

  useEffect(() => {
    Promise.all([
      import('../data/products.json').then((m) => m.default),
      import('../data/categories.json').then((m) => m.default),
    ]).then(([prods, cats]) => {
      const p = prods.find((x) => String(x.id) === String(id))
      setProduct(p || null)
      const name = cats.find((c) => c.id === p?.categoryId)?.name || ''
      setCategoryName(name)
    })
  }, [id])

  const images = useMemo(() => {
    if (!product) return []
    if (product.images?.length) return product.images
    return [product.image]
  }, [product])

  if (!product) {
    return (
      <div className="container section">
        <p>Loading...</p>
      </div>
    )
  }

  const phone = import.meta.env.VITE_WHATSAPP_PHONE || ''
  const whatsapp = phone ? `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi, I would like to get a quote for ' + product.name)}` : null

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
          <div className="mt-4 text-xl font-semibold text-brand-700">{product.price ? `PKR ${product.price.toLocaleString()}` : 'Contact for price'}</div>
          <p className="mt-4 text-sm text-neutral-700 dark:text-neutral-300">{product.description}</p>
          {product.specs && (
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


