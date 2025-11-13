import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import About from './pages/About.jsx'

function App() {
  const [company, setCompany] = useState(null)

  useEffect(() => {
    import('./data/company.json').then((m) => setCompany(m.default))
  }, [])

  return (
    <div className="min-h-dvh flex flex-col">
      <Header company={company} />
      <main className="flex-1">
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
