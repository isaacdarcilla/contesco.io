"use client";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

export default function CreateEventDrawer({}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button size="sm" colorScheme="blue" onClick={onOpen}>
        New event
      </Button>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize="md">Create new event</DrawerHeader>

          <DrawerBody>
            <p className="text-gray-400 text-xs text-left mb-5">
              Your event or contest will have a dedicated URL which will be used
              for all event related process.
            </p>
            <div className="space-y-3">
              <Input
                placeholder="Event name"
                size="sm"
                focusBorderColor="blue.400"
                variant="filled"
                autoFocus={true}
                rounded="md"
              />

              <Input
                placeholder="Organizer name"
                size="sm"
                focusBorderColor="blue.400"
                variant="filled"
                rounded="md"
              />
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
