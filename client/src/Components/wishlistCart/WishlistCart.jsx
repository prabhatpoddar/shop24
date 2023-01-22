import { Box, Heading, Image, useToast } from "@chakra-ui/react";
import React from "react";
import { publicRequest } from "../../requestMethod";
import styles from "./wishlistCart.module.css";

const WishlistCart = ({ property, deleteWishlist, bagHandler }) => {
  const toast = useToast();

  // //wish;ist to bag
  // const deleteWish = (id) => {
  //   return publicRequest.delete(`/wishlist/${id}`, {
  //     headers: {
  //       token: JSON.parse(localStorage.getItem("token")),
  //     },
  //   });
  // };

  // const bagHandler = (property) => {
  //   //this data move from the wishlist to bag card .

  //   let id = property._id;
  //   deleteWish(id).then((res) => {
  //     console.log(res.data);
  //     publicRequest
  //       .post("/bag", res.data, {
  //         headers: {
  //           token: JSON.parse(localStorage.getItem("token")),
  //         },
  //       })
  //       .then((res) => console.log(res.data));
  //   });
  // };

  // const deleteWishlist = (property) => {
  //   let id = property._id;
  //   deleteWish(id).then((res) => {
  //     toast({
  //       description: "Your wislist's Item Deleted!",
  //       status: "success",
  //       position: "bottom-right",
  //       duration: 5000,
  //       isClosable: true,
  //     });
  //   });
  // };

  return (
    <div className={styles.container}>
      <button
        className={styles.close_button}
        onClick={() => deleteWishlist(property)}
      >
        X
      </button>

      <Box w="100%">
        <Image
          src={property.img}
          alt={property.img}
          objectFit="cover"
          w="100%"
          height="400px"
        />
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
          paddingLeft="1rem"
        >
          {property.title}
        </Box>
        <Box p="2">
          <Box
            display="flex"
            alignItems="baseline"
            justifyContent="center"
            columnGap=".5rem"
          >
            <Heading borderRadius="full" colorScheme="teal" fontSize="md">
              Rs.3,739
            </Heading>
            <Heading
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="sm"
              textTransform="uppercase"
              ml="2"
              textDecorationLine="line-through"
            >
              rs 8499
            </Heading>
            <Heading
              color="#ff905a"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              (56% OFF)
            </Heading>
          </Box>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
          paddingLeft="1rem"
          textAlign="center"
          borderTop="1px solid #cccc"
          padding="1.5rem 0"
          color="#ff3e6c"
          cursor="pointer"
          onClick={() => bagHandler(property)}
        >
          MOVE TO BAG
        </Box>
      </Box>
    </div>
  );
};

export default WishlistCart;
