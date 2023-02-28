"use client";

import { Tooltip } from "flowbite-react";
import { LogOut } from "react-feather";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Sidebar({ children }: { children?: React.ReactNode }) {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
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
        <div className="flex items-center justify-center w-10 h-10 mt-2 rounded hover:bg-primary hover:text-gray-300">
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
          </svg>
        </div>
        <div className="flex flex-col items-center mt-0">{children}</div>
        <div className="flex flex-col items-center mt-0 absolute bottom-2">
          <Tooltip
            className="mt-1 rounded-sm"
            content="Logout"
            placement="right"
            style="light"
          >
            <div className="flex items-center justify-center w-10 h-10 mt-2 rounded hover:bg-primary hover:text-gray-300">
              <LogOut
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
