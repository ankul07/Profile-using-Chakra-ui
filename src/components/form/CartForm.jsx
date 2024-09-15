import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import YourDetail from "./YourDetail";
import Cart from "./Cart";

const CartForm = () => {
  return (
    <Container maxW="container.xl" p="10">
      <Flex h="100vh" py="5" direction={{ base: "column", md: "row" }}>
        <YourDetail />
        <Cart />
      </Flex>
    </Container>
  );
};

export default CartForm;
