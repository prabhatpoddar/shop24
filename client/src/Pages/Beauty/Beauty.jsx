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

  // const allChecked = val.every(Boolean);
  // const isIndeterminate = val.some(Boolean) && !allChecked;

  const navigate = useNavigate();

  useEffect(() => {
    getData(page);
  }, [page]);

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

  const onChange = (page) => {
    console.log(page);
    setPage(page);
  };
  const handleClick = (id, p) => {
    navigate(`personalcare/${id}`);
  };
  return (
    <>
      {/* <AdminNavbar /> */}
      <MainNavbar/>
      <Box width={"97%"} gap="2px" m={"auto"} bg="white">
        <Box p="10px" textAlign={"start"}>
          <Text color="black">Home/ Personal Care</Text>
        </Box>
        <Box p="10px" textAlign={"start"}>
          <Text as="b" color="black">
            Personal Care - {data.length} items
          </Text>
        </Box>
         <br/>
        {/* ------------------------------ */}
        <Flex>
          <Box w="22%" p="1">
            <Flex p="5px">
              <Text color={"black"} as="b">
                FILTER
              </Text>
            </Flex>
            {/* <Checkbox
              isChecked={allChecked}
              isIndeterminate={isIndeterminate}
              onChange={(e) =>
                setVal([e.target.checked, e.target.checked])
              }
            >
              CATEGORIES
            </Checkbox> */}

            <br/>
            <Text color={"black"} as="b" p={"5px"} pb={5}>
              CATEGORIES
            </Text>
            <Stack pl={1} mt={1} spacing={1}>
              <Checkbox
                // isChecked={}
                // onClick={()=>setVal("Lipstick")}
              >
                Lipstick
              </Checkbox>
              <Checkbox
                // onclick={setVal("Nail Polish")}
              >
                Nail Polish
              </Checkbox>
              <Checkbox
                // onclick={setVal("Perfume and Body Mist")}
              >
                Perfume and Body Mist
              </Checkbox>
              <Checkbox
                // onclick={setVal("Beauty Accessory")}
              >
                Beauty Accessory
              </Checkbox>
              <Checkbox
                // onclick={setVal("Body Wash and Scrub")}
              >
                Body Wash and Scrub
              </Checkbox>
              <Checkbox
                // onclick={setVal("Body Oil")}
              >
                Body Oil
              </Checkbox>
              <Checkbox
                // onclick={setVal("Shampoo and Conditioner")}
              >
                Shampoo and Conditioner
              </Checkbox>
              <Checkbox
                // onclick={setVal("Face Wash and Cleanser")}
              >
                Face Wash and Cleanser
              </Checkbox>
            </Stack>
          </Box>
          {/* --------------- */}
          <Box>
            <Flex display={["none", "flex", "Flex"]}>
              <Flex>
                {/* <FilterBox /> */}
                {Loading || data.length == 0 ? (
                  <Box m="auto"justifyContent={"center"}>
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
                                              <Text color="black">
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
