import { Container } from "@/components/global/container"
import Image from "next/image"

const features = [
  "Story Sharing",
  "Custom Profiles",
  "Community Groups",
  "Event Creation",
  "Smart Notifications",
]

export const AdvanceCapabilites = () => {
  return (
    <Container className="mt-32 md:mt-52 grid grid-cols-1 xl:grid-cols-2 gap-12 mx-auto max-w-2xl xl:max-w-6xl">
      <div className="flex flex-col items-start gap-5">
        <h3 className="text-3xl leading-tight sm:text-4xl md:text-5xl text-center xl:text-start font-bold ">
          Appit's Advanced Capabilities
        </h3>
        <p className="text-muted-foreground xl:text-start text-center text-lg font-semibold">
          Explore advanced capabilities designed to elevate your social
          experience and interactions.
        </p>

        <div className="flex gap-5 mt-4 xl:justify-start justify-center flex-wrap">
          {features.map((value) => (
            <span
              key={value}
              className="flex items-center gap-2 text-muted-foreground font-semibold"
            >
              <Image
                className="size-5"
                width={1000}
                height={1000}
                sizes="100vw"
                src="/check.svg"
                alt="check-icon"
              />
              {value}
            </span>
          ))}
        </div>
      </div>
      <div className="relative bg-gradient-to-b from-zinc-900/70 to-transparent rounded-3xl flex justify-center">
        <Image
          src="/hero/banner2.png"
          width={1000}
          height={1000}
          sizes="100vw"
          alt="hero-banner"
          className="w-[17rem] object-contain mt-16"
        />
        <div className="absolute bg-gradient-to-b from-transparent to-black w-full h-80 bottom-0" />
      </div>
    </Container>
  )
}
