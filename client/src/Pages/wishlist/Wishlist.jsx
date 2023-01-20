import { Heading } from "@chakra-ui/react";
import React from "react";
import WishlistCart from "../../Components/wishlistCart/WishlistCart";
import styles from "./wishlist.module.css";
const arr = new Array(10).fill(1);
const Wishlist = () => {
  return (
    <>
      <Heading className={styles.heading} fontSize="md">
        My Wishlist <span style={{ color: "#ccc" }}>25 items</span>
      </Heading>
      <div className={styles.main}>
        {arr.map((er) => {
          return <WishlistCart />;
        })}
      </div>
    </>
  );
};

export default Wishlist;
