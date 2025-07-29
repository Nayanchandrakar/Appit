import { Container } from "@/components/global/container"
import { Logo } from "./logo"

export const Navbar = () => {
  return <Container asChild>
    <header className="">
        <Logo />
    </header>
  </Container>
}
