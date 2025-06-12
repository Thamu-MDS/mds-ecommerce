import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { FeaturedCategories } from "@/components/featured-categories"
import { Newsletter } from "@/components/newsletter"
import { PromoBanner } from "@/components/promo-banner"
import { Testimonials } from "@/components/testimonials"
import { LifestyleGallery } from "@/components/lifestyle-gallery"
import { BrandShowcase } from "@/components/brand-showcase"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedCategories />
        <PromoBanner />
        <FeaturedProducts />
        <LifestyleGallery />
        <BrandShowcase />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
