import Image from "next/image"

const Avatars = ["/avatars/1.png", "/avatars/2.png", "/avatars/3.png"]

export const AvatarCircle = () => {
  return (
    <div className="flex items-center gap-2 bg-zinc-900 border p-2 rounded-full w-fit">
      <div className="flex -space-x-[0.6rem]">
        {Avatars.map((url) => (
          <Image
            key={url}
            className="ring-background rounded-full ring-2"
            src={url}
            width={32}
            height={32}
            alt="Avatar"
          />
        ))}
      </div>
      <p className="text-white text-base font-semibold mr-1.5">
        Trusted by 3+ million users
      </p>
    </div>
  )
}
