import { HeroBanner } from "@/components/pages/home/sections/hero-banner"
import { HeroSection } from "@/components/pages/home/sections/hero-section"
import { TrustedCompanies } from "@/components/pages/home/sections/hero-section/trusted-companies"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HeroBanner />
      <TrustedCompanies />
    </>
  )
}
