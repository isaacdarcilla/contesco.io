"use client";

import Button from "@/components/button/Button";
import TextInput from "@/components/input/TextInput";
import { Lora } from "next/font/google";

const lora = Lora();

export default function LoginPage() {
  return (
    <main className={lora.className}>
      <section className="block">
        <div className="g-0 lg:flex lg:flex-wrap">
          <div className="md:px-0 lg:w-5/12">
            <div className="flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-secondary">
              <div className="w-full max-w-md space-y-8">
                <div>
                  <h3 className="font-bold text-xl tracking-tight text-white">
                    contesco
                  </h3>
                  <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">
                    Welcome back.
                  </h2>
                  <p className="text-normal mt-1 tracking-tight text-gray-300">
                    Sign in to your account
                  </p>
                </div>
                <form className="mt-8 space-y-6">
                  <input type="hidden" name="remember" value="true" />
                  <div className="-space-y-px rounded-md shadow-sm">
                    <TextInput
                      label="Email"
                      type="email"
                      placeholder="you@example.com"
                      onChange={() => {}}
                    />
                    <TextInput
                      label="Password"
                      type="password"
                      placeholder="Your password"
                      onChange={() => {}}
                    />
                  </div>

                  <Button title="Sign In" onClick={() => {}} />

                  <div className="text-center text-sm font-medium text-gray-500">
                    Don't have an account?&nbsp;
                    <a
                      href="#"
                      className="underline text-white hover:text-gray-300"
                    >
                      Sign Up Now
                    </a>
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
            <div className="w-full max-w-md space-y-8 mx-auto">
              <div className="text-white text-3xl hidden lg:block">
                Streamline your contests with Contesco — the hassle-free
                solution for modern organizers.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
