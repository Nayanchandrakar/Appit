import { HeroBanner } from "@/components/pages/home/sections/hero-banner"
import { HeroSection } from "@/components/pages/home/sections/hero-section"
import { AppBenefits } from "@/components/pages/home/sections/hero-section/app-benefits"
import { SocialCapabilities } from "@/components/pages/home/sections/hero-section/social-capabilities"
import { SocialExperience } from "@/components/pages/home/sections/hero-section/social-experience"
import { TrustedCompanies } from "@/components/pages/home/sections/hero-section/trusted-companies"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HeroBanner />
      <TrustedCompanies />
      <SocialExperience />
      <AppBenefits />
      <SocialCapabilities />
    </>
  )
}
