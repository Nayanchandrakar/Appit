import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        alt="logo"
        width={1000}
        height={1000}
        sizes="100vw"
        className="size-5"
      />
    </Link>
  )
}
