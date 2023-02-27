"use client";

import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

export default function LoginPage() {
  return (
    <main className={lora.className}>
      <section className="gradient-form h-full bg-neutral-200">
        <div className="container h-full">
          <div className=" flex h-full flex-wrap items-center justify-center text-neutral-800">
            <div className="w-full">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="md:px-0 lg:w-5/12">
                  <div className="flex h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-secondary">
                    <div className="w-full max-w-md space-y-8">
                      <div>
                        <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">
                          Welcome back.
                        </h2>
                        <p className="text-normal mt-1 tracking-tight text-gray-300">
                          Sign in to your account
                        </p>
                      </div>
                      <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" value="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                          <div>
                            <div className="mb-4">
                              <label className="block mb-2 text-sm font-medium text-white">
                                Email
                              </label>
                              <input
                                type="email"
                                className="shadow-sm bg-secondary border border-gray-500 text-gray-700 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                                placeholder="you@example.com"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="mb-4">
                              <div className="flex justify-between">
                                <label className="block mb-2 text-sm font-medium text-white">
                                  Password
                                </label>
                                <label
                                  role="button"
                                  className="block mb-2 text-sm font-medium text-gray-500 hover:text-gray-600"
                                >
                                  Forgot Password?
                                </label>
                              </div>
                              <input
                                type="password"
                                className="shadow-sm bg-secondary border border-gray-500 text-gray-700 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;"
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-button-green py-2 px-4 text-sm font-medium text-white hover:bg-button-green-hover focus:outline-none focus:ring-0 focus:ring-gray-500"
                          >
                            Sign In
                          </button>
                        </div>

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
                          <u>Terms of Service</u> and <u>Privacy Policy</u>, and
                          to receive periodic emails with updates.
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="flex items-center lg:w-7/12 bg-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
