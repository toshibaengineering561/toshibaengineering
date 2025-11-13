import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <div className="rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-950">
      <Link to={`/products/${product.id}`} className="block">
        <img src={product.image} alt={product.name} className="h-44 w-full object-cover" />
      </Link>
      <div className="p-4">
        <div className="text-xs text-neutral-500 mb-1">{product.categoryName}</div>
        <h3 className="font-semibold line-clamp-1">{product.name}</h3>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-brand-700 font-medium">{product.price ? `PKR ${product.price.toLocaleString()}` : 'Contact for price'}</div>
          <Link to={`/products/${product.id}`} className="text-sm text-brand-600 hover:text-brand-700">View</Link>
        </div>
      </div>
    </div>
  )
}


