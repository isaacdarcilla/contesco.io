"use client";

import CreateEventDrawer from "@/components/drawer/CreateEventDrawer";
import Skeleton from "@/components/loading/Skeleton";
import CustomToast from "@/components/toast/CustomToast";
import Event from "@/lib/types/Event";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import axios from "axios";
import truncateText from "@/lib/global/helper";
import { ArrowRight } from "react-feather";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const { data: session, status } = useSession();

  const { isLoading, error, data } = useQuery("events", () =>
    axios.get("/api/event/lists").then((res) => res.data)
  );

  useEffect(() => {
    if (status === "authenticated" && session?.user?.email) {
      setEmail(session.user.email);
    }
  }, []);

  if (isLoading) {
    return <Skeleton center={true} />;
  }

  if (error) {
    return toast.error("An error occurred", {
      duration: 10000,
    });
  }

  return (
    <main>
      <CustomToast />
      <div className="w-full h-full flex flex-col container">
        <section className="container p-12 mx-auto">
          <p className="text-xl font-bold text-white">Hey, {email}!</p>
          <p className="text-white text-sm space-y-3 mb-5">
            {!data || !data.length
              ? `Looks like you don't have an event yet? Create your first event.`
              : `You can always create new events.`}
          </p>
          <CreateEventDrawer />

          <SimpleGrid
            className="my-7"
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          >
            {data &&
              data.map((event: Event) => (
                <Card key={event.id} rounded="md" background="brand.100">
                  <CardBody>
                    <Text
                      fontSize="lg"
                      fontWeight="bold"
                      className="text-white"
                    >
                      {truncateText(event.name, 20)}
                    </Text>
                    <Text fontSize="sm" className="text-white">
                      {truncateText(event.description, 50)}
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <Link href={`dashboard/event/${event.id}`}>
                      <Button
                        size="sm"
                        rounded="sm"
                        variant="link"
                        colorScheme="green"
                        rightIcon={<ArrowRight size={15} />}
                      >
                        View
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            ;
          </SimpleGrid>
        </section>
      </div>
    </main>
  );
}
