import { Container } from "@/components/global/container"
import { Star } from "lucide-react"

export const AppBenefits = () => {
  return (
    <Container className="mt-32 md:mt-56 flex items-center justify-center flex-col gap-8 mx-auto max-w-6xl">
      <div className="p-2 rounded-full bg-slate-900 flex items-center gap-2 font-medium">
        <Star className="size-5" />
        Our Benefits
      </div>
      <h3 className="text-2xl sm:text-3xl md:text-5xl text-center font-bold ">
        Discover Appit’s Benefits
      </h3>
      <p className="text-muted-foreground text-lg text-center">
        Unlock a world of meaningful connections, tailored experiences, <br />
        and seamless social interaction.
      </p>
    </Container>
  )
}
