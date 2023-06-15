"use client";

import CreateContestantDrawer from "@/components/drawer/CreateContestantDrawer";
import Skeleton from "@/components/loading/Skeleton";
import CustomToast from "@/components/toast/CustomToast";
import { getEventById } from "@/src/api";
import Search from "@/src/interface/searchInterface";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { List, Plus, Settings } from "react-feather";
import { useQuery } from "react-query";

export default function EventPage({ params }: Search) {
  const router = useRouter();
  const eventId = params.slug;
  const queryArgs = { eventId };

  const { isLoading, data: event } = useQuery(
    ["event", eventId],
    () => getEventById(queryArgs),
    {
      select: (data) => data.getEventById,
    }
  );

  if (isLoading) {
    return <Skeleton center={true} />;
  }

  if (!event) {
    return router.push("/dashboard");
  }

  return (
    <main>
      <CustomToast />
      <div className="w-full h-full flex flex-col container">
        <section className="container p-12 mx-auto">
          <div className="flex justify-between align-middle items-center">
            <div>
              <Breadcrumb color="gray" fontWeight="bold" fontSize="xs">
                <BreadcrumbItem>
                  <Link href="/dashboard">Dashboard</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink>Event</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <p className="text-xl font-bold text-white space-y-4">
                {event.name}
              </p>
            </div>
            <div className="my-2">
              <Menu size="sm">
                <motion.div whileHover={{ scale: 1.03 }}>
                  <MenuButton
                    as={Button}
                    size="sm"
                    rounded="sm"
                    leftIcon={<List size={15} />}
                    colorScheme="green"
                  >
                    Manage
                  </MenuButton>
                </motion.div>
                <MenuList bgColor="brand.100" border="hidden">
                  <CreateContestantDrawer eventId={eventId} />
                  <MenuItem
                    bgColor="brand.100"
                    textColor="white"
                    fontWeight="bold"
                    fontSize={13}
                    icon={<Plus size={15} />}
                    command="Shift + J"
                  >
                    New Judge
                  </MenuItem>
                  <MenuItem
                    bgColor="brand.100"
                    textColor="white"
                    fontWeight="bold"
                    fontSize={13}
                    icon={<Plus size={15} />}
                    command="Shift + T"
                  >
                    New Criteria
                  </MenuItem>
                  <MenuDivider color="brand.200" />
                  <MenuItem
                    bgColor="brand.100"
                    textColor="white"
                    fontWeight="bold"
                    fontSize={13}
                    icon={<Settings size={15} />}
                    command="Shift + S"
                  >
                    Settings
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
