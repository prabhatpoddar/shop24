import React, { Fragment, useContext, useState } from 'react'
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FaRegHeart, FaUserAlt, FaShoppingBag } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi'
import SliderNav from './SliderNav';
import { useSelector } from 'react-redux';
import { publicRequest } from '../../requestMethod';
import NavMenu from './NavMenu';
// import { UserContext } from '../../UserContext/UserContext';


const Navbar = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState([])
  const [menuShow, setMenuShow] = useState(false)
  // const [{decodedToken}]=useContext(UserContext)
  // console.log('decodedToken:', decodedToken)

  // const cart = useSelector(store => store.cart)

  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);

  const navigate = useNavigate();
  show ? (document.querySelector("body").style.overflow = "hidden") : (document.querySelector("body").style.overflow = "");
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.clear()
    return navigate("/");
  }
  const handleSearch = (e) => {

    publicRequest.get(`/product/search?search=${e.target.value}`).then((res) => {
      setSearch(res.data.data)
    })
  }


  return (
    <div className={styles.navMainDiv}>
      <div className={styles.navSubDiv1}>
        <Link to="/"><img src="https://user-images.githubusercontent.com/98205449/213233396-1caf5409-150c-4862-bb2b-03fbd8e3bbf5.jpg" alt="logo" className={styles.logoSize} /></Link>
      </div>
      <div className={styles.navSubDiv2}>
        <div className={styles.dropdown}>
          <p className={`${styles.dropbtn} ${hover1 && styles.tabStyles}`}>
            MEN
          </p>
          <div
            className={styles.dropdownContent}
            onMouseEnter={() => setHover1(true)}
            onMouseLeave={() => setHover1(false)}
          >
            <div className={styles.dropdownFlex}>
              <div>
                <p className={styles.dropHeadings}>Topwear</p>

                <Link to="/mens">T-Shirts</Link>
                <Link to="/mens">Casual Shirts</Link>
                <Link to="/mens">Formal Shirts</Link>
                <Link to="/mens">Sweatshirts</Link>
                <Link to="/mens">Sweaters</Link>
                <Link to="/mens">Jackets</Link>
                <Link to="/mens">Blazers & Coats</Link>
                <Link to="/mens">Suits</Link>
                <Link to="/mens">Rain Jackets</Link><br />
                <p className={styles.dropHeadings}>Indian & Festive Wear</p>
                <Link to="/mens">Kurtas & Kurta Sets</Link>
                <Link to="/mens">Nehru Jackets</Link>
                <Link to="/mens">Sherwanis</Link>
                <Link to="/mens">Dhotis</Link>
              </div>
              <div>
                <p className={styles.dropHeadings}>Bottom Wear</p>
                <a href="/">Jeans</a>
                <a href="/">Casual Trousers</a>
                <a href="/">Formal Trousers</a>
                <a href="/">Track Pants & Joggers</a><br />
                <p className={styles.dropHeadings}>Innerwear & Sleepwear</p>
                <a href="/">Track Pants & Joggers</a>
                <a href="/">Boxers</a>
                <a href="/">Vests</a>
                <a href="/">Sleepwear & Loungewear</a>
                <a href="/">Thermals</a><br />
                <p className={styles.dropHeadings}>Plus Size</p>
                <a href="/">S, M, L, XL, XXl, XXl</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Footwear</p>
                <a href="/">Casual Shoes</a>
                <a href="/">Sports Shoes</a>
                <a href="/">Formal Shoes</a>
                <a href="/">Sneakers</a>
                <a href="/">Sandals & Floaters</a>
                <a href="/">Flip Flops</a>
                <a href="/">Socks</a><br />
                <p className={styles.dropHeadings}>Personal Care & Grooming</p><br />
                <p className={styles.dropHeadings}>Sunglasses & Frames</p><br />
                <p className={styles.dropHeadings}>Watches</p>
              </div>
              <div>
                <p className={styles.dropHeadings}>Sports & Active Wear</p>
                <a href="/">Sports Shoes</a>
                <a href="/">Sports Sandals</a>
                <a href="/">Active T-Shirts</a>
                <a href="/">Track Pants & Shorts</a>
                <a href="/">Tracksuits</a>
                <a href="/">Jackets & Sweatshirts</a>
                <a href="/">Sports Accessories</a>
                <a href="/">Swimwear</a><br />
                <p className={styles.dropHeadings}>Gadgets</p>
                <a href="/">Smart Wearables</a>
                <a href="/">Fitness Gadgets</a>
                <a href="/">Headphones</a>
                <a href="/">Speakers</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Fashion Accessories</p>
                <a href="/">Wallets</a>
                <a href="/">Belts</a>
                <a href="/">Perfumes & Body Mists</a>
                <a href="/">Trimmers</a>
                <a href="/">Deodorants</a>
                <a href="/">Ties, Cufflinks & Pocket Squares</a>
                <a href="/">Accessory Gift Sets</a>
                <a href="/">Caps & Hats</a>
                <a href="/">Mufflers, Scarves & Gloves</a>
                <a href="/">Phone Cases</a>
                <a href="/">Rings & Wristwear</a>
                <a href="/">Helmets</a><br />
                <p className={styles.dropHeadings}>Bags & Backpacks</p><br />
                <p className={styles.dropHeadings}>Luggages & Trolleys</p><br />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdown}>
          <p className={`${styles.dropbtn} ${hover2 && styles.tabStyles}`}>
            WOMEN
          </p>
          <div
            className={styles.dropdownContent}
            onMouseEnter={() => setHover2(true)}
            onMouseLeave={() => setHover2(false)}
          >
            <div className={styles.dropdownFlex}>
              <div>
                <p className={styles.dropHeadings}>Indian & Fusion Wear</p>

                <Link to="/womens">Kurtas & Suits</Link>
                <Link to="/womens">Kurtis, Tunics & Tops</Link>
                <Link to="/womens">Sarees</Link>
                <Link to="/womens">Ethnic Wear</Link>
                <Link to="/womens">Leggings, Salwars & Churidars</Link>
                <Link to="/womens">Jackets</Link>
                <Link to="/womens">Dress Materials</Link>
                <Link to="/womens">Lehenga Cholis</Link>
                <Link to="/womens">Dupattas & Shawls</Link><br />
                <p className={styles.dropHeadings}>Indian & Festive Wear</p>
                <Link to="/womens">Kurtas & Kurta Sets</Link>
                <Link to="/womens">Nehru Jackets</Link>
                <Link to="/womens">Sherwanis</Link>
                <Link to="/womens">Dhotis</Link>
              </div>
              <div>
                <p className={styles.dropHeadings}>Western Wear</p>
                <a href="/">Dresses</a>
                <a href="/">Tops</a>
                <a href="/">Tshirts</a>
                <a href="/">Jeans</a><br />
                <p className={styles.dropHeadings}>Trousers & Capris</p>
                <a href="/">Shorts & Skirts</a>
                <a href="/"> Co-ords</a>
                <a href="/">Playsuits</a>
                <a href="/">Jumpsuits</a>
                <a href="/">Thermals</a><br />
                <p className={styles.dropHeadings}>Plus Size</p>
                <a href="/">S, M, L, XL, XXl, XXl</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Footwear</p>
                <a href="/">Casual Shoes</a>
                <a href="/">Sports Shoes</a>
                <a href="/">Formal Shoes</a>
                <a href="/">Sneakers</a>
                <a href="/">Sandals & Floaters</a>
                <a href="/">Flip Flops</a>
                <a href="/">Socks</a><br />
                <p className={styles.dropHeadings}>Personal Care & Grooming</p><br />
                <p className={styles.dropHeadings}>Sunglasses & Frames</p><br />
                <p className={styles.dropHeadings}>Watches</p>
              </div>
              <div>
                <p className={styles.dropHeadings}>Sports & Active Wear</p>
                <a href="/">Sports Shoes</a>
                <a href="/">Sports Sandals</a>
                <a href="/">Active T-Shirts</a>
                <a href="/">Track Pants & Shorts</a>
                <a href="/">Tracksuits</a>
                <a href="/">Jackets & Sweatshirts</a>
                <a href="/">Sports Accessories</a>
                <a href="/">Swimwear</a><br />
                <p className={styles.dropHeadings}>Gadgets</p>
                <a href="/">Smart Wearables</a>
                <a href="/">Fitness Gadgets</a>
                <a href="/">Headphones</a>
                <a href="/">Speakers</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Fashion Accessories</p>
                <a href="/">Wallets</a>
                <a href="/">Belts</a>
                <a href="/">Perfumes & Body Mists</a>
                <a href="/">Trimmers</a>
                <a href="/">Deodorants</a>
                <a href="/">Ties, Cufflinks & Pocket Squares</a>
                <a href="/">Accessory Gift Sets</a>
                <a href="/">Caps & Hats</a>
                <a href="/">Mufflers, Scarves & Gloves</a>
                <a href="/">Phone Cases</a>
                <a href="/">Rings & Wristwear</a>
                <a href="/">Helmets</a><br />
                <p className={styles.dropHeadings}>Bags & Backpacks</p><br />
                <p className={styles.dropHeadings}>Luggages & Trolleys</p><br />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdown}>
          <p className={`${styles.dropbtn} ${hover3 && styles.tabStyles}`}>
            KIDS
          </p>
          <div
            className={styles.dropdownContent}
            onMouseEnter={() => setHover3(true)}
            onMouseLeave={() => setHover3(false)}
          >
            <div className={styles.dropdownFlex}>
              <div>
                <p className={styles.dropHeadings}>Topwear</p>

                <Link to="/kids">Boys Clothing</Link>
                <Link to="/kids">T-Shirts</Link>
                <Link to="/kids">Shirts</Link>
                <Link to="/kids">Shorts</Link>
                <Link to="/kids">Jeans</Link>
                <Link to="/kids">Jackets</Link>
                <Link to="/kids">Trousers</Link>
                <Link to="/kids"> Ethnic Wear</Link>
                <Link to="/kids">Track Pants & Pyjamas</Link><br />
                <p className={styles.dropHeadings}>Jacket, Sweater & Sweatshirts</p>
                <Link to="/kids">Party Wear</Link>
                <Link to="/kids">Innerwear & Thermals</Link>
                <Link to="/kids">Nightwear & Loungewear</Link>
                <Link to="/kids">Value Packs</Link>
              </div>
              <div>
                <p className={styles.dropHeadings}>Girls Clothing</p>
                <a href="/">Dresses</a>
                <a href="/">Tops</a>
                <a href="/">Lehenga choli</a>
                <a href="/">Kurta Sets </a><br />
                <p className={styles.dropHeadings}>Party wear</p>
                <a href="/">Dungarees & Jumpsuits</a>
                <a href="/">Skirts & shorts</a>
                <a href="/">Tights & Leggings</a>
                <a href="/">Sleepwear & Loungewear</a>
                <a href="/">Jeans, Trousers & Capris</a><br />
                <p className={styles.dropHeadings}>Plus Size</p>
                <a href="/">S, M, L, XL, XXl, XXl</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Footwear</p>
                <a href="/">Casual Shoes</a>
                <a href="/">Sports Shoes</a>
                <a href="/">Formal Shoes</a>
                <a href="/">Sneakers</a>
                <a href="/">Sandals & Floaters</a>
                <a href="/">Flip Flops</a>
                <a href="/">Socks</a><br />
                <p className={styles.dropHeadings}>Personal Care & Grooming</p><br />
                <p className={styles.dropHeadings}>Sunglasses & Frames</p><br />
                <p className={styles.dropHeadings}>Watches</p>
              </div>
              <div>
                <p className={styles.dropHeadings}>Sports & Active Wear</p>
                <a href="/">Sports Shoes</a>
                <a href="/">Sports Sandals</a>
                <a href="/">Active T-Shirts</a>
                <a href="/">Track Pants & Shorts</a>
                <a href="/">Tracksuits</a>
                <a href="/">Jackets & Sweatshirts</a>
                <a href="/">Sports Accessories</a>
                <a href="/">Swimwear</a><br />
                <p className={styles.dropHeadings}>Gadgets</p>
                <a href="/">Smart Wearables</a>
                <a href="/">Fitness Gadgets</a>
                <a href="/">Headphones</a>
                <a href="/">Speakers</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Fashion Accessories</p>
                <a href="/">Wallets</a>
                <a href="/">Belts</a>
                <a href="/">Perfumes & Body Mists</a>
                <a href="/">Trimmers</a>
                <a href="/">Deodorants</a>
                <a href="/">Ties, Cufflinks & Pocket Squares</a>
                <a href="/">Accessory Gift Sets</a>
                <a href="/">Caps & Hats</a>
                <a href="/">Mufflers, Scarves & Gloves</a>
                <a href="/">Phone Cases</a>
                <a href="/">Rings & Wristwear</a>
                <a href="/">Helmets</a><br />
                <p className={styles.dropHeadings}>Bags & Backpacks</p><br />
                <p className={styles.dropHeadings}>Luggages & Trolleys</p><br />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdown}>
          <p className={`${styles.dropbtn} ${hover4 && styles.tabStyles}`}>
            HOME & LIVING
          </p>
          <div
            className={styles.dropdownContent}
            onMouseEnter={() => setHover4(true)}
            onMouseLeave={() => setHover4(false)}
          >
            <div className={styles.dropdownFlex}>
              <div>
                <p className={styles.dropHeadings}>Topwear</p>
                {/* 
                if want to link it to any page use this code
                <Link to="/products/clothing">Clothing</Link>
                 */}
                <a href="/home&leaving">T-Shirts</a>
                <a href="/home&leaving">Casual Shirts</a>
                <a href="/home&leaving">Formal Shirts</a>
                <a href="/home&leaving">Sweatshirts</a>
                <a href="/home&leaving">Sweaters</a>
                <a href="/home&leaving">Jackets</a>
                <a href="/home&leaving">Blazers & Coats</a>
                <a href="/home&leaving">Suits</a>
                <a href="/home&leaving">Rain Jackets</a><br />
                <p className={styles.dropHeadings}>Indian & Festive Wear</p>
                <a href="/home&leaving">Kurtas & Kurta Sets</a>
                <a href="/home&leaving">Nehru Jackets</a>
                <a href="/home&leaving">Sherwanis</a>
                <a href="/home&leaving">Dhotis</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Bottom Wear</p>
                <a href="/home&leaving">Jeans</a>
                <a href="/home&leaving">Casual Trousers</a>
                <a href="/home&leaving">Formal Trousers</a>
                <a href="/home&leaving">Track Pants & Joggers</a><br />
                <p className={styles.dropHeadings}>Innerwear & Sleepwear</p>
                <a href="/home&leaving">Track Pants & Joggers</a>
                <a href="/home&leaving">Boxers</a>
                <a href="/home&leaving">Vests</a>
                <a href="/home&leaving">Sleepwear & Loungewear</a>
                <a href="/home&leaving">Thermals</a><br />
                <p className={styles.dropHeadings}>Plus Size</p>
                <a href="/">S, M, L, XL, XXl, XXl</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Footwear</p>
                <a href="/home&leaving">Casual Shoes</a>
                <a href="/home&leaving">Sports Shoes</a>
                <a href="/home&leaving">Formal Shoes</a>
                <a href="/home&leaving">Sneakers</a>
                <a href="/home&leaving">Sandals & Floaters</a>
                <a href="/home&leaving">Flip Flops</a>
                <a href="/home&leaving">Socks</a><br />
                <p className={styles.dropHeadings}>Personal Care & Grooming</p><br />
                <p className={styles.dropHeadings}>Sunglasses & Frames</p><br />
                <p className={styles.dropHeadings}>Watches</p>
              </div>
              <div>
                <p className={styles.dropHeadings}>Sports & Active Wear</p>
                <a href="/">Sports Shoes</a>
                <a href="/">Sports Sandals</a>
                <a href="/">Active T-Shirts</a>
                <a href="/">Track Pants & Shorts</a>
                <a href="/">Tracksuits</a>
                <a href="/">Jackets & Sweatshirts</a>
                <a href="/">Sports Accessories</a>
                <a href="/">Swimwear</a><br />
                <p className={styles.dropHeadings}>Gadgets</p>
                <a href="/">Smart Wearables</a>
                <a href="/">Fitness Gadgets</a>
                <a href="/">Headphones</a>
                <a href="/">Speakers</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Fashion Accessories</p>
                <a href="/">Wallets</a>
                <a href="/">Belts</a>
                <a href="/">Perfumes & Body Mists</a>
                <a href="/">Trimmers</a>
                <a href="/">Deodorants</a>
                <a href="/">Ties, Cufflinks & Pocket Squares</a>
                <a href="/">Accessory Gift Sets</a>
                <a href="/">Caps & Hats</a>
                <a href="/">Mufflers, Scarves & Gloves</a>
                <a href="/">Phone Cases</a>
                <a href="/">Rings & Wristwear</a>
                <a href="/">Helmets</a><br />
                <p className={styles.dropHeadings}>Bags & Backpacks</p><br />
                <p className={styles.dropHeadings}>Luggages & Trolleys</p><br />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdown}>
          <p className={`${styles.dropbtn} ${hover5 && styles.tabStyles}`}>
            BEAUTY
          </p>
          <div
            className={styles.dropdownContent}
            onMouseEnter={() => setHover5(true)}
            onMouseLeave={() => setHover5(false)}
          >
            <div className={styles.dropdownFlex}>
              <div>
                <p className={styles.dropHeadings}>Topwear</p>
                {/* 
                if want to link it to any page use this code
                <Link to="/products/clothing">Clothing</Link>
                 */}
                <Link to="/beauty">T-Shirts</Link>
                <Link to="/beauty">Casual Shirts</Link>
                <Link to="/beauty">Formal Shirts</Link>
                <Link to="/beauty">Sweatshirts</Link>
                <Link to="/beauty">Sweaters</Link>
                <Link to="/beauty">Jackets</Link>
                <Link to="/beauty">Blazers & Coats</Link>
                <Link to="/beauty">Suits</Link>
                <Link to="/beauty">Rain Jackets</Link><br />
                <p className={styles.dropHeadings}>Indian & Festive Wear</p>
                <Link to="/beauty">Kurtas & Kurta Sets</Link>
                <Link to="/beauty">Nehru Jackets</Link>
                <Link to="/beauty">Sherwanis</Link>
                <Link to="/beauty">Dhotis</Link>
              </div>
              <div>
                <p className={styles.dropHeadings}>Bottom Wear</p>
                <a href="/beauty">Jeans</a>
                <a href="/beauty">Casual Trousers</a>
                <a href="/beauty">Formal Trousers</a>
                <a href="/beauty">Track Pants & Joggers</a><br />
                <p className={styles.dropHeadings}>Innerwear & Sleepwear</p>
                <a href="/beauty">Track Pants & Joggers</a>
                <a href="/beauty">Boxers</a>
                <a href="/beauty">Vests</a>
                <a href="/beauty">Sleepwear & Loungewear</a>
                <a href="/beauty">Thermals</a><br />
                <p className={styles.dropHeadings}>Plus Size</p>
                <a href="/beauty">S, M, L, XL, XXl, XXl</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Footwear</p>
                <a href="/beauty">Casual Shoes</a>
                <a href="/beauty">Sports Shoes</a>
                <a href="/beauty">Formal Shoes</a>
                <a href="/beauty">Sneakers</a>
                <a href="/beauty">Sandals & Floaters</a>
                <a href="/beauty">Flip Flops</a>
                <a href="/beauty">Socks</a><br />
                <p className={styles.dropHeadings}>Personal Care & Grooming</p><br />
                <p className={styles.dropHeadings}>Sunglasses & Frames</p><br />
                <p className={styles.dropHeadings}>Watches</p>
              </div>
              <div>
                <p className={styles.dropHeadings}>Sports & Active Wear</p>
                <a href="/">Sports Shoes</a>
                <a href="/">Sports Sandals</a>
                <a href="/">Active T-Shirts</a>
                <a href="/">Track Pants & Shorts</a>
                <a href="/">Tracksuits</a>
                <a href="/">Jackets & Sweatshirts</a>
                <a href="/">Sports Accessories</a>
                <a href="/">Swimwear</a><br />
                <p className={styles.dropHeadings}>Gadgets</p>
                <a href="/">Smart Wearables</a>
                <a href="/">Fitness Gadgets</a>
                <a href="/">Headphones</a>
                <a href="/">Speakers</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Fashion Accessories</p>
                <a href="/">Wallets</a>
                <a href="/">Belts</a>
                <a href="/">Perfumes & Body Mists</a>
                <a href="/">Trimmers</a>
                <a href="/">Deodorants</a>
                <a href="/">Ties, Cufflinks & Pocket Squares</a>
                <a href="/">Accessory Gift Sets</a>
                <a href="/">Caps & Hats</a>
                <a href="/">Mufflers, Scarves & Gloves</a>
                <a href="/">Phone Cases</a>
                <a href="/">Rings & Wristwear</a>
                <a href="/">Helmets</a><br />
                <p className={styles.dropHeadings}>Bags & Backpacks</p><br />
                <p className={styles.dropHeadings}>Luggages & Trolleys</p><br />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdown}>
          <Link
            style={{
              fontSize: "17px",
              textDecoration: "none",
              color: "#282C3F",
            }}
            to="#"
          >
            STUDIO
          </Link>
        </div>
      </div>


      {/* Search bar i shere================================================================= */}



      <div className={styles.navSubDiv3}>
        <Fragment>
          <form className={styles.self_center} >
            <span className={styles.search_div}>
              <button className={styles.searchbtn} ><FiSearch /></button>
              <input type="text" placeholder='Search for products, brands and more'
                className={styles.search} onChange={(e) => handleSearch(e)} id="searchBar" onFocus={() => {
                  setMenuShow(true)
                }} onBlur={() => {
                  setTimeout(()=>{
                    setMenuShow(false)
                  },200)
                }} />
            </span>
          </form>
        </Fragment>
        {
          menuShow && <NavMenu data={search} />
        }
      </div>





      {/* Search bar i shere================================================================= */}

      <div className={styles.navSubDiv4}>

        <div className={styles.dropdown}>

          <p className={`${styles.dropbtn} ${hover1 && styles.tabStyles}`}>
            <FaUserAlt style={{ marginLeft: "15px" }} />
            Profile
          </p>
          <div
            className={styles.dropdownContentProfile}
            onMouseEnter={() => setHover1(true)}
            onMouseLeave={() => setHover1(false)}
          >
            <div className={styles.dropdownFlex}>
              <div style={{ width: "500px" }}>
                <p className={styles.dropHeadings}>Welcome</p>


                {token === null && <Link to="/login"> <button className={styles.loginSignButtom}>Login / SignUp</button> </Link>}
                {token != null && <button className={styles.loginSignButtom} onClick={handleLogout}>Logout</button>}
                <br />
                <p className={styles.dropHeadings}>----------------------</p>
                <Link to="/" >Orders</Link>
                <Link to="/">Wishlist</Link>
                <Link to="/">Gift Cards</Link>
                <Link to="/">Contact Us</Link>
                <Link to="/">Myntra Insider</Link>
                <Link to="/" className={styles.dropHeadings}>----------------------</Link>
                <Link to="/" >Myntra Credit</Link>
                <Link to="/" >Coupons</Link>
                <Link to="/" >Saved VPA</Link>
                <Link to="/" >Saved Cards</Link>
                <Link to="/" >Saved Address</Link>
              </div>

            </div>
          </div>
        </div>
        <Link to="/wishlist">
          <div style={{
            fontSize: "17px",
            textDecoration: "none",
            color: "#282C3F",
          }}><FaRegHeart style={{ marginLeft: "20px" }} />Wishlist</div>
        </Link>
        <Link to="/bag"><div style={{
          fontSize: "17px",
          textDecoration: "none",
          color: "#282C3F",
        }}><FaShoppingBag style={{ marginLeft: "5px" }} />Bag</div></Link>
      </div>
      <div className={styles.navSubDiv5}>
        <SliderNav />
      </div>
    </div>


  );
};

export { Navbar };