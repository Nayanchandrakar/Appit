import Link from "next/link"
import { Button } from "@/components/ui/button"
import { navData } from "@/constants/navigation-data"

export const Navigation = () => {
  return (
    <nav className="lg:inline-block hidden">
      {navData?.map(({ id, href, label }) => (
        <Button key={id} variant="ghost" asChild>
          <Link href={href}>{label}</Link>
        </Button>
      ))}
    </nav>
  )
}
