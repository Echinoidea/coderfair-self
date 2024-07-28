'use client'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

type MenuItem = {
  title: string,
  href: string,
}

const menuItems: MenuItem[] = [
  {
    title: "For You",
    href: "/profile/fyp"
  },
  {
    title: "Following",
    href: "/profile/following"
  },
  {
    title: "My Skills",
    href: "/profile/my-skills"
  },
  {
    title: "To-Do",
    href: "/profile/to-do"
  }
]

export default function ProfileNavigation() {
  return (
    <nav>
        <div className="flex items-center justify-center">
          {/* Left section of the nav */}
          <div className="flex justify-center">

            <NavigationMenu className="pl-2 flex">
              <NavigationMenuList className="flex flex-row justify-center">
                {menuItems.map((value: MenuItem, index: number) => (
                  <NavigationMenuItem key={index} className="">
                    <Link href={value.href} legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        {value.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div> 
        </div>
    </nav>
  )
}