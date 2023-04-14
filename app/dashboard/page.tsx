"use client";

import CreateEventDrawer from "@/components/drawer/CreateEventDrawer";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated" && session?.user?.email) {
      setEmail(session.user.email);
    }
  });

  return (
    <main>
      <div className="w-full h-full flex flex-col container">
        <section className="container p-12 mx-auto">
          <p className="text-xl font-bold text-white">Hey, {email}!</p>
          <p className="text-white text-sm space-y-3 mb-5">
            Looks like you don't have an event yet? Create your first event.
          </p>
          <CreateEventDrawer />

          <SimpleGrid
            className="my-8"
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            <Card rounded="sm" background="brand.100">
              <CardBody>
                <Text className="text-white">
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
              <CardFooter>
                <Button
                  size="sm"
                  rounded="sm"
                  variant="link"
                  colorScheme="green"
                >
                  View
                </Button>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </section>
      </div>
    </main>
  );
}
