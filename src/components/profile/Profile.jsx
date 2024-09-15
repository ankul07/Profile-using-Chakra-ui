import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  Heading,
  List,
  ListItem,
  Text,
  UnorderedList,
  VStack,
  WrapItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import UserDetailed from "./UserDetailed";
import UserRegister from "./UserRegister";

const Profile = () => {
  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
  };

  const handleCancelClick = () => {
    setEditMode(false);
  };
  return (
    <>
      <Container maxW={"container.lg"} pt={20}>
        <HStack
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading as="h2" size="md">
            My Profile
          </Heading>
          {editMode ? (
            <HStack spacing={3}>
              <Button onClick={handleSaveClick}>Save</Button>
              <Button onClick={handleCancelClick}>Cancel</Button>
            </HStack>
          ) : (
            <Button onClick={handleEditClick}>
              <i className="fa fa-edit"></i>&nbsp;Edit
            </Button>
          )}
        </HStack>
        <Flex
          w={"100%"}
          py={2}
          justifyContent={"space-between"}
          gap={5}
          direction={{ base: "column", md: "row" }}
        >
          <UserDetailed />
          <UserRegister isEditMode={editMode} />
        </Flex>
      </Container>
    </>
  );
};

export default Profile;
