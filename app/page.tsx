import HeroSection from "@/components/hero-section"
import GuaranteeSection from "@/components/guarantee-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import GallerySection from "@/components/gallery-section"
import TestimonialsSection from "@/components/testimonials-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"
import WhatsAppButton from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <GuaranteeSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <WhatsAppButton />
    </main>
  )
}
