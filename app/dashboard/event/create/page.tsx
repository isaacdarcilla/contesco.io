"use client";

import TextInput from "@/components/input/TextInput";

export default function CreateEventPage() {
  return (
    <main>
      <div className="w-full h-full flex flex-col container">
        <section className="container p-6">
          <div className="w-full lg:w-8/12 lg:mx-auto p-4 text-center bg-secondary rounded-md sm:p-8">
            <h5 className="mb-2 text-sm font-semibold text-left text-white">
              Create a new event
            </h5>
            <p className="text-gray-400 text-sm text-left my-4 mb-5">
              Your event or contest will have a dedicated URL which will be used
              for all event related process.
            </p>
            <form className="space-y-4">
              <div className="flex justify-between align-middle">
                <label className="hidden lg:inline mb-2 text-sm font-normal mt-1 text-white">
                  Name
                </label>
                <input
                  placeholder="Event name"
                  type="text"
                  className="block w-full lg:w-4/6 p-2 border text-white border-gray-400 rounded-md bg-secondary sm:text-xs focus:ring-green-500 focus:border-green-500 placeholder:text-gray-500 placeholder:text-sm px-2"
                />
              </div>
              <div className="flex justify-between align-middle">
                <label className="hidden lg:inline mb-2 text-sm font-normal mt-1 text-white">
                  Organization
                </label>
                <input
                  placeholder="Organization name"
                  type="text"
                  className="block w-full lg:w-4/6 p-2 border text-white border-gray-400 rounded-md bg-secondary sm:text-xs focus:ring-green-500 focus:border-green-500 placeholder:text-gray-500 placeholder:text-sm px-2"
                />
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
