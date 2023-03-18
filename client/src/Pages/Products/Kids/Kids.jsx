import css from "./kids.module.css";

import ProductCard from "../../../Components/ProductCard/ProductCard";

import Filter from "../../../Components/Filter/Filter";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { useEffect,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../redux/productRedux";
const Kids = () => {
  const prod = useSelector(store => store.product.data.data) || []
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
                  key={list._id}
                  id={list._id}
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

export default Kids;
