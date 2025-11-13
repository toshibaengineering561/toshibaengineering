import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import About from './pages/About.jsx'
import { useData } from './context/DataProvider.jsx'
import ScrollToTop from './helpers/ScrollToTop.jsx'

function App() {
  const { data, loading, error } = useData()
  const { company } = data

  return (
    <div className="min-h-dvh flex flex-col">
      <Header company={company} />
      <main className="flex-1">
        <ScrollToTop />
        {loading && (
          <div className="container py-10 text-sm text-neutral-500">
            Loading Toshiba Engineering data...
          </div>
        )}
        {error && (
          <div className="container py-4 text-sm text-red-500">
            Failed to load data. Please try again later.
          </div>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer company={company} />
      <WhatsAppFloat phone={company?.phone} />
    </div>
  )
}

export default App
