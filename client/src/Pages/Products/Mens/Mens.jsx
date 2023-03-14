import css from "./mens.module.css";

import React, { useEffect, useState } from "react";
import Filter from "../../../Components/Filter/Filter";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { publicRequest } from "../../../requestMethod";
import ProductCard from "../../../Components/ProductCard/ProductCard";

const Mens = () => {

  const [prod, setProduct] = useState([])
  
  useEffect(() => {
    publicRequest("/product?page=1&&limit=30").then((res) => {
      setProduct(res.data.data)
    })
  }, []);

  return (
    <>


      <Navbar />
      <br />



      <div className={css.main_section} >
        <Filter
          one="Roadster"
          two="HRX by Hrithik Roshan"
          three="Mast & Harbour"
          four="Huetrap"
          five="WROGN"
          six="Urbano Fashion"
          seven="Calvin Klein Jeans"
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
