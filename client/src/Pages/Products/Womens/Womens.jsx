import css from "./womens.module.css";

import Filter from "../../../Components/Filter/Filter";

import { Navbar } from "../../../Components/Navbar/Navbar";
import { useEffect,  } from "react";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../redux/productRedux";
import { Grid, Spinner } from "@chakra-ui/react";
const Womens = () => {
  const prod = useSelector(store => store.product.data.data) || []
  const isLoading = useSelector(store => store.product.isLoading)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchData("product?category=sarees&&page=1&&limit=60"))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <br />

      <div className={css.main_section}>
        <Filter
          one="Inddus"
          two="Mitera"
          three="KALINI"
          four="kasee"
          five="Triyah"
          six="Sangria"
          seven="VASTRANAND"
          
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
      <br />

    </>
  );
};

export default Womens;
