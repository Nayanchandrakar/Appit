import { Container } from "@/components/global/container"
import { MessageCircleMore, Share, Share2, Smile, Users } from "lucide-react"
import Image from "next/image"

export const SocialCapabilities = () => {
  return (
    <Container className="mt-32 md:mt-48 grid grid-cols-1 xl:grid-cols-[40%_60%] gap-24 xl:gap-12 mx-auto max-w-6xl">
      <div className="relative bg-zinc-950 xl:border xl:rounded-3xl flex items-end justify-center overflow-hidden min-h-[39rem]xl:min-h-fit">
        <Image
          src="/capabilities/image.png"
          width={1000}
          height={1000}
          sizes="100vw"
          alt="capability-image"
          className="w-[16rem] xl:w-[14rem] bottom-0 absolute"
        />
        <div className="absolute bg-gradient-to-b from-transparent to-black w-full h-36 bottom-0" />
      </div>

      <div className="mx-auto max-w-xl md:max-w-3xl">
        <h3 className="text-3xl leading-tight sm:text-4xl md:text-5xl text-center xl:text-start font-bold ">
          Appit Social’s Advanced Capabilities
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="flex flex-col gap-4 items-start border p-6 rounded-xl">
            <span className="text-xl flex items-center gap-2 font-semibold">
              <MessageCircleMore className="size-6" />
              Instant Message
            </span>
            <p className="text-lg text-muted-foreground">
              Chat seamlessly with friends and communities.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-start border p-6 rounded-xl">
            <span className="text-xl flex items-center gap-2 font-semibold">
              <Share2 className="size-6" />
              Story Sharing
            </span>
            <p className="text-lg text-muted-foreground">
              Share life moments through photos and videos.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-start border p-6 rounded-xl">
            <span className="text-xl flex items-center gap-2 font-semibold">
              <Smile className="size-6" />
              Customizable Profiles
            </span>
            <p className="text-lg text-muted-foreground">
              Personalize your profile with themes and layouts.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-start border p-6 rounded-xl">
            <span className="text-xl flex items-center gap-2 font-semibold">
              <Users className="size-6" />
              Community Groups
            </span>
            <p className="text-lg text-muted-foreground">
              Join or create groups around shared interests.
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
