"use client";

import { Button } from "flowbite-react";
import { usePathname } from "next/navigation";
import { Bell, MessageCircle } from "react-feather";

export default function NavBar({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  const capitalize = (str: string | undefined) => {
    if (typeof str === "string") {
      return str.replace(/\b\w/g, function (l) {
        return l.toUpperCase();
      });
    }

    return "";
  };

  return (
    <div className="h-full flex flex-col w-screen overflow-hidden">
      <nav className="h-12 w-full flex items-center relative justify-between bg-secondary">
        <div className="flex flex-col items-start text-white text-xs mx-3">
          <div className="flex font-bold">
            Contesco <span className="mx-2 text-gray-500 capitalize">/</span>{" "}
            {capitalize(pathName?.replace(/\//g, " ").split(" ")[2])}
          </div>
        </div>
        <div className="flex flex-shrink-0 items-center space-x-4 mx-3">
          <Button
            size="xs"
            className="bg-primary hover:bg-gray-700 hover:border-gray-800 focus:border-none -mr-2"
          >
            &nbsp;
            <MessageCircle size={14} /> &nbsp;
            <small className="text-xs">
              <span className="hidden lg:inline">Feedback?</span>
            </small>
          </Button>
          <Button
            size="xs"
            className="bg-primary hover:bg-gray-700 hover:border-gray-800 focus:border-none"
          >
            &nbsp;
            <Bell size={14} />
            &nbsp;
          </Button>
        </div>
      </nav>
      <section className="container">{children}</section>
    </div>
  );
}
