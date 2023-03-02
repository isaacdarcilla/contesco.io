import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <div className="w-full h-full flex flex-col container">
        <section className="container p-5">
          <Link href="/event/create">
            <button
              type="submit"
              className="text-gray-200 font-light text-xs p-1 bg-green-600 border-white border-1 hover:bg-green-700 rounded-md px-3"
            >
              New event
            </button>
          </Link>
        </section>
      </div>
    </main>
  );
}
