import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ChevronDown, MapPin } from "lucide-react"

 
export function LocationDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex gap-1 border-none">
            <MapPin className="size-6"/>
            <h1 className="font-semibold">Loaction</h1>
            <ChevronDown className="size-6"/>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <div className="flex flex-col space-y-4">
          <div className="">
          <h2 className="text-xl font-semibold">Select your location</h2>
          <p className="text-lg">We deliver your selected or this current location</p>
          </div>
          <div className="flex gap-5 place-items-end">
          <Button variant="outline">Use current location</Button>
          <Button variant="outline">Edit Location</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}