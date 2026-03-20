import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import HeroSection from '@/sections/HeroSection'
import ServicesSection from '@/sections/ServicesSection'
import ResultsSection from '@/sections/ResultsSection'
import ProcessSection from '@/sections/ProcessSection'
import TestimonialsSection from '@/sections/TestimonialsSection'
import FaqSection from '@/sections/FaqSection'
import ContactSection from '@/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ResultsSection />
        <ProcessSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
