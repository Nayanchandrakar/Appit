import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

interface WaitListButtonProps {
  className?: string
}

export const WaitListButton = ({ className }: WaitListButtonProps) => {
  return (
    <Link
      href="/"
      className={buttonVariants({
        variant: "default",
        className,
      })}
    >
      Join Waitlist
    </Link>
  )
}
