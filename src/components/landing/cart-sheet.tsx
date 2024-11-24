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
import WishlistCard from "./wishlist-cards"


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
        <div className="h-full py-4 flex flex-col">
          <div className="flex-1 overflow-y-auto">
            <WishlistCard />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
