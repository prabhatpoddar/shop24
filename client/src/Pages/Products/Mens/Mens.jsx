import css from "./mens.module.css";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { getProductsMens } from "../../../Redux/Products/action";
import Filter from "../../../Components/Filter/Filter";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { Footer } from "../../../Components/Footer/Footer";

const Mens = () => {

  const prod = useSelector((store) => store.products);

  const dispatch = useDispatch();

  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (location || prod.length === 0) {
      const dataparams = {
        params: {
          _sort: "product-discountedPrice",
          _order: searchParams.get("sort"),
          "product-brand": searchParams.getAll("category"),
        },
      };

      dispatch(getProductsMens(dataparams));
    }
  }, [searchParams, dispatch, location]);

  return (
    <>
      
    
      <Navbar />
      <br/>
     
     

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
            prod.map((list, index) => {
              return (
                <ProductCard
                  key={index}
                  direction="tshirt"
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

export default Mens;
