"use client";

import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { create } from "zustand";
import { init } from "@paralleldrive/cuid2";
import { EventState } from "@/lib/event.type";

const createId = init({
  length: 10,
});

const useStore = create<EventState>((set) => ({
  eventName: "",
  organizerName: "",
  categoryName: "",
  eventStartDate: "",
  eventEndDate: "",
  eventDescription: "",
  eventSlug: "",
  setEventName: (e: string) =>
    set(() => ({ eventName: e, eventSlug: createId() })),
  setOrganizerName: (e: string) => set(() => ({ organizerName: e })),
  setCategoryName: (e: string) => set(() => ({ categoryName: e })),
  setEventStartDate: (e: string) => set(() => ({ eventStartDate: e })),
  setEventEndDate: (e: string) => set(() => ({ eventEndDate: e })),
  setEventDescription: (e: string) => set(() => ({ eventDescription: e })),
}));

export default function CreateEventDrawer({}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    eventName,
    eventSlug,
    organizerName,
    categoryName,
    eventStartDate,
    eventEndDate,
    eventDescription,
    setEventName,
    setOrganizerName,
    setCategoryName,
    setEventStartDate,
    setEventEndDate,
    setEventDescription,
  } = useStore();

  return (
    <>
      <Button size="sm" colorScheme="blue" onClick={onOpen}>
        New event
      </Button>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent bgColor="#232323">
          <DrawerCloseButton />
          <DrawerHeader fontSize="md">Create new event</DrawerHeader>

          <DrawerBody>
            <p className="text-gray-400 text-xs text-left mb-5">
              Your event or contest will have a dedicated URL which will be used
              for all event related process.
            </p>
            <div className="space-y-3">
              <FormControl>
                <Input
                  placeholder="Event name"
                  size="md"
                  focusBorderColor="blue.400"
                  variant="filled"
                  autoFocus={true}
                  rounded="md"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <Input
                  placeholder="Organizer name"
                  size="md"
                  focusBorderColor="blue.400"
                  variant="filled"
                  rounded="md"
                  value={organizerName}
                  onChange={(e) => setOrganizerName(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <Input
                  placeholder="Category e.g. Singing, Dancing"
                  size="md"
                  focusBorderColor="blue.400"
                  variant="filled"
                  rounded="md"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                />
              </FormControl>

              <Divider />

              <FormControl>
                <FormLabel size="xs">Event Start Date</FormLabel>
                <Input
                  type="datetime-local"
                  size="md"
                  focusBorderColor="blue.400"
                  variant="filled"
                  rounded="md"
                  value={eventStartDate}
                  onChange={(e) => setEventStartDate(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel size="xs">Event End Date</FormLabel>
                <Input
                  type="datetime-local"
                  size="md"
                  focusBorderColor="blue.400"
                  variant="filled"
                  rounded="md"
                  value={eventEndDate}
                  onChange={(e) => setEventEndDate(e.target.value)}
                />
              </FormControl>

              <Divider />

              <FormControl>
                <Textarea
                  placeholder="Write event description..."
                  size="md"
                  resize="vertical"
                  rounded="md"
                  variant="filled"
                  value={eventDescription}
                  onChange={(e) => setEventDescription(e.target.value)}
                />
              </FormControl>

              <Text fontSize="md">Event URL</Text>

              <InputGroup size="md">
                <InputLeftAddon children="contesco.io/" />
                <Input
                  disabled={true}
                  placeholder="Event URL"
                  rounded="md"
                  variant="filled"
                  value={eventSlug}
                />
                <InputRightElement width="4.5rem" borderRadius="16px">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={() => {}}
                    borderRadius="md"
                  >
                    Copy
                  </Button>
                </InputRightElement>
              </InputGroup>
            </div>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} size="sm" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" size="sm">
              Create
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
