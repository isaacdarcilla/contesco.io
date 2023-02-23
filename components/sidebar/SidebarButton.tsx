"use client"

import { Tooltip } from "flowbite-react";
import Link from "next/link";

export default function SidebarButton({ children, content }: { children: React.ReactNode, content: string }) {
  return (
    <>
      <div className="flex gap-2">
        <Tooltip className="mt-1 rounded-sm" content={content} placement={"right"} style="light">
          <Link href="#" className="flex items-center justify-center w-10 h-10 mt-2 rounded hover:bg-primary hover:text-gray-300">
            {children}
          </Link>
        </Tooltip>
      </div>
    </>
  )
}