import { Container } from "@/components/global/container"
import { AvatarCircle } from "./avatar-circle"
import { WaitListButton } from "@/components/buttons/wait-list-button"

export const HeroSection = () => {
  return (
    <Container className="my-20 flex items-center justify-center flex-col gap-3">
      <AvatarCircle />
      <div className="gap-3 flex items-center flex-col">
        <h1 className="text-center text-6xl font-extrabold leading-tight">
          Connect, Share, and Grow <br /> with Appit Social
        </h1>
        <p className="text-center text-xl text-muted-foreground">
          Join Appit to build authentic connections and share
          <br /> your passions effortlessly.
        </p>
        <WaitListButton className="mt-5" />
      </div>
    </Container>
  )
}
