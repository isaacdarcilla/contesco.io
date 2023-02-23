"use client"

import { Button } from "flowbite-react";
import { Bell } from "react-feather";

export default function NavBar() {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-between">
        <header className="h-12 w-full flex items-center relative justify-between bg-secondary">
          <div className="flex flex-col items-start text-white text-xs mx-3">Contesco</div>
          <div className="flex flex-shrink-0 items-center space-x-4 mx-3">
            <Button size="xs" className="bg-primary hover:bg-gray-700 hover:border-gray-800 focus:border-none">
              <Bell size={12} />
            </Button>
          </div>
        </header>
      </div>
    </>
  )
}