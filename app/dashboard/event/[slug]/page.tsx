"use client";

import CustomToast from "@/components/toast/CustomToast";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Link from "next/link";

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
          <Breadcrumb color="gray.200" fontWeight="bold" fontSize="xs">
            <BreadcrumbItem>
              <Link href="dashboard">
                <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>

            <BreadcrumbItem color="gray">
              <BreadcrumbLink>Event</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <p className="text-xl font-bold text-white">Event, {params.slug}!</p>
        </section>
      </div>
    </main>
  );
}
