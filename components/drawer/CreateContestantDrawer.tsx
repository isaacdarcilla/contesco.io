import {
  MenuItem,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
  useDisclosure,
  DrawerFooter,
  Button,
  Kbd,
  Input,
  FormControl,
  FormHelperText,
} from "@chakra-ui/react";
import { Plus, Save } from "react-feather";
import CustomToast from "../toast/CustomToast";
import { useHotkeys } from "react-hotkeys-hook";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-hot-toast";
import { createContestant } from "@/src/api";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const ContestantSchema = z.object({
  //  photo: z
  //    .any()
  //    .refine((files) => files?.length == 1, "Field is required.")
  //    .refine(
  //      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
  //      `Max file size is 5MB.`
  //    )
  //    .refine(
  //      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
  //      "Only .jpg, .jpeg, .png and .webp files are accepted."
  //    ),
  firstName: z
    .string()
    .min(2, "Field must contain at least 2 characters.")
    .max(25, "Field must contain at most 25 characters."),
  middleName: z.string().max(25, "Field must contain at most 25 characters."),
  lastName: z
    .string()
    .min(2, "Field must contain at least 2 characters.")
    .max(25, "Field must contain at most 25 characters."),
  gender: z
    .string()
    .min(2, "Field must contain at least 2 characters.")
    .max(25, "Field must contain at most 25 characters."),
  age: z
    .number()
    .min(1, "Field must contain at least 1 character.")
    .max(25, "Field must contain at most 25 characters."),
  nationality: z
    .string()
    .min(2, "Field must contain at least 2 characters.")
    .max(25, "Field must contain at most 25 characters."),
  phoneNumber: z
    .string()
    .min(11, "Field must contain at least 11 characters.")
    .regex(phoneRegex, "Field must be a phone number."),
  email: z
    .string()
    .min(2, "Field must contain at least 2 characters.")
    .max(25, "Field must contain at most 25 characters."),
});

type ContestantData = z.infer<typeof ContestantSchema>;

export default function CreateContestantDrawer({
  eventId,
}: {
  eventId: string;
}) {
  const queryClient = useQueryClient();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContestantData>({
    resolver: zodResolver(ContestantSchema),
  });

  const { isLoading, mutate } = useMutation(createContestant);

  const onSubmit: SubmitHandler<ContestantData> = async (
    form: ContestantData
  ) => {
    mutate(
      {
        input: {
          firstName: form.firstName,
          middleName: form.middleName,
          lastName: form.lastName,
          age: parseInt(form.age),
          email: form.email,
          gender: form.gender,
          nationality: form.nationality,
          phoneNumber: form.phoneNumber,
          eventId: eventId,
        },
      },
      {
        onSuccess: () => {
          reset();
          onClose();
          queryClient.invalidateQueries("contestants");
          toast.success("New contestant created");
        },
        onError: () => {
          toast.error("An error occurred");
        },
      }
    );
  };

  useHotkeys("shift+c", () => onOpen());

  return (
    <div>
      <CustomToast />
      <MenuItem
        bgColor="brand.100"
        textColor="white"
        fontWeight="bold"
        fontSize={13}
        icon={<Plus size={15} />}
        command="Shift + C"
        onClick={onOpen}
      >
        New Contestant
      </MenuItem>

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
            Create new contestant
          </DrawerHeader>
          <DrawerBody overflowY="scroll">
            <p className="text-gray-400 text-xs text-left mb-5">
              Create new contestants for your event or contest. You can update
              the details of a contestant anytime.
            </p>
            <p className="hidden lg:block text-gray-400 text-xs text-left mb-5">
              Press <Kbd>Shift + C</Kbd> to open the form and press{" "}
              <Kbd>Esc</Kbd> key to close the form.
            </p>
            <div className="space-y-3">
              {/*<FormControl*/}
              {/*  className="align-center my-auto"*/}
              {/*  isInvalid={errors.photo != null}*/}
              {/*>*/}
              {/*  <Input*/}
              {/*    type="file"*/}
              {/*    textAlign="center"*/}
              {/*    alignContent="center"*/}
              {/*    placeholder="Photo"*/}
              {/*    backgroundColor="brand.200"*/}
              {/*    textColor="gray.400"*/}
              {/*    focusBorderColor="blue.400"*/}
              {/*    variant="filled"*/}
              {/*    autoFocus={true}*/}
              {/*    rounded="sm"*/}
              {/*    size="sm"*/}
              {/*    {...register("photo")}*/}
              {/*  />*/}
              {/*  <FormHelperText*/}
              {/*    marginTop="1"*/}
              {/*    fontSize="small"*/}
              {/*    textColor="red.400"*/}
              {/*  >*/}
              {/*    <>{errors.photo?.message}</>*/}
              {/*  </FormHelperText>*/}
              {/*</FormControl>*/}
              <FormControl isInvalid={errors.firstName != null}>
                <Input
                  placeholder="First name"
                  backgroundColor="brand.200"
                  textColor="gray.400"
                  focusBorderColor="blue.400"
                  variant="filled"
                  rounded="sm"
                  size="sm"
                  {...register("firstName")}
                />
                <FormHelperText
                  marginTop="1"
                  fontSize="small"
                  textColor="red.400"
                >
                  <>{errors.firstName?.message}</>
                </FormHelperText>
              </FormControl>
              <FormControl isInvalid={errors.middleName != null}>
                <Input
                  placeholder="Middle name"
                  backgroundColor="brand.200"
                  textColor="gray.400"
                  focusBorderColor="blue.400"
                  variant="filled"
                  rounded="sm"
                  size="sm"
                  {...register("middleName")}
                />
                <FormHelperText
                  marginTop="1"
                  fontSize="small"
                  textColor="red.400"
                >
                  <>{errors.middleName?.message}</>
                </FormHelperText>
              </FormControl>
              <FormControl isInvalid={errors.lastName != null}>
                <Input
                  placeholder="Last name"
                  backgroundColor="brand.200"
                  textColor="gray.400"
                  focusBorderColor="blue.400"
                  variant="filled"
                  rounded="sm"
                  size="sm"
                  {...register("lastName")}
                />
                <FormHelperText
                  marginTop="1"
                  fontSize="small"
                  textColor="red.400"
                >
                  <>{errors.lastName?.message}</>
                </FormHelperText>
              </FormControl>
              <FormControl isInvalid={errors.age != null}>
                <Input
                  placeholder="Age"
                  backgroundColor="brand.200"
                  textColor="gray.400"
                  focusBorderColor="blue.400"
                  variant="filled"
                  rounded="sm"
                  size="sm"
                  {...register("age")}
                />
                <FormHelperText
                  marginTop="1"
                  fontSize="small"
                  textColor="red.400"
                >
                  <>{errors.age?.message}</>
                </FormHelperText>
              </FormControl>
              <FormControl isInvalid={errors.gender != null}>
                <Input
                  placeholder="Gender"
                  backgroundColor="brand.200"
                  textColor="gray.400"
                  focusBorderColor="blue.400"
                  variant="filled"
                  rounded="sm"
                  size="sm"
                  {...register("gender")}
                />
                <FormHelperText
                  marginTop="1"
                  fontSize="small"
                  textColor="red.400"
                >
                  <>{errors.gender?.message}</>
                </FormHelperText>
              </FormControl>
              <FormControl isInvalid={errors.nationality != null}>
                <Input
                  placeholder="Nationality"
                  backgroundColor="brand.200"
                  textColor="gray.400"
                  focusBorderColor="blue.400"
                  variant="filled"
                  rounded="sm"
                  size="sm"
                  {...register("nationality")}
                />
                <FormHelperText
                  marginTop="1"
                  fontSize="small"
                  textColor="red.400"
                >
                  <>{errors.nationality?.message}</>
                </FormHelperText>
              </FormControl>
              <FormControl isInvalid={errors.phoneNumber != null}>
                <Input
                  placeholder="Phone number"
                  backgroundColor="brand.200"
                  textColor="gray.400"
                  focusBorderColor="blue.400"
                  variant="filled"
                  rounded="sm"
                  size="sm"
                  {...register("phoneNumber")}
                />
                <FormHelperText
                  marginTop="1"
                  fontSize="small"
                  textColor="red.400"
                >
                  <>{errors.phoneNumber?.message}</>
                </FormHelperText>
              </FormControl>
              <FormControl isInvalid={errors.email != null}>
                <Input
                  placeholder="Email address"
                  backgroundColor="brand.200"
                  textColor="gray.400"
                  focusBorderColor="blue.400"
                  variant="filled"
                  rounded="sm"
                  size="sm"
                  {...register("email")}
                />
                <FormHelperText
                  marginTop="1"
                  fontSize="small"
                  textColor="red.400"
                >
                  <>{errors.email?.message}</>
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
              Create Contestant
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
