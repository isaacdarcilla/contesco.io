"use client";

import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const handleClick = async () => {
    router.push("/dashboard/event/create");
  };

  return (
    <main>
      <div className="w-full h-full flex flex-col container">
        <section className="container p-6">
          <div className="w-full lg:w-8/12 lg:mx-auto p-4 text-center bg-secondary rounded-md sm:p-8">
            <Image
              src="/assets/check_all_96px.png"
              alt="Logo"
              width={40}
              height={40}
              className="mx-auto text-center my-3"
            />
            <h5 className="mb-2 text-xl font-bold text-white">
              Create your first contest!
            </h5>
            <p className="mb-5 text-sm text-gray-500 sm:text-lg">
              Streamline your contests — the hassle-free solution for modern
              organizers.
            </p>
            <div className="mb-3">
              <Button
                size="sm"
                colorScheme="green"
                onClick={() => handleClick()}
              >
                New event
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
