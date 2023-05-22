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
import axios from "axios";
import { toast } from "react-hot-toast";
import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/lib/constants";

const ContestantSchema = z.object({
  photo: z
    .any()
    .refine((files) => files?.length == 1, "Field is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp files are accepted."
    ),
});

type ContestantData = z.infer<typeof ContestantSchema>;

const createContestant = async (form: ContestantData) => {
  const response = await axios.post("/api/contestants/create", form);

  if (response.status !== 200) {
    throw new Error("An error occurred");
  }

  return response.data;
};

export default function CreateContestantDrawer() {
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

  const { isLoading, mutate } = useMutation(createContestant, {
    onSuccess: () => {
      reset();
      onClose();
      queryClient.invalidateQueries("contestants");
      toast.success("New contestant created", {
        duration: 10000,
      });
    },
    onError: () => {
      toast.error("An error occurred", {
        duration: 10000,
      });
    },
  });

  const onSubmit: SubmitHandler<ContestantData> = async (
    form: ContestantData
  ) => {
    mutate(form);
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
        size="md"
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
              <FormControl
                className="align-center my-auto"
                isInvalid={errors.photo != null}
              >
                <Input
                  type="file"
                  textAlign="center"
                  alignContent="center"
                  placeholder="Photo"
                  backgroundColor="brand.200"
                  textColor="gray.400"
                  focusBorderColor="blue.400"
                  variant="filled"
                  autoFocus={true}
                  rounded="sm"
                  {...register("photo")}
                />
                <FormHelperText
                  marginTop="1"
                  fontSize="small"
                  textColor="red.400"
                >
                  <>{errors.photo?.message}</>
                </FormHelperText>
              </FormControl>
              <FormControl>
                <Input
                  placeholder="First name"
                  backgroundColor="brand.200"
                  textColor="gray.400"
                  focusBorderColor="blue.400"
                  variant="filled"
                  rounded="sm"
                />
              </FormControl>
              <FormControl>
                <Input
                  placeholder="Middle name"
                  backgroundColor="brand.200"
                  textColor="gray.400"
                  focusBorderColor="blue.400"
                  variant="filled"
                  rounded="sm"
                />
              </FormControl>
              <FormControl>
                <Input
                  placeholder="Last name"
                  backgroundColor="brand.200"
                  textColor="gray.400"
                  focusBorderColor="blue.400"
                  variant="filled"
                  rounded="sm"
                />
              </FormControl>
              <FormControl>
                <Input
                  placeholder="Gender"
                  backgroundColor="brand.200"
                  textColor="gray.400"
                  focusBorderColor="blue.400"
                  variant="filled"
                  rounded="sm"
                />
              </FormControl>
              <FormControl>
                <Input
                  placeholder="Nationality"
                  backgroundColor="brand.200"
                  textColor="gray.400"
                  focusBorderColor="blue.400"
                  variant="filled"
                  rounded="sm"
                />
              </FormControl>
              <FormControl>
                <Input
                  placeholder="Phone number"
                  backgroundColor="brand.200"
                  textColor="gray.400"
                  focusBorderColor="blue.400"
                  variant="filled"
                  rounded="sm"
                />
              </FormControl>
              <FormControl>
                <Input
                  placeholder="Email address"
                  backgroundColor="brand.200"
                  textColor="gray.400"
                  focusBorderColor="blue.400"
                  variant="filled"
                  rounded="sm"
                />
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
