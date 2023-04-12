"use client";

import CreateEventDrawer from "@/components/drawer/CreateEventDrawer";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated" && session?.user?.email) {
      setEmail(session.user.email);
    }
  });

  return (
    <main>
      <div className="w-full h-full flex flex-col container">
        <section className="container p-12 mx-auto">
          <p className="text-xl font-bold text-white">Hey, {email}!</p>
          <p className="text-white text-sm space-y-3 mb-5">
            Looks like you don't have an event yet? Create your first event.
          </p>
          <CreateEventDrawer />
        </section>
      </div>
    </main>
  );
}
