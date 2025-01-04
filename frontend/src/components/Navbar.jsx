import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router";
import { FaRegPlusSquare as PlusIcon } from "react-icons/fa";
import { useColorMode, useColorModeValue } from "./ui/color-mode";
import { MdDarkMode as DarkIcon } from "react-icons/md";
import { MdOutlineDarkMode as LightIcon } from "react-icons/md";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box w={"full"} bgColor={useColorModeValue("gray.100", "gray.900")}>
        <Container
          maxW={"1140px"}
          px={4}
          bgColor={useColorModeValue("gray.100", "gray.900")}
        >
          <Flex
            flexDir={{ base: "column", sm: "row" }}
            height={"16"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Link to={"/"}>
              <Box display={"flex"} flexDirection={"row"} justifyContent={"center"} spaceX={0} alignItems={"center"} >
                <Image src="StoreImage.png" alt="storeImage" w={150} />
              </Box>
            </Link>
            <HStack spaceX={2} alignItems={"center"}>
              <Link to={"/create"}>
                <Button bgColor={"transparent"} color={"gray.600"}>
                  <PlusIcon fontSize={20} />
                </Button>
              </Link>
              <Button
                bgColor={"transparent"}
                color={"gray.600"}
                onClick={toggleColorMode}
              >
                {colorMode === "light" ? (
                  <DarkIcon fontSize={20} />
                ) : (
                  <LightIcon fontSize={20} />
                )}
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
