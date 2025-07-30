import { Container } from "@/components/global/container"
import { Logo } from "@/components/navbar/logo"
import { Navigation } from "@/components/navbar/navigation"
import { WaitListButton } from "@/components/buttons/wait-list-button"

export const Navbar = () => {
  return (
    <header className="border-b py-6 bg-black/30 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-3">
        <Logo />
        <Navigation />
        <WaitListButton />
      </Container>
    </header>
  )
}
