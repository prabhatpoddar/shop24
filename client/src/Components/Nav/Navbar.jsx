import { useState } from "react";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,

  Center,

} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  Search2Icon,

} from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { Blocks } from "react-loader-spinner";
import NavbarPopUpComponents from "./NavComponent/NavbarPopUpComponents";
import style from "./NavComponent/Navbar.module.css";

const navLI = ["Men", "Women", "kids", "Home Living", "Studio"];



const NavLink = ({ children }) => (
  <Box
    fontFamily={"sans-serif"}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "underline",
      color: "red",
    }}
    fontSize="sm"
    fontWeight={500}
    href={"#"}
    textTransform="uppercase"
  >
    {children}
  </Box>
);

function AdminNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [loading, setLoading] = useState(false);
  const [howerState, setHowerState] = useState("");

  const navigate = useNavigate();
  const hoverHandler = (type) => {
    setHowerState(type);
  };



  return (
    <>
      <Box
        padding="10px"
        boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px"
        box
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={10} alignItems={"center"}>
            <Box marginLeft={"50px"}>
              <Link to={"/"}>
                <Image
                  src="https://user-images.githubusercontent.com/98205449/213233396-1caf5409-150c-4862-bb2b-03fbd8e3bbf5.jpg"
                  width={20}
                  p="1.5"
                />
              </Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >

              <p
                onClick={() => navigate("/men")}
                onMouseOver={() => hoverHandler("MEN")}
              >
                MEN{" "}
              </p>
              <p
                onClick={() => navigate("/women")}
                onMouseEnter={() => hoverHandler("WOMEN")}
              >
                WOMEN
              </p>
              <p
                onClick={() => navigate("/kids")}
                onMouseEnter={() => hoverHandler("KIDS")}
              >
                KIDS
              </p>
              <p
                onClick={() => navigate("/hotel")}
                onMouseEnter={() => hoverHandler("HOME")}
              >
                HOME & LIVING
              </p>
              <p
                onClick={() => navigate("/")}
                onMouseEnter={() => hoverHandler("BEAUTY")}
              >
                BEAUTY
              </p>
              <p
                onClick={() => navigate("/")}
                onMouseEnter={() => hoverHandler("STUDIO")}
              >
                STUDIO
              </p>
              {/* </Subnav> */}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} gap={{ lg: "3rem" }}>
            <Box display={{ base: "none", xl: "flex", lg: "flex" }}>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Search2Icon color="gray.300" />}
                />
                <Input
                  type="text"
                  placeholder="Search for products"
                  width={{ lg: "200px", "2xl": "500px" }}
                />
              </InputGroup>
            </Box>


            <div
              className={style.content}
              onMouseLeave={() => setHowerState("")}
            >
              {howerState && <NavbarPopUpComponents type={howerState} />}
            </div>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack
              as={"nav"}
              spacing={4}
              alignContent="center"
              alignItems={"center"}
            >
              {navLI.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      {loading && (
        <Center>
          <Blocks
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
          />
        </Center>
      )}
    </>
  );
}

export default AdminNavbar;
