"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Filter } from "react-feather";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function EventFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [direction, setDirection] = useState(
    searchParams?.get("direction") ?? "asc"
  );
  const [column, setColumn] = useState(
    searchParams?.get("column") ?? "createdAt"
  );

  const handleFilter = async () => {
    router.push(`/dashboard?column=${column}&direction=${direction}`);
  };

  const handleClear = async () => {
    router.push("/dashboard");
  };

  return (
    <div>
      <Button
        size="sm"
        onClick={onOpen}
        colorScheme="blue"
        variant="link"
        leftIcon={<Filter size={15} />}
      >
        Filter
      </Button>

      <Modal colorScheme="brand.100" onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent bgColor="brand.100">
          <ModalHeader color="white">Filter Events</ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody>
            <RadioGroup
              onChange={(e: any) => {
                setDirection(e);
              }}
              name="direction"
              color="white"
              defaultValue={direction}
            >
              <Stack>
                <Text fontWeight="bold">By Direction</Text>
                <Radio value="asc" size="md" colorScheme="green">
                  Ascending
                </Radio>
                <Radio value="desc" size="md" colorScheme="green">
                  Descending
                </Radio>
              </Stack>
            </RadioGroup>
            <RadioGroup
              onChange={(e: any) => {
                setColumn(e);
              }}
              name="column"
              color="white"
              defaultValue={column}
            >
              <Stack className="mt-4">
                <Text fontWeight="bold">By Column</Text>
                <Radio value="name" size="md" colorScheme="green">
                  Name
                </Radio>
                <Radio value="createdAt" size="md" colorScheme="green">
                  Date Created
                </Radio>
                <Radio value="updatedAt" size="md" colorScheme="green">
                  Date Updated
                </Radio>
              </Stack>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              className="mx-2"
              size="sm"
              textColor="red.500"
              rounded="sm"
              onClick={() => {
                onClose();
                handleClear();
              }}
            >
              Clear
            </Button>
            <Button
              size="sm"
              rounded="sm"
              colorScheme="green"
              onClick={() => {
                onClose();
                handleFilter();
              }}
            >
              Apply
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
