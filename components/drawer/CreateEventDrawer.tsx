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
  FormLabel,
  Input,
  Kbd,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Plus, Save } from "react-feather";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";
import CustomToast from "../toast/CustomToast";

const EventSchema = z
  .object({
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
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EventData>({
    resolver: zodResolver(EventSchema),
  });

  const onSubmit: SubmitHandler<EventData> = async (form: EventData) => {
    setLoading(true);
    try {
      const response = await fetch("/api/event/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.status === 200) {
        reset();
        onClose();
        toast.success("New event created", {
          duration: 10000,
        });
      } else {
        toast.error("An error occurred", {
          duration: 10000,
        });
      }
    } catch (error) {
      toast.error("An error occurred", {
        duration: 10000,
      });
    }
    setLoading(false);
  };

  return (
    <>
      <CustomToast />
      <Button
        leftIcon={<Plus size="15" />}
        size="sm"
        rounded="sm"
        colorScheme="green"
        onClick={onOpen}
      >
        New event
      </Button>

      <Drawer
        onEsc={onClose}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="md"
        colorScheme="brand.100"
      >
        <DrawerOverlay />
        <DrawerContent overflowY="scroll" backgroundColor="brand.100">
          <DrawerCloseButton />
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
                  size="sm"
                  focusBorderColor="blue.400"
                  variant="filled"
                  autoFocus={true}
                  rounded="sm"
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
                  size="sm"
                  focusBorderColor="blue.400"
                  variant="filled"
                  rounded="sm"
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
                  size="sm"
                  focusBorderColor="blue.400"
                  variant="filled"
                  rounded="sm"
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

              <FormControl isInvalid={errors.eventStartDate != null}>
                <FormLabel
                  fontSize="13"
                  textColor="gray.400"
                  fontWeight="normal"
                >
                  Event Start Date
                </FormLabel>
                <Input
                  type="datetime-local"
                  backgroundColor="brand.200"
                  textColor="gray.500"
                  size="sm"
                  focusBorderColor="blue.400"
                  variant="filled"
                  rounded="sm"
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
                <FormLabel
                  fontSize="13"
                  textColor="gray.400"
                  fontWeight="normal"
                >
                  Event End Date
                </FormLabel>
                <Input
                  type="datetime-local"
                  backgroundColor="brand.200"
                  textColor="gray.500"
                  size="sm"
                  focusBorderColor="blue.400"
                  variant="filled"
                  rounded="sm"
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

              <FormControl isInvalid={errors.eventDescription != null}>
                <Textarea
                  placeholder="Write event description..."
                  backgroundColor="brand.200"
                  size="sm"
                  resize="vertical"
                  rounded="sm"
                  variant="filled"
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
              variant="outline"
              rounded="sm"
              colorScheme="red"
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
              isLoading={loading}
            >
              Create
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
