"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Container } from "@/components/global/container"
import { AnimatedNumber } from "@/components/motion-primitives/animated-number"

export const SocialExperience = () => {
  const [value, setValue] = useState({
    firstValue: 450,
    secondValue: 150,
    thirdValue: 0,
  })

  useEffect(() => {
    setValue({
      firstValue: 500,
      secondValue: 200,
      thirdValue: 50,
    })
  }, [])

  return (
    <Container className="mt-56 flex items-center justify-center flex-col gap-8 mx-auto max-w-6xl">
      <div className="flex items-center justify-center size-16 md:size-24 rounded-full bg-gradient-to-b from-zinc-800 to-black">
        <Image
          src="/app-logo.svg"
          alt="app-logo"
          className="size-10 md:size-14"
          width={1000}
          height={1000}
          sizes="100vw"
        />
      </div>

      <p className="text-2xl sm:text-3xl md:text-5xl text-center font-bold ">
        Empowering authentic connections for a vibrant social experience.
      </p>

      <div className="grid grid-cols-1 min-[818px]:grid-cols-3 gap-3 mt-4 md:mt-6 min-[818px]:mt-20">
        <div className="flex items-center justify-center flex-col gap-4 border-b min-[818px]:border-r p-4">
          <span className="text-4xl md:text-5xl font-bold">
            <AnimatedNumber
              springOptions={{
                bounce: 0,
                duration: 2000,
              }}
              value={value.firstValue}
            />
            k
          </span>
          <p className="text-muted-foreground text-lg text-center">
            Shared moments and stories{" "}
            <br className="min-[818px]:hidden inline-block" /> every month
          </p>
        </div>

        <div className="flex items-center justify-center flex-col gap-4 border-b min-[818px]:border-r p-4">
          <span className="text-4xl md:text-5xl font-bold">
            <AnimatedNumber
              springOptions={{
                bounce: 0,
                duration: 2000,
              }}
              value={value.secondValue}
            />
            k
          </span>
          <p className="text-muted-foreground text-lg text-center">
            Communities thriving across
            <br className="min-[818px]:hidden inline-block" /> diverse interests
          </p>
        </div>

        <div className="flex items-center justify-center flex-col gap-4 p-4">
          <span className="text-4xl md:text-5xl font-bold">
            <AnimatedNumber
              springOptions={{
                bounce: 0,
                duration: 2000,
              }}
              value={value.thirdValue}
            />
            k
          </span>
          <p className="text-muted-foreground text-lg text-center">
            Countries where Appit is{" "}
            <br className="min-[818px]:hidden inline-block" />
            growing strong
          </p>
        </div>
      </div>
    </Container>
  )
}
