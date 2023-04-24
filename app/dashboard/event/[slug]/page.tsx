"use client";

import Skeleton from "@/components/loading/Skeleton";
import CustomToast from "@/components/toast/CustomToast";
import Search from "@/lib/types/Search";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useQuery } from "react-query";

export default function EventPage({ params }: Search) {
  const router = useRouter();
  const { isLoading, data } = useQuery("event", () =>
    axios.get(`/api/event/${params.slug}`).then((res) => res.data)
  );

  if (isLoading) {
    return <Skeleton center={true} />;
  }

  if (!data) {
    return router.push("/dashboard");
  }

  return (
    <main>
      <CustomToast />
      <div className="w-full h-full flex flex-col container">
        <section className="container p-12 mx-auto">
          <Breadcrumb color="gray" fontWeight="bold" fontSize="xs">
            <BreadcrumbItem>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink>Event</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <p className="text-xl font-bold text-white space-y-4">{data?.name}</p>
        </section>
      </div>
    </main>
  );
}
