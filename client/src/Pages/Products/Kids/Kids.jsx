/* eslint-disable react-hooks/exhaustive-deps */
import css from "./kids.module.css";

import ProductCard from "../../../Components/ProductCard/ProductCard";

import Filter from "../../../Components/Filter/Filter";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { useEffect,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../redux/productRedux";
import { Grid, Spinner } from "@chakra-ui/react";
const Kids = () => {
  const prod = useSelector(store => store.product.data.data) || []
  const isLoading = useSelector(store => store.product.isLoading)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchData("product?category=kids&&page=1&&limit=30"))

  }, []);


  return (
    <>
      <Navbar />

      <br />

      <div className={css.main_section}>
        <Filter
          one="Aarika"
          two="Roadster"
          five="CUTECUMBER"
          seven="CHUTPUT"
          six="Sangria"
          three="FASHION DREAM"
          four="Ed-a-Mamma"
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

export default Kids;
