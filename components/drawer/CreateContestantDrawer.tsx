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
  FormLabel,
} from "@chakra-ui/react";
import { Plus, Save } from "react-feather";
import CustomToast from "../toast/CustomToast";
import { useHotkeys } from "react-hotkeys-hook";

export default function CreateContestantDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
              <FormControl>
                <Input
                  type="file"
                  placeholder="Photo"
                  backgroundColor="brand.200"
                  textColor="gray.400"
                  focusBorderColor="blue.400"
                  variant="filled"
                  autoFocus={true}
                  rounded="sm"
                />
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
              onClick={() => {}}
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
