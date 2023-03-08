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
  InputRightElement,
  Text,
  Textarea,
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
              <FormControl>
                <Input
                  placeholder="Event name"
                  size="md"
                  focusBorderColor="blue.400"
                  variant="filled"
                  autoFocus={true}
                  rounded="md"
                />
              </FormControl>

              <FormControl>
                <Input
                  placeholder="Organizer name"
                  size="md"
                  focusBorderColor="blue.400"
                  variant="filled"
                  rounded="md"
                />
              </FormControl>

              <FormControl>
                <Input
                  placeholder="Category"
                  size="md"
                  focusBorderColor="blue.400"
                  variant="filled"
                  rounded="md"
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
                />
              </FormControl>

              <Text fontSize="md">Event URL</Text>
              <InputGroup size="md">
                <Input
                  disabled={true}
                  placeholder="Event URL"
                  rounded="md"
                  variant="filled"
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
