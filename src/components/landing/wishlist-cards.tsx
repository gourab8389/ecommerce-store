import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { Cross, X } from "lucide-react";

const items = [
    {
      name: "carrot",
      image: "/wishlist-images/carrot.jpg",
      description: "Fresh organic carrots, perfect for cooking and juicing.",
      price: 50,
      quantity: 100,
    },
    {
      name: "chicken (red meat)",
      image: "/wishlist-images/chicken-red.jpg",
      description: "Premium quality red chicken meat, tender and juicy.",
      price: 300,
      quantity: 500,
    },
    {
      name: "chicken",
      image: "/wishlist-images/chicken.jpg",
      description: "Locally sourced chicken, ideal for healthy meals.",
      price: 250,
      quantity: 800,
    },
    {
      name: "grapes",
      image: "/wishlist-images/graps.jpg",
      description: "Sweet and fresh green grapes, perfect for snacking.",
      price: 120,
      quantity: 150,
    },
    {
      name: "lemon",
      image: "/wishlist-images/lemon.jpg",
      description: "Zesty and fresh lemons, great for beverages and cooking.",
      price: 30,
      quantity: 200,
    },
    {
      name: "mixed vegetables",
      image: "/wishlist-images/mixveg.jpg",
      description: "A mix of seasonal vegetables for a healthy meal.",
      price: 200,
      quantity: 800,
    },
    {
      name: "pomegranate",
      image: "/wishlist-images/pomegranates.jpg",
      description: "Juicy and vibrant pomegranates, packed with antioxidants.",
      price: 150,
      quantity: 600,
    },
];
  
  

const totalPrice = items.reduce((acc, item) => acc + item.price, 0);


const WishlistCard = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Scrollable items section */}
      <div className="flex flex-col space-y-4 mb-4 flex-1 overflow-y-auto no-scrollbar">
        {items.map((item) => (
          <Card key={item.name} className="flex gap-4 items-center p-2">
            <div className="h-full flex w-[50%]">
              <Image 
                src={item.image} 
                alt={item.name} 
                width={100} 
                height={100}
                className="rounded-md object-cover shrink-0"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold text-lg">{item.name}</h1>
              <p className="text-sm">{item.description}</p>
              <div className="flex justify-between">
              <h1 className="font-semibold text-lg text-red-500">
                ₹ {item.price} 
                <span className="text-muted-foreground text-sm">/{item.quantity}gm</span>
              </h1>
              <Button size={"icon"} variant={"outline"} className="border-none">
                <X className="size-6" color="red" />
              </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
        <div className="flex flex-col items-center gap-4 pb-6">
          <h1 className="text-lg font-semibold">Total: ₹{totalPrice}</h1>
          <Button className="w-full">Checkout</Button>
        </div>
    </div>
  );
};

export default WishlistCard;
