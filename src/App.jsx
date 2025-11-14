import Loader from "./components/Loader.jsx"
import ErrorScreen from "./components/ErrorScreen.jsx"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Products from "./pages/Products.jsx"
import ProductDetails from "./pages/ProductDetails.jsx"
import About from "./pages/About.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import WhatsAppFloat from "./components/WhatsAppFloat.jsx"
import ScrollToTop from "./helpers/ScrollToTop.jsx"
import { useData } from "./context/DataProvider.jsx"

function App() {
  const { data, loading, error } = useData()
  const company = data?.company   // SAFE

  // Still loading?
  if (loading || !company) {
    return <Loader />
  }

  // Error?
  if (error) {
    return <ErrorScreen />
  }

  return (
    <div className="min-h-dvh flex flex-col">
      <Header company={company} />
      <main className="flex-1">
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer company={company} />
      <WhatsAppFloat whatsapp={company.whatsapp} />
    </div>
  )
}

export default App
