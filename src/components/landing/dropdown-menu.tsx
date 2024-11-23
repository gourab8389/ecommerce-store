"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserAvatar } from "./avatar-item"
import { LogOut, Settings, Wallet } from "lucide-react"
import Link from "next/link"

const dropdownMenu = [
    {
        title: "Settings",
        icon: Settings,
        href: "/settings"
    },
    {
        title: "Wallet",
        icon: Wallet,
        href: "/wallet"
    },
    {
        title: "Logout",
        icon: LogOut,
        href: "/logout"
    },
]

export function UserDropdownMenu() {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-2 border-none">
            <h1>User</h1>
            <UserAvatar/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="flex flex-col space-y-2 w-full">
            {
                dropdownMenu.map((item, index) => (
                    <Link href={item.href} key={index} className="flex items-center gap-2 p-2 rounded-md hover:bg-accent hover:text-accent-foreground text-sm">
                            <item.icon className="size-5"/>
                            <h1>{item.title}</h1>
                    </Link>
                ))
            }
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
