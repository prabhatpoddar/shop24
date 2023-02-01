import css from "./kids.module.css";

import ProductCard from "../../../Components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { getProductsKids } from "../../../Redux/Products/action";
import Filter from "../../../Components/Filter/Filter";
import { Navbar } from "../../../Components/Navbar/Navbar";
const Kids = () => {

  const prod = useSelector((store) => store.products);

  const dispatch = useDispatch();

  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (location || prod.length ===0) {
      const dataparams = {
        params: {
          _sort: "product-discountedPrice",
          _order: searchParams.get("sort"),
          "product-brand": searchParams.getAll("category"),
        },
      };
      // console.log(dataparams);
      dispatch(getProductsKids(dataparams));
    }
  }, [searchParams, dispatch, location]);

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
                  direction="kidswear"
                  image={list["img-responsive src"]}
                  rating={list["product-ratingsContainer"]}
                  count={list["product-ratingsCount"]}
                  name={list["product-product"]}
                  brand={list["product-brand"]}
                  price={list["product-discountedPrice"]}
                  off_price={list["product-strike"]}
                  address={list["product-base href"]}
                />
              );
            })}
        </div>
      </div>
     
    </>
  );
};

export default Kids;
