"use client";

import CustomToast from "@/components/toast/CustomToast";

type Props = {
  params: {
    slug: string;
  };
  searchParams: {};
};

export default function EventPage({ params }: Props) {
  return (
    <main>
      <CustomToast />
      <div className="w-full h-full flex flex-col container">
        <section className="container p-12 mx-auto">
          <p className="text-xl font-bold text-white">Event, {params.slug}!</p>
        </section>
      </div>
    </main>
  );
}
