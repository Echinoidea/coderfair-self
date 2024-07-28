import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <Link href="/profile">
        <Card className='w-96 h-96'>
          Click here
        </Card>
      </Link>
      
    </main>
  );
}
