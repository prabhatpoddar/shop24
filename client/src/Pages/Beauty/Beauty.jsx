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
  Stack,
  HStack,
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
import { useNavigate } from "react-router";
import MainNavbar from "../Navbar/MainNavbar";
import { publicRequest } from "./../../requestMethod";
import { useToast } from "@chakra-ui/react";
// import Navbar from "../../components/Navbar/MainNavbar";

const Beauty = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);
  const [Hover, setHover] = useState(false);
  const [CrouselBox, setCrouselBox] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Loading, setLoading] = useState(false);
  const [val, setVal] = React.useState("");

  const [val2, setVal2] = React.useState("");
  const [val3, setVal3] = React.useState("");

  const toast = useToast();

  // const allChecked = val.every(Boolean);
  // const isIndeterminate = val.some(Boolean) && !allChecked;
  // const handler1 = (val) => {
  //   setVal(val);
  //   console.log(val);
  // };
  console.log(val);
  const navigate = useNavigate();
  async function getData(page, val, val2, val3) {
    // console.log("30", page);
    if (val) {
      await fetch(
        `https://zany-red-hen-kilt.cyclic.app/beauty?_page=${page}&_limit=50&category=${val}`
      )
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          setData(res);
          console.log(res);
        });
    } else if (val2) {
      await fetch(
        `https://zany-red-hen-kilt.cyclic.app/beauty?_page=${page}&_limit=50&subcategory=${val2}`
      )
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          setData(res);
          console.log(res);
        });
    } else if (val3) {
      await fetch(
        `https://zany-red-hen-kilt.cyclic.app/beauty?_page=${page}&_limit=50&color=${val3}`
      )
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          setData(res);
          console.log(res);
        });
    } else {
      await fetch(
        `https://zany-red-hen-kilt.cyclic.app/beauty?_page=${page}&_limit=50`
      )
        .then((res) => res.json())
        .then((res) => {
          setLoading(false);
          setData(res);
          console.log(res);
        });
    }
  }
  useEffect(() => {
    getData(page, val, val2, val3);
  }, [page, val, val2, val3]);
  const onChange = (page) => {
    console.log(page);
    setPage(page);
  };

  const handleClick = (id, p) => {
    navigate(`personalcare/${id}`);
  };

  //add to wishlist fuction
  const addWishlist = (item) => {
    console.log("item:", item);
    const {
      brand,
      discountPercentage,
      discountedPrice,
      image,
      product,
      size,
      strike,
    } = item;
    const newItem = {
      brand: brand,
      title: product,
      size: size,
      quantity: 1,
      price: discountedPrice,
      off_price: strike,
      discount: discountPercentage,
      img: image,
    };
    console.log("newItem:", newItem);
    publicRequest
      .post("/wishlist", newItem, {
        headers: {
          token: JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data === "Item already in your wishlist.") {
          toast({
            description: res?.data,
            status: "success",
            position: "bottom-right",
            duration: 5000,
            isClosable: true,
          });
        } else {
          toast({
            description: "Your Item added Successfully.",
            status: "success",
            position: "bottom-right",
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {
        toast({
          description: "Something went wrong.",
          status: "error",
          position: "bottom-right",
          duration: 5000,
          isClosable: true,
        });
      });
  };
  //add to wishlist fuction

  return (
    <>
      {/* <AdminNavbar /> */}
      <MainNavbar />

      <Box width={"97%"} pt={"50px"} gap="2px" m={"auto"} bg="white">
        <Box p="10px" textAlign={"start"}>
          <Text color="black">Home/ Personal Care</Text>
        </Box>
        <Box p="10px" textAlign={"start"}>
          <Text as="b" color="black">
            Personal Care - {data.length} items
          </Text>
        </Box>

        <hr style={{ paddingBottom: "40px" }} />
        {/* ------------------------------ */}
        <Flex>
          <Box w="22%" p="1">
            <Text color={"black"} as="b">
              FILTERS
            </Text>
            <Stack p="5px" pt={5} pb={5}>
              <hr />
              <HStack>
                <input
                  type="radio"
                  value="Men"
                  checked={val === "Men"}
                  onChange={(e) => setVal(e.target.value)}
                />
                <Text>Men</Text>
              </HStack>
              <HStack>
                <input
                  type="radio"
                  value="Women"
                  checked={val === "Women"}
                  onChange={(e) => setVal(e.target.value)}
                />
                <Text>Women</Text>
              </HStack>
              <HStack>
                <input
                  type="radio"
                  value="Boys"
                  checked={val === "Boys"}
                  onChange={(e) => setVal(e.target.value)}
                />
                <Text>Boys</Text>
              </HStack>
              <HStack>
                <input
                  type="radio"
                  value="Girls"
                  checked={val === "Girls"}
                  onChange={(e) => setVal(e.target.value)}
                />
                <Text>Girls</Text>
              </HStack>
            </Stack>
            {/* =========================== */}
            <hr style={{ paddingTop: "5px", paddingBottom: "5px" }} />

            <br />
            {/* ------------------------------ */}

            <Text color={"black"} as="b" p={"5px"} pb={5}>
              CATEGORIES
            </Text>

            <Stack pl={1} mt={1} spacing={1}>
              <HStack>
                <input
                  type="checkbox"
                  onChange={(e) => setVal2(e.target.value)}
                  value="Lipstick"
                  checked={val2 === "Lipstick"}
                />

                <Text> Lipstick</Text>
              </HStack>
              <HStack>
                <input
                  type="checkbox"
                  checked={val2 === "Nail Polish"}
                  onChange={(e) => setVal2(e.target.value)}
                  value="Nail Polish"
                />

                <Text> Nail Polish</Text>
              </HStack>
              <HStack>
                <input
                  type="checkbox"
                  checked={val2 === "Perfume and Body Mist"}
                  onChange={(e) => setVal2(e.target.value)}
                  value="Perfume and Body Mist"
                />

                <Text> Perfume and Body Mist</Text>
              </HStack>
              <HStack>
                <input
                  type="checkbox"
                  checked={val2 === "Beauty Accessory"}
                  onChange={(e) => setVal2(e.target.value)}
                  value="Beauty Accessory"
                />

                <Text>Beauty Accessory</Text>
              </HStack>
              <HStack>
                <input
                  type="checkbox"
                  checked={val2 === "Body Wash and Scrub"}
                  onChange={(e) => setVal2(e.target.value)}
                  value="Body Wash and Scrub"
                />

                <Text> Body Wash and Scrub</Text>
              </HStack>
              <HStack>
                <input
                  type="checkbox"
                  checked={val2 === "Body Oil"}
                  onChange={(e) => setVal2(e.target.value)}
                  value="Body Oil"
                />

                <Text> Body Oil</Text>
              </HStack>
              <HStack>
                <input
                  type="checkbox"
                  checked={val2 === "Shampoo and Conditioner"}
                  onChange={(e) => setVal2(e.target.value)}
                  value="Shampoo and Conditioner"
                />

                <Text> Shampoo and Conditioner</Text>
              </HStack>
              <HStack>
                <input
                  type="checkbox"
                  checked={val2 === "Face Wash and Cleanser"}
                  onChange={(e) => setVal2(e.target.value)}
                  value="Face Wash and Cleanser"
                />

                <Text>Face Wash and Cleanser</Text>
              </HStack>
            </Stack>
            {/* =========================== */}
            <hr style={{ paddingTop: "5px", paddingBottom: "5px" }} />
            <Text color={"black"} as="b" p={"5px"} pb={5}>
              COLOR
            </Text>

            <Stack pl={1} mt={1} spacing={1}>
              <HStack>
                <input
                  type="checkbox"
                  checked={val3 === "White"}
                  onChange={(e) => setVal3(e.target.value)}
                  value="White"
                />

                <Text> White</Text>
              </HStack>
              <HStack>
                <input
                  type="checkbox"
                  checked={val3 === "Black"}
                  onChange={(e) => setVal3(e.target.value)}
                  value="Black"
                />

                <Text> Black</Text>
              </HStack>
              <HStack>
                <input
                  type="checkbox"
                  checked={val3 === "Pink"}
                  onChange={(e) => setVal3(e.target.value)}
                  value="Pink"
                />

                <Text> Pink</Text>
              </HStack>
              <HStack>
                <input
                  type="checkbox"
                  checked={val3 === "Multi"}
                  onChange={(e) => setVal3(e.target.value)}
                  value="Multi"
                />

                <Text>Multi</Text>
              </HStack>
              <HStack>
                <input
                  type="checkbox"
                  checked={val3 === "Brown"}
                  onChange={(e) => setVal3(e.target.value)}
                  value="Brown"
                />

                <Text> Brown</Text>
              </HStack>
              <HStack>
                <input
                  type="checkbox"
                  checked={val3 === "Green"}
                  onChange={(e) => setVal3(e.target.value)}
                  value="Green"
                />

                <Text> Green</Text>
              </HStack>
              <HStack>
                <input
                  type="checkbox"
                  checked={val3 === "Red"}
                  onChange={(e) => setVal3(e.target.value)}
                  value="Red"
                />

                <Text> Red</Text>
              </HStack>
            </Stack>
            {/* ------------- */}
          </Box>
          {/* --------------- */}
          <Box>
            <Flex display={["none", "flex", "Flex"]}>
              <Flex>
                {/* <FilterBox /> */}
                {Loading || data.length == 0 ? (
                  <Box m="auto" justifyContent={"center"}>
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
                  <Box w="90%" m="auto">
                    <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={5}>
                      {data.length == 0 ? (
                        <Box m="auto" w={"100%"} justifyContent={"center"}>
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
                                  <Box
                                    h="13.5rem"
                                    overflow="hidden"
                                    onClick={() =>
                                      handleClick(e._id, e.product)
                                    }
                                  >
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
                                                {e.brand}
                                              </Text>
                                              <Text color="black" fontSize={13}>
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
                                              <Text
                                                color="black"
                                                onClick={() => {
                                                  let item = e;
                                                  addWishlist(
                                                    // e.brand,
                                                    // e.discountPercentage,
                                                    // e.discountedPrice
                                                    item
                                                  );
                                                }}
                                              >
                                                WISHLIST
                                              </Text>
                                            </Button>
                                            <Text>Size:- {e.size}</Text>
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
            </Flex>
          </Box>
        </Flex>

        <Container mt={10}>
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
