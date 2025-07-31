import { Container } from "@/components/global/container"
import { AvatarCircle } from "./avatar-circle"
import { WaitListButton } from "@/components/buttons/wait-list-button"
import { SocialPlatforms } from "@/components/pages/home/sections/hero-section/social-platforms"
import { TextEffect } from "@/components/motion/text-effect"
import { AnimatedGroup } from "@/components/motion/animated-group"
import { transitionVariants } from "@/constants/transition-variants"

export const HeroSection = () => {
  return (
    <Container className="mt-20 flex items-center justify-center flex-col gap-3">
      <AvatarCircle />
      <div className="gap-3 flex items-center flex-col">
        <TextEffect
          as="h1"
          preset="fade-in-blur"
          speedSegment={0.7}
          className="text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mx-auto max-w-[50rem]"
        >
          Connect, Share, and Grow with Appit Social
        </TextEffect>
        <TextEffect
          as="p"
          per="line"
          delay={0.5}
          preset="fade-in-blur"
          speedSegment={0.7}
          className="text-center text-lg sm:text-xl text-muted-foreground mx-auto max-w-lg"
        >
          Join Appit to build authentic connections and share your passions
          effortlessly.
        </TextEffect>

        <AnimatedGroup
          as="div"
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.4,
                },
              },
            },
            ...transitionVariants,
          }}
        >
          <WaitListButton className="mt-5" />
        </AnimatedGroup>
        <AnimatedGroup
          as="div"
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.4,
                },
              },
            },
            ...transitionVariants,
          }}
        >
          <SocialPlatforms />
        </AnimatedGroup>
      </div>
    </Container>
  )
}
