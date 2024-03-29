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
  FormControl,
  FormHelperText,
  Input,
  Kbd,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "react-query";
import { Plus, Save } from "react-feather";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";
import { motion } from "framer-motion";
import { createEvent } from "@/src/api";

const EventSchema = z.object({
  eventName: z
    .string()
    .min(6, "Field must contain at least 6 characters.")
    .max(25, "Field must contain at most 25 characters."),
  organizerName: z
    .string()
    .min(6, "Field must contain at least 6 characters.")
    .max(25, "Field must contain at most 25 characters."),
  categoryName: z
    .string()
    .min(6, "Field must contain at least 6 characters.")
    .max(25, "Field must contain at most 25 characters."),
  eventDescription: z
    .string()
    .min(12, "Field must contain at least 12 characters.")
    .max(280, "Field must contain at most 280 characters."),
});

type EventData = z.infer<typeof EventSchema>;

export default function CreateEventDrawer() {
  const queryClient = useQueryClient();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EventData>({
    resolver: zodResolver(EventSchema),
  });

  const { isLoading, mutate } = useMutation(createEvent);

  const onSubmit: SubmitHandler<EventData> = async (form: EventData) => {
    mutate(
      {
        input: {
          name: form.eventName,
          organizer: form.organizerName,
          category: form.categoryName,
          description: form.eventDescription,
        },
      },
      {
        onSuccess: () => {
          reset();
          onClose();
          queryClient.invalidateQueries("events");
          toast.success("New event created");
        },
        onError: () => {
          toast.error("An error occurred");
        },
      }
    );
  };

  return (
    <>
      <motion.div whileHover={{ scale: 1.03 }}>
        <Button
          leftIcon={<Plus size="15" />}
          size="sm"
          rounded="sm"
          colorScheme="green"
          onClick={onOpen}
        >
          New event
        </Button>
      </motion.div>

      <Drawer
        onEsc={onClose}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="sm"
        colorScheme="brand.100"
      >
        <DrawerOverlay />
        <DrawerContent overflowY="scroll" backgroundColor="brand.100">
          <DrawerCloseButton color="white" />
          <DrawerHeader fontSize="md" color="white">
            Create new event
          </DrawerHeader>
          <DrawerBody overflowY="scroll">
            <p className="text-gray-400 text-xs text-left mb-5">
              Your event or contest will have a dedicated URL which will be used
              for all event related process.
            </p>
            <p className="hidden lg:block text-gray-400 text-xs text-left mb-5">
              Press <Kbd>Esc</Kbd> key to close the form.
            </p>
            <div className="space-y-3">
              <FormControl isInvalid={errors.eventName != null}>
                <Input
                  placeholder="Event name"
                  backgroundColor="brand.200"
                  textColor="gray.400"
                  focusBorderColor="blue.400"
                  variant="filled"
                  autoFocus={true}
                  rounded="sm"
                  size="sm"
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
                  backgroundColor="brand.200"
                  textColor="gray.400"
                  focusBorderColor="blue.400"
                  variant="filled"
                  rounded="sm"
                  size="sm"
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
                  backgroundColor="brand.200"
                  textColor="gray.400"
                  focusBorderColor="blue.400"
                  variant="filled"
                  rounded="sm"
                  size="sm"
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

              <FormControl isInvalid={errors.eventDescription != null}>
                <Textarea
                  placeholder="Write event description..."
                  backgroundColor="brand.200"
                  textColor="gray.400"
                  resize="vertical"
                  rounded="sm"
                  variant="filled"
                  size="sm"
                  rows={5}
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
            <Button
              rounded="sm"
              textColor="red.500"
              mr={3}
              size="sm"
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              leftIcon={<Save size="15" />}
              colorScheme="green"
              rounded="sm"
              size="sm"
              onClick={handleSubmit(onSubmit)}
              isLoading={isLoading}
              loadingText="Saving..."
            >
              Create Event
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
