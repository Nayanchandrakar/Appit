import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface WaitListButtonProps {
  className?: string
}

export const WaitListButton = ({ className }: WaitListButtonProps) => {
  return (
    <Button asChild className={cn(className)}>
      <Link href="/">Join Waitlist</Link>
    </Button>
  )
}
