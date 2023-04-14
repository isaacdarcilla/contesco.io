"use client";

import CreateEventDrawer from "@/components/drawer/CreateEventDrawer";
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

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [events, setEvents] = useState([]);
  const { data: session, status } = useSession();

  console.log(events);

  useEffect(() => {
    if (status === "authenticated" && session?.user?.email) {
      setEmail(session.user.email);
    }

    async function getEvents() {
      const response = await fetch("/api/event/list");
      const json = await response.json();
      setEvents(json);
    }

    getEvents();
  }, []);

  return (
    <main>
      <div className="w-full h-full flex flex-col container">
        <section className="container p-12 mx-auto">
          <p className="text-xl font-bold text-white">Hey, {email}!</p>
          <p className="text-white text-sm space-y-3 mb-5">
            {events.length < 0
              ? `Looks like you don't have an event yet? Create your first event.`
              : `You can always create new events.`}
          </p>
          <CreateEventDrawer />

          <SimpleGrid
            className="my-7"
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            {events.map((event: Event) => (
              <Card key={event.id} rounded="sm" background="brand.100">
                <CardBody>
                  <Text fontSize="lg" fontWeight="bold" className="text-white">
                    {event.name}
                  </Text>
                  <Text fontSize="sm" className="text-white">
                    {event.description}
                  </Text>
                </CardBody>
                <CardFooter>
                  <Link href={`dashboard/event/${event.id}`}>
                    <Button
                      size="sm"
                      rounded="sm"
                      variant="link"
                      colorScheme="green"
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
