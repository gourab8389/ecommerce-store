"use client"
import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const categories = [
    {
        name: "Fruits",
        items: ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"],
    },
    {
        name: "Vegetables",
        items: ["Broccoli", "Carrot", "Potato", "Spinach", "Tomato"],
    },
    {
        name: "Meat",
        items: ["Beef", "Chicken", "Lamb", "Pork", "Turkey"],
    },
]

export function Categories() {
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null);
  const [isHoveringContainer, setIsHoveringContainer] = React.useState(false);

  const handleMouseEnter = (categoryName: string) => {
    setActiveCategory(categoryName);
  };

  const handleContainerMouseEnter = () => {
    setIsHoveringContainer(true);
  };

  const handleContainerMouseLeave = () => {
    setIsHoveringContainer(false);
    setActiveCategory(null);
  };

  const handleItemClick = (item: string) => {
    // Handle navigation or any other action when an item is selected
    console.log(`Selected item: ${item}`);
    // Example: router.push(`/products/${item.toLowerCase()}`)
  };

  const getActiveItems = () => {
    const category = categories.find(cat => cat.name === activeCategory);
    return category?.items || [];
  };

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Categories" />
      </SelectTrigger>
      <SelectContent className="p-2">
        <div 
          className="flex gap-4 w-[500px]"
          onMouseEnter={handleContainerMouseEnter}
          onMouseLeave={handleContainerMouseLeave}
        >
          <div className="w-1/2">
            <SelectGroup>
              <SelectLabel>Categories</SelectLabel>
              <div className="space-y-1">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    onMouseEnter={() => handleMouseEnter(category.name)}
                    className="relative group"
                  >
                    <SelectItem 
                      value={category.name} 
                      className={`cursor-pointer transition-colors ${
                        activeCategory === category.name 
                          ? 'bg-accent text-accent-foreground' 
                          : 'group-hover:bg-accent/50'
                      }`}
                    >
                      {category.name}
                    </SelectItem>
                  </div>
                ))}
              </div>
            </SelectGroup>
          </div>
          <div className="w-1/2 border-l pl-4">
            <SelectGroup>
              <SelectLabel>Sub Categories</SelectLabel>
              <div className="space-y-1 mt-1">
                {(isHoveringContainer && activeCategory) && getActiveItems().map((item) => (
                  <div
                    key={item}
                    className="group"
                    onClick={() => handleItemClick(item)}
                  >
                    <SelectItem 
                      value={item}
                      className="cursor-pointer group-hover:bg-accent/50 transition-colors"
                    >
                      {item}
                    </SelectItem>
                  </div>
                ))}
              </div>
            </SelectGroup>
          </div>
        </div>
      </SelectContent>
    </Select>
  )
}