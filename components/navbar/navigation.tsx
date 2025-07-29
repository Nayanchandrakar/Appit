import { navData } from "@/constants/navigation-data"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const Navigation = () => {
  return (
    <nav>
      {navData?.map(({ id, href, label }) => (
        <Button key={id} variant="ghost" asChild>
          <Link href={href}>{label}</Link>
        </Button>
      ))}
    </nav>
  )
}
