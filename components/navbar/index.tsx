import { Container } from "@/components/global/container"
import { Logo } from "@/components/navbar/logo"
import { Navigation } from "@/components/navbar/navigation"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export const Navbar = () => {
  return (
    <header className="border-b py-6">
      <Container className="flex items-center justify-between gap-3">
        <Logo />
        <Navigation />
        <Link href="/" className={buttonVariants({ variant: "default" })}>
          Join Waitlist
        </Link>
      </Container>
    </header>
  )
}
