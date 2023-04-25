"use client";

import { Button } from "flowbite-react";
import { useSession } from "next-auth/react";
import { Bell, MessageCircle } from "react-feather";
import Skeleton from "../loading/Skeleton";

export default function NavBar({ children }: { children: React.ReactNode }) {
  const { status } = useSession();

  return (
    <div className="h-full flex flex-col w-screen overflow-hidden overflow-y-auto">
      <nav className="h-12 w-full flex items-center  justify-between bg-secondary sticky top-0 z-50">
        <div className="flex flex-col items-start text-white text-xs mx-3">
          <div className="flex font-bold">Contesco</div>
        </div>
        <div className="flex flex-shrink-0 items-center space-x-4 mx-3 p-4">
          <Button
            size="xs"
            className="bg-primary rounded-md hover:bg-gray-700 hover:border-gray-800 focus:border-none -mr-2"
          >
            &nbsp;
            <MessageCircle size={14} /> &nbsp;
            <small className="text-xs">
              <span className="hidden lg:inline">Feedback?</span>
            </small>
          </Button>
          <Button
            size="xs"
            className="bg-primary rounded-md hover:bg-gray-700 hover:border-gray-800 focus:border-none"
          >
            &nbsp;
            <Bell size={14} />
            &nbsp;
          </Button>
        </div>
      </nav>
      <section className="container mx-auto max-width">
        {status !== "loading" ? children : <Skeleton center={true} />}
      </section>
    </div>
  );
}
