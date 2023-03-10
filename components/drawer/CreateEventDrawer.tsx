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
  Kbd,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const EventSchema = z
  .object({
    eventName: z
      .string()
      .min(1, "Field is required.")
      .max(25, "Field must contain at most 25 characters."),
    organizerName: z
      .string()
      .min(1, "Field is required.")
      .max(25, "Field must contain at most 25 characters."),
    categoryName: z
      .string()
      .min(1, "Field is required.")
      .max(25, "Field must contain at most 25 characters."),
    eventStartDate: z.string().min(1, "Field is required."),
    eventEndDate: z.string().min(1, "Field is required."),
    eventDescription: z
      .string()
      .min(12, "Field must contain at least 12 characters.")
      .max(144, "Field must contain at most 144 characters."),
  })
  .refine((data) => data.eventStartDate < data.eventEndDate, {
    message: "Event end date must be after start date.",
    path: ["eventEndDate"],
  });

type EventData = z.infer<typeof EventSchema>;

export default function CreateEventDrawer({}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventData>({
    resolver: zodResolver(EventSchema),
  });

  const onSubmit: SubmitHandler<EventData> = (data: EventData) =>
    console.log(data);

  return (
    <>
      <Button size="sm" colorScheme="blue" onClick={onOpen}>
        New event
      </Button>

      <Drawer
        onEsc={onClose}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent overflowY="scroll" bgColor="#232323">
          <DrawerCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <DrawerHeader fontSize="md">Create new event</DrawerHeader>
            <DrawerBody>
              <p className="text-gray-400 text-xs text-left mb-5">
                Your event or contest will have a dedicated URL which will be
                used for all event related process.
              </p>
              <p className="hidden lg:block text-gray-400 text-xs text-left mb-5">
                Press <Kbd>Esc</Kbd> key to close the form.
              </p>
              <div className="space-y-3">
                <FormControl isInvalid={errors.eventName != null}>
                  <Input
                    placeholder="Event name"
                    size="sm"
                    focusBorderColor="blue.400"
                    variant="filled"
                    autoFocus={true}
                    rounded="md"
                    {...register("eventName")}
                  />
                  <FormHelperText
                    marginTop="1"
                    fontSize="small"
                    textColor="red.400"
                  >
                    {errors.eventName?.message}
                  </FormHelperText>
                </FormControl>

                <FormControl isInvalid={errors.organizerName != null}>
                  <Input
                    placeholder="Organizer name"
                    size="sm"
                    focusBorderColor="blue.400"
                    variant="filled"
                    rounded="md"
                    {...register("organizerName")}
                  />
                  <FormHelperText
                    marginTop="1"
                    fontSize="small"
                    textColor="red.500"
                  >
                    {errors.organizerName?.message}
                  </FormHelperText>
                </FormControl>

                <FormControl isInvalid={errors.categoryName != null}>
                  <Input
                    placeholder="Category e.g. Singing, Dancing"
                    size="sm"
                    focusBorderColor="blue.400"
                    variant="filled"
                    rounded="md"
                    {...register("categoryName")}
                  />
                  <FormHelperText
                    marginTop="1"
                    fontSize="small"
                    textColor="red.500"
                  >
                    {errors.categoryName?.message}
                  </FormHelperText>
                </FormControl>

                <Divider />

                <FormControl isInvalid={errors.eventStartDate != null}>
                  <FormLabel size="xs">Event Start Date</FormLabel>
                  <Input
                    type="datetime-local"
                    size="sm"
                    focusBorderColor="blue.400"
                    variant="filled"
                    rounded="md"
                    {...register("eventStartDate")}
                  />
                  <FormHelperText
                    marginTop="1"
                    fontSize="small"
                    textColor="red.500"
                  >
                    {errors.eventStartDate?.message}
                  </FormHelperText>
                </FormControl>

                <FormControl isInvalid={errors.eventEndDate != null}>
                  <FormLabel size="xs">Event End Date</FormLabel>
                  <Input
                    type="datetime-local"
                    size="sm"
                    focusBorderColor="blue.400"
                    variant="filled"
                    rounded="md"
                    {...register("eventEndDate")}
                  />
                  <FormHelperText
                    marginTop="1"
                    fontSize="small"
                    textColor="red.500"
                  >
                    {errors.eventEndDate?.message}
                  </FormHelperText>
                </FormControl>

                <Divider />

                <FormControl isInvalid={errors.eventDescription != null}>
                  <Textarea
                    placeholder="Write event description..."
                    size="sm"
                    resize="vertical"
                    rounded="md"
                    variant="filled"
                    {...register("eventDescription")}
                  />
                  <FormHelperText
                    marginTop="1"
                    fontSize="small"
                    textColor="red.500"
                  >
                    {errors.eventDescription?.message}
                  </FormHelperText>
                </FormControl>
              </div>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} size="sm" onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" size="sm" type="submit">
                Create
              </Button>
            </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
    </>
  );
}
