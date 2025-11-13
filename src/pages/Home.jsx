import Hero from '../components/Hero.jsx'
import PartnersCarousel from '../components/PartnersCarousel.jsx'
import CategorySection from '../components/CategorySection.jsx'
import FeaturedMachines from '../components/FeaturedMachines.jsx'
import Services from '../components/Services.jsx'
import Team from '../components/Team.jsx'
import Testimonials from '../components/Testimonials.jsx'
import { useData } from '../context/DataProvider.jsx'

export default function Home() {
  const { data } = useData()
  return (
    <>
      <Hero />
      <PartnersCarousel partners={data.partners} />
      <CategorySection categories={data.categories} products={data.products} />
      <FeaturedMachines products={data.products} />
      <Services services={data.services} />
      <Team members={data.team} />
      <Testimonials testimonials={data.testimonials} />
    </>
  )
}


