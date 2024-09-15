import {
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Setting = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowOldPassword = () => setShowOldPassword(!showOldPassword);
  const handleShowNewPassword = () => setShowNewPassword(!showNewPassword);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <Container maxW="container.lg" mt={20}>
      <Heading as="h2" size="lg">
        Account Settings
      </Heading>
      <Divider mt={10} borderColor="gray.300" />

      <VStack w="full" maxW="md" alignItems="start" mt={5} spacing={5}>
        <Heading as="h3" size="md">
          Change Your Password
        </Heading>

        <FormControl mt={5} position="relative">
          <FormLabel>Old Password</FormLabel>
          <Input
            type={showOldPassword ? "text" : "password"}
            placeholder="Enter your old password"
          />
          <Button
            position="absolute"
            right={0}
            onClick={handleShowOldPassword}
            aria-label={showOldPassword ? "Hide password" : "Show password"}
          >
            {showOldPassword ? <FaEyeSlash /> : <FaEye />}
          </Button>
        </FormControl>

        <FormControl>
          <FormLabel>New Password</FormLabel>
          <Input
            type={showNewPassword ? "text" : "password"}
            placeholder="Enter your new password"
          />
          <Button
            position="absolute"
            right={0}
            onClick={handleShowNewPassword}
            aria-label={showNewPassword ? "Hide password" : "Show password"}
          >
            {showNewPassword ? <FaEyeSlash /> : <FaEye />}
          </Button>
        </FormControl>

        <FormControl>
          <FormLabel>Confirm New Password</FormLabel>
          <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm your new password"
          />
          <Button
            position="absolute"
            right={0}
            onClick={handleShowConfirmPassword}
            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </Button>
        </FormControl>

        <FormControl>
          <FormLabel>Log out options</FormLabel>
          <RadioGroup>
            <Stack spacing={1}>
              <Radio value="option1">Log me out of other devices</Radio>
              <Radio value="option2">Keep me logged in</Radio>
              {/* Add more options as needed */}
            </Stack>
          </RadioGroup>
        </FormControl>

        <Button
          bg={"#002338"}
          color={"#fff"}
          _hover={{
            color: "#000",
            bg: "#fff",
            border: "1px solid #000",
          }}
        >
          Change Password
        </Button>
      </VStack>
    </Container>
  );
};

export default Setting;
