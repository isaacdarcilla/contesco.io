import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <div className="w-full h-full flex flex-col container">
        <section className="container p-6">
          <div className="w-full p-4 text-center bg-secondary rounded-md sm:p-8">
            <Image
              src="/assets/applause_96px.png"
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
              <Link
                href="/dashboard/event/create"
                className="text-gray-200 text-xs p-1 font-bold bg-green-600 border-white border-1 hover:bg-green-700 rounded-md px-3"
              >
                New event
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
