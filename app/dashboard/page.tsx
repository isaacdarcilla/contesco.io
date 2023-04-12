import CreateEventDrawer from "@/components/drawer/CreateEventDrawer";

export default function HomePage() {
  return (
    <main>
      <div className="w-full h-full flex flex-col container">
        <section className="container p-6 mx-auto">
          <p className="text-2xl font-bold text-white">Hey</p>
          <p className="text-white text-sms space-y-3 mb-5">
            Looks like you don't have an event yet? Create your first event.
          </p>
          <CreateEventDrawer />
        </section>
      </div>
    </main>
  );
}
