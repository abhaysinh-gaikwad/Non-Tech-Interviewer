import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { FeaturesSection } from "@/components/features-section"
import { CompaniesSection } from "@/components/companies-section"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { FloatingChatButton } from "@/components/floating-chat-button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CompaniesSection />
        <HowItWorks />
        <FeaturesSection />
        <Testimonials />
      </main>
      <Footer />
      <FloatingChatButton />
    </div>
  )
}
