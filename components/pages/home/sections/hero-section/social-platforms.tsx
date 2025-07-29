import { Info } from "lucide-react"
import Image from "next/image"

export const SocialPlatforms = () => {
  return (
    <div className="flex items-center mt-8 gap-4">
      <p className="text-zinc-500 text-base flex items-center gap-2">
        <Info className="size-5" />
        App Available For
      </p>
      <span className="flex items-center gap-4 border py-2 px-3 rounded-full">
        <Image
          width={1000}
          height={1000}
          sizes="100vw"
          className="size-7"
          alt="social"
          src="/social/play-store.svg"
        />
        <Image
          width={1000}
          height={1000}
          sizes="100vw"
          className="size-7"
          alt="social"
          src="/social/app-store.svg"
        />
      </span>
    </div>
  )
}
