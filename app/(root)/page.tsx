"use client";
import { Model } from "@/components/ui/models";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="p-4">
       <Model title="test" description="test" isOpen onClose={()=>{}}>
          children
       </Model>
    </div>
  );
}
