import React from "react";
import {
  AspectRatio,
  Button,
  Divider,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const headingColor = useColorModeValue("gray.600", "red");
  return (
    <VStack
      bg={bgColor}
      h="full"
      w="full"
      p={10}
      align="flex-start"
      spacing={10}
    >
      <VStack alignItems={"flex-start"} spacing={3}>
        <Heading size={"2xl"}>Your Carts</Heading>
        <Text>
          If the price in to hard on your eyes,{" "}
          <Button
            variant={"outline"}
            colorScheme="black"
            onClick={toggleColorMode}
          >
            try Changing the theme.
          </Button>
        </Text>
      </VStack>

      <HStack spacing={6} alignItems={"center"} w="full">
        <AspectRatio ratio={1} w={24}>
          <Image src="/react.svg" alt="logo" />
        </AspectRatio>
        <Stack
          spacing={0}
          w={"full"}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <VStack w="full" spacing={0} alignItems={"flex-start"}>
            <Heading size={"md"}>Penny Boards</Heading>
            <Text color={"gray.600"}>PNY8765OP</Text>
          </VStack>
          <Heading size={"sm"} textAlign={"end"}>
            $199.00
          </Heading>
        </Stack>
      </HStack>

      <VStack spacing={4} alignItems={"stretch"} w={"full"}>
        <HStack justifyContent={"space-between"}>
          <Text color={headingColor}>SubTotal</Text>
          <Heading size={"sm"}>$199.00</Heading>
        </HStack>

        <HStack justifyContent={"space-between"}>
          <Text color={headingColor}>Shipping</Text>
          <Heading size={"sm"}>$19.00</Heading>
        </HStack>

        <HStack justifyContent={"space-between"}>
          <Text color={headingColor}>Taxex (estimated)</Text>
          <Heading size={"sm"}>$23.00</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent={"space-between"} w="full">
        <Text color={headingColor}>Total</Text>
        <Heading size={"lg"}>$162.00</Heading>
      </HStack>
    </VStack>
  );
};

export default Cart;
