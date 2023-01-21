import {
  Box,
  Flex,
  Grid,
  Image,
  Button,
  SimpleGrid,
  Text,
  Spacer,
  Spinner,
  Checkbox,
  MenuList,
  Menu,
  CheckboxGroup,
  useDisclosure,
  Container,
} from "@chakra-ui/react";

import axios from "axios";
import { AiO, AiOutlineDown } from "react-icons/ai";
import { BsHeart, BsImage } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import { Pagination } from "antd";
import AdminNavbar from "../../Components/Nav/Navbar";
// import Navbar from "../../components/Navbar/MainNavbar";

const Beauty = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [Hover, setHover] = useState(false);
  const [CrouselBox, setCrouselBox] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Loading, setLoading] = useState(false);

  console.log(data);
  async function getData(page, value) {
    // console.log("30", page);
    await fetch(
      `https://ill-ruby-frog-ring.cyclic.app/beauty?page=${page}&limit=50`
    )
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setData(res);
        console.log(res);
      });
  }

  useEffect(() => {
    getData(page);
  }, [page]);

  const onChange = (page) => {
    console.log(page);
    setPage(page);
  };

  return (
    <>
      <AdminNavbar />
      <Box width={"95%"} gap="10px" m={"auto"} bg="white">
        <Box p="10px" textAlign={"start"}>
          <Text color="black">Home/ Personal Care</Text>
        </Box>
        <Box p="10px" textAlign={"start"}>
          <Text as="b" color="black">
            Page Data - {data.length} items
          </Text>
        </Box>

        <Flex display={["none", "flex", "Flex"]}>
          <Box w="20%" p="3">
            <Flex p="10px">
              <Text color={"black"} as="b">
                FILTER
              </Text>
              <Spacer />
              {/* <Text color="red">CLEAR ALL</Text> */}
            </Flex>
          </Box>
          <Menu>
            <i class="fa-solid fa-chevron-down">
              <Flex>
                <Box>
                  <Text color="black">Filter</Text>
                </Box>
                <Box pl="3px" mt="6px">
                  <AiOutlineDown />
                </Box>
              </Flex>
            </i>
            <MenuList opacity={"none"} p="15px">
              <CheckboxGroup>
                <SimpleGrid columns={3} spacing={5}>
                  <Box>
                    <Checkbox
                      colorScheme="red"
                      defaultChecked={false}
                    ></Checkbox>
                  </Box>
                </SimpleGrid>
              </CheckboxGroup>
            </MenuList>
          </Menu>
        </Flex>

        <Flex>
          {/* <FilterBox /> */}
          {Loading || data.length == 0 ? (
            <Box m="auto">
              {" "}
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Box>
          ) : (
            <Box w="80%" m="auto">
              <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={10}>
                {data.length == 0 ? (
                  <Text>Loading..</Text>
                ) : (
                  <>
                    {data.map((e, i) => {
                      return (
                        <Box
                          key={i / Date.now()}
                          boxShadow="lg"
                          rounded="md"
                          bg="white"
                          onMouseEnter={() => setHover(false)}
                          onMouseLeave={() => setHover(true)}
                        >
                          <Box bg="white" h={["26rem", "26rem", "26rem"]}>
                            <Box h="13.5rem" overflow="hidden">
                              {/* <CrousalBox data={product} CrouselBox={CrouselBox} /> */}
                              <Image src={e.image} />
                            </Box>
                            <Box p="15px" pt={["34px", "20px", "20px"]}>
                              <Box pb="18px" mb="40px">
                                <Grid gap="1">
                                  {Hover ? (
                                    <>
                                      <Text textAlign={"start"}>
                                        <Text as="b" color="black">
                                          {e.product}
                                        </Text>
                                      </Text>

                                      <Text color="black">
                                        {" "}
                                        <Flex gap="3">
                                          <Box w="25px" mt="3px">
                                            <BsStar />
                                          </Box>
                                          <Text>
                                            {e.rating} {e.separator}{" "}
                                            {e.ratingCount}
                                          </Text>
                                        </Flex>
                                      </Text>
                                    </>
                                  ) : (
                                    <>
                                      <Button
                                        mb="2"
                                        borderRadius={"0px"}
                                        w="100%"
                                        border={"1px solid black"}
                                        gap="3"
                                      >
                                        <Text textAlign={"start"}>
                                          <BsHeart color="black" />
                                        </Text>{" "}
                                        <Text color="black">WISHLIST</Text>
                                      </Button>
                                      <Text>{e.size}</Text>
                                    </>
                                  )}
                                  <SimpleGrid columns={3} spacing={[0]}>
                                    <Text
                                      fontSize={["sm", "sm", "sm"]}
                                      textAlign={"start"}
                                    >
                                      <Text as="b" color="black">
                                        {e.discountedPrice}
                                      </Text>
                                    </Text>
                                    <Text
                                      fontSize={["sm", "sm", "sm"]}
                                      color="black"
                                      as="del"
                                    >
                                      {e.strike}
                                    </Text>
                                    <Text
                                      fontSize={["sm", "sm", "sm"]}
                                      color="orange"
                                    >
                                      {e.discountPercentage}
                                    </Text>
                                  </SimpleGrid>{" "}
                                </Grid>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      );
                    })}
                  </>
                )}
              </SimpleGrid>
            </Box>
          )}
        </Flex>
        <Container>
          <Pagination current={page} onChange={onChange} total={5000} />
        </Container>

        {/* <HStack>
            
          <Button onClick={() => setPage(page - 1)}>PREV</Button>
          <Button>{page}</Button>
          <Button onClick={() => setPage(page + 1)}>NEXT</Button>
        </HStack> */}
      </Box>
      <Footer />
    </>
  );
};

export default Beauty;
