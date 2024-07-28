import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


import profileHeaderPlaceholder from "@/public/placeholders/profile/profile-header-placeholder.png"
import Image, { StaticImageData } from "next/image"

const robloxManImg = "https://preview.redd.it/does-anybody-else-feel-like-superman-looks-like-the-man-v0-2rwhu0zfod3d1.jpg?width=396&format=pjpg&auto=webp&s=5c63e8bf655ae8c45503aad48d7ad06789d285b4"

function Header({
  name,
  subtitle,
  banner
}: {
  name: string;
  subtitle?: string;
  banner: StaticImageData
}) {
  return (
    <div className='flex flex-col max-h-[20vh] w-screen'>
      <Image src={banner} alt="Header" className='h-[10vh]'/>
      
      <div className="ml-2">
        <Avatar className={`-mt-7 size-14 border-2`}>
          <AvatarImage src={robloxManImg} />
        </Avatar>

        <p className="text-lg">{name}</p>
        <p className="text-sm -mt-2">{subtitle}</p>
      </div>
    </div>
  );
}

export default function ProfileHeader() {
  return (
    <div className='flex flex-col'>
      <Header name="Epic Coder" subtitle="@RobloxGod" banner={profileHeaderPlaceholder}/>
    </div>
  )
}