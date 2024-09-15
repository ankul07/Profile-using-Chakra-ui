import {
  Box,
  Flex,
  IconButton,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  // Link,
  useDisclosure,
} from "@chakra-ui/react";
import {
  FaBars,
  FaHome,
  FaChartBar,
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaUser,
  FaInfoCircle,
  FaHeart,
  FaBookmark,
} from "react-icons/fa";
import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        as="nav"
        position="fixed"
        top={0}
        left={0}
        width="100%"
        height="70px"
        alignItems="center"
        backgroundColor="white"
        boxShadow="sm"
        paddingX={6}
        justifyContent="space-between"
        zIndex={999}
      >
        <Flex alignItems="center">
          <IconButton
            icon={<FaBars />}
            aria-label="Menu"
            fontSize="24px"
            variant="unstyled"
            onClick={onOpen}
            marginRight={4}
          />
          <Link style={{ fontWeight: "700", fontSize: "1.3rem" }} to="/">
            Ankulcode
          </Link>
        </Flex>
      </Flex>

      {/* Sidebar */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody display={"flex"} flexDirection={"column"}>
            <VStack align="start" spacing={5} marginTop={10}>
              <Link to="#" onClick={onClose}>
                <Flex align="center">
                  <FaHome fontSize={"larger"} />
                  <Text marginLeft={4} fontSize={"larger"}>
                    Dashboard
                  </Text>
                </Flex>
              </Link>
              <Link to="#" onClick={onClose}>
                <Flex align="center">
                  <FaChartBar fontSize={"larger"} />
                  <Text marginLeft={4} fontSize={"larger"}>
                    Revenue
                  </Text>
                </Flex>
              </Link>
              <Link to="#" onClick={onClose}>
                <Flex align="center">
                  <FaBell fontSize={"larger"} />
                  <Text marginLeft={4} fontSize={"larger"}>
                    Notifications
                  </Text>
                </Flex>
              </Link>

              <Link to="/profile" onClick={onClose}>
                <Flex align="center">
                  <FaUser fontSize={"larger"} />
                  <Text marginLeft={4} fontSize={"larger"}>
                    Profile
                  </Text>
                </Flex>
              </Link>

              <Link to="#" onClick={onClose}>
                <Flex align="center">
                  <FaHeart fontSize={"larger"} />
                  <Text marginLeft={4} fontSize={"larger"}>
                    Likes
                  </Text>
                </Flex>
              </Link>

              <Link to="#" onClick={onClose}>
                <Flex align="center">
                  <FaBookmark fontSize={"larger"} />
                  <Text marginLeft={4} fontSize={"larger"}>
                    Bookmarks
                  </Text>
                </Flex>
              </Link>
              <Link to="#" onClick={onClose}>
                <Flex align="center">
                  <FaInfoCircle fontSize={"larger"} />
                  <Text marginLeft={4} fontSize={"larger"}>
                    Help
                  </Text>
                </Flex>
              </Link>
              {/* Add more menu items */}
            </VStack>

            <VStack align="start" spacing={5} marginTop="auto">
              <Link to="/setting" onClick={onClose}>
                <Flex align="center">
                  <FaCog fontSize={"larger"} />
                  <Text marginLeft={4} fontSize={"larger"}>
                    Settings
                  </Text>
                </Flex>
              </Link>
              <Link to="#" onClick={onClose}>
                <Flex align="center">
                  <FaSignOutAlt fontSize={"larger"} />
                  <Text marginLeft={4} fontSize={"larger"}>
                    Logout
                  </Text>
                </Flex>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
