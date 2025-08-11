// app/page.js
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ProductsSection from '@/components/ProductsSection'
import ActivitiesSection from '@/components/ActivitiesSection'
import PartnersSection from '@/components/PartnersSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-6 md:px-16 xl:px-40">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ActivitiesSection />
        <PartnersSection />
      </main>
      <Footer />
    </>
  )
}