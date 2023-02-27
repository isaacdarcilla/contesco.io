"use client";

import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

export default function LoginPage() {
  return (
    <main className={lora.className}>
      <div className="h-screen w-96 bg-primary"></div>
    </main>
  );
}
