import { Heading } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import WishlistCart from "../../Components/wishlistCart/WishlistCart";
import { publicRequest } from "../../requestMethod";
import styles from "./wishlist.module.css";
const arr = new Array(10).fill(1);
const Wishlist = () => {
  const [data, setData] = useState([]);
  const toast = useToast();
  const getwishlistData = () => {
    publicRequest
      .get("/wishlist", {
        headers: {
          token: JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res?.data) {
          setData(res.data);
        }
      });
  };

  //wish;ist to bag
  const deleteWish = (id) => {
    return publicRequest.delete(`/wishlist/${id}`, {
      headers: {
        token: JSON.parse(localStorage.getItem("token")),
      },
    });
  };

  const bagHandler = (property) => {
    //this data move from the wishlist to bag card .

    let id = property._id;
    deleteWish(id).then((res) => {
      console.log(res.data);
      publicRequest
        .post("/bag", res.data, {
          headers: {
            token: JSON.parse(localStorage.getItem("token")),
          },
        })
        .then((res) => {
          console.log(res.data);
          toast({
            description: "Your item moved to bag!",
            status: "success",
            position: "bottom-right",
            duration: 5000,
            isClosable: true,
          });
          getwishlistData();
        });
    });
  };

  const deleteWishlist = (property) => {
    let id = property._id;
    deleteWish(id).then((res) => {
      toast({
        description: "Your wislist's Item Deleted!",
        status: "success",
        position: "bottom-right",
        duration: 5000,
        isClosable: true,
      });
      getwishlistData();
    });
  };

  useEffect(() => {
    getwishlistData();
  }, []);

  return (
    <>
      <Heading className={styles.heading} fontSize="md">
        My Wishlist <span style={{ color: "#ccc" }}>{data.length} items</span>
      </Heading>
      <div className={styles.main}>
        {data.map((property) => {
          return (
            <WishlistCart
              property={property}
              bagHandler={bagHandler}
              deleteWishlist={deleteWishlist}
            />
          );
        })}
      </div>
    </>
  );
};

export default Wishlist;
