import css from "./womens.module.css";

import Filter from "../../../Components/Filter/Filter";

import { Navbar } from "../../../Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { publicRequest } from "../../../requestMethod";
import ProductCard from "../../../Components/ProductCard/ProductCard";
const Womens = () => {
  const [prod, setProduct] = useState([])

  useEffect(() => {
    publicRequest("/product?category=sarees&&page=1&&limit=30").then((res) => {
      setProduct(res.data.data)
    })
  }, []);
  return (
    <>
    <Navbar />
    <br />
    
      <div className={css.main_section}>
        <Filter
          one="Lakme"
          six="Renee"
          seven="SWISS BEAUTY"
          two="Maybelline"
          three="FACES CANADA"
          four="Colorbar"
          five="LOreal"
        />

        <div className={css.product_section}>
          {prod.length > 0 &&
            prod.map((list) => {
              return (
                <ProductCard
                  key={list.id}
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
      <br />
    
    </>
  );
};

export default Womens;
