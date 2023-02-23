"use client";

import { createClient } from "@supabase/supabase-js";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { Card } from "flowbite-react";
import { Lora } from "@next/font/google";

const lora = Lora({ subsets: ["latin"] });

const supabase = createClient(
  `${process.env.NEXT_PUBLIC_SUPABASE_URL}`,
  `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
);

export default function LoginPage() {
  return (
    <main className={lora.className}>
      <div className="h-screen w-96 bg-primary"></div>
    </main>
  );
}
