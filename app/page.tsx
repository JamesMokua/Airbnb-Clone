"use client";
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
export default function Home() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
 
    // In case the user signs out while on the page.
    if (!isLoaded || !userId) {
      return null;
    }
  return (
   <main >
      <h1 className='text-rose-500 text-2xl'>Hello Airbnb</h1>
      <Button>Click me</Button>
      
      <div>
      Hello, {userId} your current active session is {sessionId}
    </div>
   </main>
  )
}
