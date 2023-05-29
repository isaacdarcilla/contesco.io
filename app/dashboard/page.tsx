"use client";

import CreateEventDrawer from "@/components/drawer/CreateEventDrawer";
import Skeleton from "@/components/loading/Skeleton";
import CustomToast from "@/components/toast/CustomToast";
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
import truncateText from "@/src/utils/helper";
import { ArrowRight } from "react-feather";
import { motion } from "framer-motion";
import { getEvents } from "@/src/api";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const { data: session, status } = useSession();

  const { isLoading, isError, data } = useQuery(["events"], () => getEvents());

  useEffect(() => {
    if (status === "authenticated" && session?.user?.email) {
      setEmail(session.user.email);
    }
  }, []);

  if (isLoading) {
    return <Skeleton center={true} />;
  }

  if (isError) {
    toast.error("An error occurred");
  }

  return (
    <>
      <CustomToast />
      <div className="w-full h-full flex flex-col container">
        <section className="container p-12 mx-auto">
          <div className="flex justify-between">
            <div>
              <p className="text-xl font-bold text-white">
                Hi, {email ?? "user"}!
              </p>
              <p className="text-white text-sm space-y-3 mb-5">
                {!data?.getEvents || !data.getEvents.length
                  ? `Looks like you don't have an event yet? Create your first event.`
                  : `You can always create new events.`}
              </p>
            </div>
            <div className="hidden lg:inline">
              <CreateEventDrawer />
            </div>
          </div>
          <div className="sm:hidden">
            <CreateEventDrawer />
          </div>

          <SimpleGrid
            className="my-7"
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          >
            {data?.getEvents &&
              data.getEvents.map((event) => (
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ delay: 0.1 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  key={event.id}
                >
                  <Card
                    key={event.id}
                    rounded="sm"
                    background="brand.100"
                    className="hover:shadow-xl"
                    height={180}
                  >
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
                </motion.div>
              ))}
          </SimpleGrid>
        </section>
      </div>
    </>
  );
}
