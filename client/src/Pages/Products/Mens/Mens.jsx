/* eslint-disable react-hooks/exhaustive-deps */
import css from "./mens.module.css";

import React, { useEffect,  } from "react";
import Filter from "../../../Components/Filter/Filter";
import { Navbar } from "../../../Components/Navbar/Navbar";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../redux/productRedux";

const Mens = () => {

  const prod = useSelector(store => store.product.data.data) || []
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchData("product?page=1&&limit=30"))
  }, []);

  return (
    <>


      <Navbar />
      <br />



      <div className={css.main_section} >
        <Filter
          one="IVOC"
          two="DENNISON"
          three="Roadstar"
          four="WROGN"
          five="Provogue"
          six="ADIDAS"
          seven="KRA"
        />

        <div className={css.product_section}>
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
      </div>


    </>
  );
};

export default React.memo(Mens);
