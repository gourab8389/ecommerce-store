import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Heart } from "lucide-react"

export function CartSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
            <Heart className="size-6" color="red"/>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Wishlist</SheetTitle>
          <SheetDescription>
            Here are the items you've saved for later
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-4">
            
        </div>
      </SheetContent>
    </Sheet>
  )
}
