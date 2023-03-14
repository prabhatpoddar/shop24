import css from "./HomeAndLeaving.module.css";

import ProductCard from "../../../Components/ProductCard/ProductCard";

import Filter from "../../../Components/Filter/Filter";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { publicRequest } from "../../../requestMethod";
import { useEffect, useState } from "react";
const HomeAndLeaving = () => {
  const [prod, setProduct] = useState([])
  useEffect(() => {
    publicRequest("/product?category=matress&&page=1&&limit=30").then((res) => {
      setProduct(res.data.data)
    })
  }, []);

  return (
    <>
    <Navbar />

    <br />

      <div className={css.main_section}>
        <Filter
          one="Gini and Jony"
          two="HERE&NOW"
          five="Roadster"
          seven="Peter England"
          six="U.S. Polo Assn. Kids"
          three="H&M"
          four="Ed-a-Mamma"
        />

        <div className={css.product_section}>
          {prod.length > 0 &&
            prod.map((list, index) => {
              return (
                <ProductCard
                  key={index}
                  id={index}
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

export default HomeAndLeaving;
