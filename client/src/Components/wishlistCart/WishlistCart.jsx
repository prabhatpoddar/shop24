import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import styles from "./wishlistCart.module.css";

const WishlistCart = () => {
  const property = {
    imageUrl:
      "https://assets.myntassets.com/f_webp,w_200,c_limit,fl_progressive,dpr_2.0/assets/images/19959630/2022/9/15/742336fc-2b14-4941-941b-1654651826961663237431569InddusWomenMagentaStripedCold-ShoulderSleevesGrandeurMajesti6.jpg",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <div className={styles.container}>
      <button className={styles.close_button}>X</button>

      <Box w="100%">
        <Image
          src={property.imageUrl}
          alt={property.imageAlt}
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
        >
          MOVE TO BAG
        </Box>
      </Box>
    </div>
  );
};

export default WishlistCart;
