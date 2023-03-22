import React, { Fragment, useContext, useState } from 'react'
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { BsBag, BsPerson, BsHeart } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi'
import SliderNav from './SliderNav';
import { publicRequest } from '../../requestMethod';
import NavMenu from './NavMenu';
import { UserContext } from '../../UserContext/UserContext';
import { Button } from '@chakra-ui/react';


const Navbar = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState([])
  const [menuShow, setMenuShow] = useState(false)
  const [{ decodedToken }] = useContext(UserContext)


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
    window.location.reload()
    return navigate("/");
  }
  const handleSearch = (e) => {

    publicRequest.get(`/product/search?search=${e.target.value}`).then((res) => {
      setSearch(res.data.data)
    })
  }


  return (
    <div className={styles.navMainDiv}>

      <div className={styles.navSubDiv5}>
        <SliderNav />
        <Link to="/"> <h4>Shop24</h4></Link>
      </div>
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
                <p className={styles.dropHeadings}>Bed Linen & Furnishing</p>
                {/* 
                if want to link it to any page use this code
                <Link to="/products/clothing">Clothing</Link>
                 */}
                <a href="/home&leaving">Bed Runners</a>
                <a href="/home&leaving">Mattress Protectors</a>
                <a href="/home&leaving">Bedsheets</a>
                <a href="/home&leaving">Bedding Sets</a>
                <a href="/home&leaving">Blankets, Quilts & Dohars</a>
                <a href="/home&leaving">Pillows & Pillow Covers</a>
                <a href="/home&leaving">Bed Covers</a>
                <a href="/home&leaving">Diwan Sets</a>
                <a href="/home&leaving">Chair Pads & Covers</a><br />
                <p className={styles.dropHeadings}>Sofa Covers</p>
                <a href="/home&leaving">Flooring</a>
                <a href="/home&leaving">Floor Runners</a>
                <a href="/home&leaving">Carpets</a>
                <a href="/home&leaving">Floor Mats & Dhurries</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>
                  Door Mats</p>
                <a href="/home&leaving">Bath</a>
                <a href="/home&leaving">Bath Towels</a>
                <a href="/home&leaving">
                  Hand & Face Towels</a>
                <a href="/home&leaving">Beach Towels</a><br />
                <p className={styles.dropHeadings}>Towels Set</p>
                <a href="/home&leaving">Bath Rugs</a>
                <a href="/home&leaving">
                  Bath Robes</a>
                <a href="/home&leaving">Bathroom Accessories</a>
                <a href="/home&leaving">Shower Curtains</a>
                <a href="/home&leaving">Lamps & Lighting</a><br />
                <p className={styles.dropHeadings}>Floor Lamps</p>
                <a href="/">Ceiling Lamps</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Table Lamps</p>
                <a href="/home&leaving">Wall Lamps</a>
                <a href="/home&leaving">Outdoor Lamps</a>
                <a href="/home&leaving">String Lights</a>
                <a href="/home&leaving">Home Décor</a>
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
                <p className={styles.dropHeadings}>Makeup</p>
                {/* 
                if want to link it to any page use this code
                <Link to="/products/clothing">Clothing</Link>
                 */}
                <Link to="/beauty">Lipstick</Link>
                <Link to="/beauty">Lip Gloss</Link>
                <Link to="/beauty">Lip Liner</Link>
                <Link to="/beauty">Mascara</Link>
                <Link to="/beauty">Eyeliner</Link>
                <Link to="/beauty">Kajal</Link>
                <Link to="/beauty">Eyeshadow</Link>
                <Link to="/beauty">Foundation</Link>
                <Link to="/beauty">Primer</Link><br />
                <p className={styles.dropHeadings}>Concealer</p>
                <Link to="/beauty">Compact</Link>
                <Link to="/beauty">
                  Nail Polish</Link>
                <Link to="/beauty">Skincare, Bath & Body</Link>
                <Link to="/beauty">Face Moisturiser</Link>
              </div>
              <div>
                <p className={styles.dropHeadings}>Cleanser</p>
                <a href="/beauty">Masks & Peel</a>
                <a href="/beauty">Sunscreen</a>
                <a href="/beauty">Serum</a>
                <a href="/beauty">Face Wash</a><br />
                <p className={styles.dropHeadings}>Eye Cream</p>
                <a href="/beauty">Lip Balm</a>
                <a href="/beauty">Body Lotion</a>
                <a href="/beauty">Vests</a>
                <a href="/beauty">Body Wash</a>
                <a href="/beauty">Body Scrub</a><br />
                <p className={styles.dropHeadings}>Hand Cream</p>
                <a href="/beauty">Baby Care</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>Masks</p>
                <a href="/beauty">Haircare</a>
                <a href="/beauty">Shampoo</a>
                <a href="/beauty">Conditioner</a>
                <a href="/beauty">Hair Cream</a>
                <a href="/beauty">Hair Oil</a>
                <a href="/beauty">Hair Gel</a>
                <a href="/beauty">Hair Color</a><br />
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
                  setTimeout(() => {
                    setMenuShow(false)
                  }, 400)
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
            <div style={{
              fontSize: "17px",
              textDecoration: "none",
              color: "#282C3F",
            }}><BsPerson style={{ marginLeft: "15px" }} /><p>Profile</p></div>
          </p>
          <div
            className={styles.dropdownContentProfile}
            onMouseEnter={() => setHover1(true)}
            onMouseLeave={() => setHover1(false)}
          >
            <div className={styles.dropdownFlex}>
              <div style={{ width: "500px" }}>
                {
                  token !== null && decodedToken !== null && <>
                    <p className={styles.dropHeadings}>Hello {decodedToken.user.fullName.split(" ")[0]}</p>
                    <p > {decodedToken.user.mobile}</p></>
                }
                {
                  token === null &&
                  <>
                    <p className={styles.dropHeadings}>Welcome</p>
                    <p > To access account and manage orders</p>
                  </>
                }


                {token === null && <Link to="/login"> <Button variant="outline" color="#FF3F6C" className={styles.loginSignButton}>Login / SignUp</Button> </Link>}

                <br />
                <hr />
                <div className={styles.navOrder}>
                  <p className={styles.navOrderLinks} to="/" >Orders</p>
                  <p className={styles.navOrderLinks} to="/wishlist">Wishlist</p>
                  <p className={styles.navOrderLinks} to="/">Gift Cards</p>
                  <p className={styles.navOrderLinks} to="/">Contact Us</p>
                  <p className={styles.navOrderLinks} to="/">Myntra Insider</p>
                </div>
                <hr />
                <div className={styles.navOrder}>
                  <p className={styles.navOrderLinks}>Myntra Credit</p>
                  <p className={styles.navOrderLinks} >Coupons</p>
                  <p className={styles.navOrderLinks} >Saved VPA</p>
                  <p className={styles.navOrderLinks} >Saved Cards</p>
                </div>
                {
                  token !== null && <hr />
                }

                <div className={styles.navOrder}>

                  {
                    token !== null && <p className={styles.navOrderLinks} >Edit Profile</p>
                  }
                  {
                    token !== null && <p className={styles.navOrderLinks} onClick={handleLogout} >Logout</p>
                  }
                </div>

              </div>

            </div>
          </div>
        </div>
        <div className={styles.navDiv6}>
          <Link to="/wishlist">
            <div style={{
              fontSize: "17px",
              textDecoration: "none",
              color: "#282C3F",
            }}><BsHeart style={{ marginLeft: "20px" }} /><p className={styles.NoPhone}>Wishlist</p></div>
          </Link>
          <Link to="/bag"><div style={{
            fontSize: "17px",
            textDecoration: "none",
            color: "#282C3F",
          }}><BsBag style={{ marginLeft: "5px" }} /><p className={styles.NoPhone}>Bag</p></div></Link>

        </div>
      </div>

    </div>


  );
};

export { Navbar };