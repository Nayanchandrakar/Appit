import { Container } from "@/components/global/container"
import { Sparkles } from "lucide-react"

export const AppitFeatures = () => {
  return (
    <Container className="mt-32 md:mt-48">
      <div className="flex items-center justify-center flex-col gap-8 mx-auto max-w-xl">
        <div className="p-2 rounded-full bg-slate-900 flex items-center gap-2 font-medium">
          <Sparkles className="size-5" />
          Features
        </div>
        <h3 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold ">
          Discover Appit Features
        </h3>
        <p className="text-muted-foreground text-lg text-center">
          Explore Appit's powerful features designed to help you connect, share,
          and engage with your community effortlessly.
        </p>
      </div>
    </Container>
  )
}
