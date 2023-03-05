"use client";

import Button from "@/components/button/Button";
import TextInput from "@/components/input/TextInput";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Info, Mail } from "react-feather";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import CustomToast from "@/components/toast/CustomToast";
import Link from "next/link";

const montserrat = Montserrat();

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard/home");
    }
  });

  const handleLogin = async (e: { target: { reset: () => void } }) => {
    setLoading(true);

    const res = await signIn("email", {
      email: email,
      redirect: false,
    });

    if (res?.error == "EmailSignin") {
      toast.error("Please try again", { duration: 10000 });
    }

    if (res?.ok && res?.error == null) {
      setEmail("");
      toast.success("We've sent a magic link to your email", {
        duration: 10000,
      });
    }

    setLoading(false);
  };

  return (
    <main className={montserrat.className}>
      <CustomToast />
      <section className="block">
        <div className="g-0 lg:flex lg:flex-wrap">
          <div className="md:px-0 lg:w-5/12">
            <div className="flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-secondary">
              <div className="w-full max-w-md space-y-8">
                <div>
                  <h3 className="font-bold text-xl tracking-tight text-white">
                    <Image
                      src="/logo_96px.png"
                      alt="Logo"
                      width={45}
                      height={45}
                    />{" "}
                    contesco
                  </h3>
                  <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">
                    Welcome back.
                  </h2>
                  <p className="text-normal mt-1 tracking-tight text-gray-300">
                    Sign in to your account
                  </p>
                </div>
                <form
                  className="mt-8 space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="-space-y-px rounded-md shadow-sm">
                    <TextInput
                      label="Email"
                      type="email"
                      value={email}
                      placeholder="you@example.com"
                      required={false}
                      onChange={(e) => setEmail(e.target.value.toLowerCase())}
                    />
                  </div>

                  <Button
                    disabled={loading}
                    type="submit"
                    title="Sign in with email address"
                    onClick={(e) => handleLogin(e)}
                  />

                  <div className="text-xs text-center group relative text-white flex w-full justify-center rounded-md border border-transparent">
                    <Mail size={14} />
                    <p>
                      &nbsp;We will email you a magic link for a password-free
                      sign-in.
                    </p>
                  </div>

                  <div className="text-center text-xs font-medium text-gray-500">
                    By continuing, you agree to Contesco's{" "}
                    <u>Terms of Service</u> and <u>Privacy Policy</u>, and to
                    receive periodic emails with updates.
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex items-center lg:w-7/12 bg-primary">
            <div className="w-full max-w-lg space-y-8 mx-auto">
              <div className="text-white text-3xl font-normal hidden lg:block">
                Streamline your contests with Contesco — the hassle-free
                solution for modern organizers.
              </div>
              <div className="text-white font-bold hidden lg:block">
                <div className="flex">
                  <Image
                    src="/logo_96px.png"
                    alt="Logo"
                    width={30}
                    height={30}
                  />{" "}
                  <Link
                    href="https://twitter.com/contesco.io"
                    target="_blank"
                    className="mx-1 my-auto"
                  >
                    @contesco.io
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
