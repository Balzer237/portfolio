'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { RouteName } from "@/src/lib/routeName";

export default function Home() {
  const router = useRouter()
  useEffect(()=>{
    router.replace(RouteName.home)
  },[])
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     
    </div>
  );
}
