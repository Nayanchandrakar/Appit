import { Container } from "@/components/global/container"
import { Earth, Smile, Sparkles, Star, Users } from "lucide-react"
import Image from "next/image"

export const AppBenefits = () => {
  return (
    <Container className="mt-32 md:mt-56 flex items-center justify-center flex-col gap-8 mx-auto max-w-6xl">
      <div className="p-2 rounded-full bg-slate-900 flex items-center gap-2 font-medium">
        <Star className="size-5" />
        Our Benefits
      </div>
      <h3 className="text-3xl sm:text-4xl md:text-5xl text-center font-bold ">
        Discover Appit’s Benefits
      </h3>
      <p className="text-muted-foreground text-lg text-center">
        Unlock a world of meaningful connections, tailored experiences, <br />
        and seamless social interaction.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <div className="flex items-start flex-col gap-7 bg-zinc-950 p-6 rounded-xl border">
          <span className="flex border items-center bg-zinc-900 justify-center size-16 rounded-xl">
            <Users className="size-8" />
          </span>
          <div className="flex items-start flex-col gap-3">
            <span className="font-semibold text-xl">Authentic Connections</span>
            <p className="text-muted-foreground font-semibold text-lg">
              Build genuine relationships with like-minded individuals.
            </p>
          </div>
        </div>

        {/* Add here span element */}

        <div className="rounded-xl order-first md:order-none h-fit min-h-[30rem] row-span-2 relative overflow-hidden flex items-center justify-center bg-gradient-to-b from-transparent to-zinc-900">
          <Image
            src="/hero/banner2.png"
            alt="banner-image"
            width={1000}
            height={1000}
            sizes="100vw"
            className="absolute top-[25%] w-[80%]"
          />
        </div>

        <div className="flex items-start flex-col gap-7 bg-zinc-950 p-6 rounded-xl border">
          <span className="flex border items-center bg-zinc-900 justify-center size-16 rounded-xl">
            <Sparkles className="size-8" />
          </span>
          <div className="flex items-start flex-col gap-3">
            <span className="font-semibold text-xl">
              Personalized Experience
            </span>
            <p className="text-muted-foreground font-semibold text-lg">
              Tailored content and recommendations just for you.
            </p>
          </div>
        </div>

        <div className="flex items-start flex-col gap-7 bg-zinc-950 p-6 rounded-xl border">
          <span className="flex border items-center bg-zinc-900 justify-center size-16 rounded-xl">
            <Earth className="size-8" />
          </span>
          <div className="flex items-start flex-col gap-3">
            <span className="font-semibold text-xl">Global Reach</span>
            <p className="text-muted-foreground font-semibold text-lg">
              Connect with people across 50+ countries effortlessly.
            </p>
          </div>
        </div>

        <div className="flex items-start flex-col gap-7 bg-zinc-950 p-6 rounded-xl border">
          <span className="flex border items-center bg-zinc-900 justify-center size-16 rounded-xl">
            <Smile className="size-8" />
          </span>
          <div className="flex items-start flex-col gap-3">
            <span className="font-semibold text-xl">Community Support</span>
            <p className="text-muted-foreground font-semibold text-lg">
              Join thriving communities aroundyour interests.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
