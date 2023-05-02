"use client";

import { Tooltip } from "flowbite-react";
import { LogOut, Settings } from "react-feather";
import { signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import { useAnimate } from "framer-motion";

export default function Sidebar({ children }: { children?: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { status } = useSession();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(scope.current, {
      scale: 1.1,
      rotate: 360,
      ease: "linear",
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    });

    if (status == "unauthenticated") {
      router.push("/");
    }
  });

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  return (
    <>
      <aside className="flex flex-col items-center w-14 overflow-hidden text-gray-400 bg-secondary h-screen border-r border-primary">
        <div className="flex items-center justify-center w-10 h-10 mt-1 rounded hover:text-gray-300">
          <Image
            ref={scope}
            src="/logo_96px.png"
            alt="Logo"
            width={25}
            height={25}
          />{" "}
        </div>
        <div className="flex flex-col items-center mt-0">{children}</div>
        <div className="flex flex-col items-center mt-0 absolute bottom-2">
          {pathname !== "/dashboard" ? (
            <Tooltip
              className="mt-1 rounded-sm font-extrabold"
              content="Setting"
              placement="right"
              style="light"
            >
              <div
                role="button"
                title={" "}
                className="flex items-center justify-center w-10 h-10 mt-2 rounded hover:bg-primary hover:text-gray-300"
              >
                <Settings role="button" size={18} className="text-white" />
              </div>
            </Tooltip>
          ) : (
            ""
          )}
          <Tooltip
            className="mt-1 rounded-sm font-extrabold"
            content="Logout"
            placement="right"
            style="light"
          >
            <div
              role="button"
              title={" "}
              className="flex items-center justify-center w-10 h-10 mt-2 rounded hover:bg-primary hover:text-gray-300"
            >
              <LogOut
                role="button"
                onClick={() => handleLogout()}
                size={18}
                className="text-white"
              />
            </div>
          </Tooltip>
        </div>
      </aside>
    </>
  );
}
