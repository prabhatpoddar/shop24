/* eslint-disable react-hooks/exhaustive-deps */
import css from "./Beauty.module.css";

import ProductCard from "../../../Components/ProductCard/ProductCard";

import Filter from "../../../Components/Filter/Filter";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { useEffect } from "react";
import { fetchData } from "../../../redux/productRedux";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Spinner } from "@chakra-ui/react";
const Beauty = () => {
  const prod = useSelector(store => store.product.data.data) || []
  const isLoading = useSelector(store => store.product.isLoading)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchData("product?category=oil"))
  }, []);


  return (
    <>
    <Navbar />

    <br />

      <div className={css.main_section}>
        <Filter
          one="HAYZE COSMETICS"
          two="Ustraa"
          five="BEARDO"
          seven="Skinatura"
          six="MANCODE"
          three="Man Arden"
          four="DCRAF"
        />

{
          isLoading ?
            <Grid justifyContent="center" alignItems="center" w="80%">
              <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
              />
            </Grid>
            : <div className={css.product_section}>
              {prod.length > 0 &&
                prod.map((list) => {
                  return (
                    <ProductCard
                      key={list._id}
                      direction={list._id}
                      image={list.image}
                      rating={list.rating}
                      count={list.ratingsCount}
                      name={list.productname}
                      brand={list.brand}
                      price={list.price}
                      off_price={list.discountPercentage}
                    />
                  );
                })}
            </div>
        }
      </div>
     
    </>
  );
};

export default Beauty;


