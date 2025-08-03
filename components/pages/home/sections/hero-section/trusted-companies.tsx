"use client"

import { Container } from "@/components/global/container"
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider"
import Image from "next/image"

const companies = [
  "/companies/vortex.svg",
  "/companies/enigma.svg",
  "/companies/lumina.svg",
  "/companies/spectrum.svg",
  "/companies/synergy.svg",
  "/companies/velocity.svg",
]

export const TrustedCompanies = () => {
  return (
    <Container asChild>
      <section className="flex items-center justify-center flex-col gap-9 mt-28 sm:mt-32 overflow-hidden">
        <h3 className="text-lg font-semibold text-center">
          Trusted by 1000+ businesses across the world
        </h3>
        <InfiniteSlider speed={50} className="mx-auto max-w-4xl">
          {[...companies, ...companies].map((company, index) => (
            <Image
              key={`image-${index}-${company}`}
              className="w-fit"
              width={1000}
              height={1000}
              sizes="100vw"
              alt="company"
              src={company}
            />
          ))}
        </InfiniteSlider>
      </section>
    </Container>
  )
}
