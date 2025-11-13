import { useEffect, useState } from 'react'
import Hero from '../components/Hero.jsx'
import PartnersCarousel from '../components/PartnersCarousel.jsx'
import CategorySection from '../components/CategorySection.jsx'
import FeaturedMachines from '../components/FeaturedMachines.jsx'
import Services from '../components/Services.jsx'
import Team from '../components/Team.jsx'
import Testimonials from '../components/Testimonials.jsx'

export default function Home() {
  const [partners, setPartners] = useState([])
  useEffect(() => {
    import('../data/partners.json').then((m) => setPartners(m.default))
  }, [])
  return (
    <>
      <Hero />
      <PartnersCarousel partners={partners} />
      <CategorySection />
      <FeaturedMachines />
      <Services />
      <Team />
      <Testimonials />
    </>
  )
}


