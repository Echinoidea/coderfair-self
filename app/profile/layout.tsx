import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import ProfileHeader from "@/components/profile/header";
import ProfileNavigation from "@/components/profile/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-screen max-h-screen`}>
        <header>
          <ProfileHeader/>
          <ProfileNavigation/>
        </header>
        
        {children}
        
      </body>
    </html>
  );
}
