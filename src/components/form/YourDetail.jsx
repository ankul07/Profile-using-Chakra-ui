import React from "react";
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

const YourDetail = () => {
  const headingColor = useColorModeValue("gray.600", "yellow");
  return (
    <VStack
      h="full"
      w="full"
      p={10}
      align="flex-start"
      spacing={10}
      bg={"blue"}
    >
      <VStack spacing={2} align="flex-start">
        <Heading>Yours Details</Heading>
        <Text>If you already have an account, click here to log in.</Text>
      </VStack>

      <SimpleGrid columns={2} columnGap={3} rowGap={4}>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel color={headingColor}>Your Name</FormLabel>
            <Input placeholder="Enter Your Name" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Enter Last Name" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Textarea rows={1} placeholder="Enter Your Address" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="Enter Your City" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select placeholder="Select Country">
              <option value="india">India</option>
              <option value="india">Austrailia</option>
            </Select>
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl>
            <Checkbox>Ship to the billing address.</Checkbox>
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <Button w="full" size={"lg"}>
            Place Item
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default YourDetail;
