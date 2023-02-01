import React, { Fragment } from "react";
import gpImg from "./images/googleplay.png";
import apImg from "./images/appleplay.png";
import orImg from "./images/original.png";
import reImg from "./images/return.png";
import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { ImTwitter, ImInstagram } from "react-icons/im";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      {window.screen.width > 1024 ? (
        <Fragment>
          <div className={styles.footerDiv}>
            <div className={styles.footerDiv1}>
              <div className={styles.footerDiv1section}>
                <h1>
                  ONLINE&nbsp;SHOPPING
                </h1>
                <ul>
                  <li>Men</li>
                  <li>Women</li>
                  <li>Kids</li>
                  <li>Home & Living</li>
                  <li>Beauty</li>
                  <li>Gift Cards</li>
                  <li>Myntra Insider</li>
                </ul>
              </div>

              <div className={styles.footerDiv1section}>
                <h1 className="text-sm font-semibold col-span-2">
                  USEFUL LINKS
                </h1>
                <ul className="text-sm text-slate-500 pt-6">
                  <li className="">Contact Us</li>
                  <li className="">FAQ</li>
                  <li className="">T&C</li>
                  <li className="">Terms Of Use</li>
                  <li className="">Track Orders</li>
                  <li className="">Shipping</li>
                  <li className="">Cancellation</li>
                  <li className="">Returns</li>
                  <li className="">Whitehat</li>
                  <li className="">Blog</li>
                  <li className="">Careers</li>
                  <li className="">Privacy Policy</li>
                  <li className="">Site Map</li>
                  <li className="">Corporate Information</li>
                </ul>
              </div>

              <div className={styles.footerDiv1section}>
                <h1 className="text-sm font-semibold col-span-2">
                  EXPERIENCE MYNTRA APP ON MOBILE
                </h1>
                <div className={styles.footerDiv1sectionImg}>
                  <img src={gpImg} alt="" />
                  <img src={apImg} alt="" />
                </div>
                <h1 className="text-sm font-semibold col-span-2 mt-6">
                  KEEP IN TOUCH
                </h1>
                <br />
                <div style={{ display: "flex", gap: "20px" }}>
                  <span className="text-2xl text-[grey] mr-4">
                    <AiFillFacebook />
                  </span>
                  <span className="text-2xl text-[grey] mr-4">
                    <ImTwitter />
                  </span>
                  <span className="text-2xl text-[grey] mr-4">
                    <AiFillYoutube />
                  </span>
                  <span className="text-2xl text-[grey] mr-4">
                    <ImInstagram />
                  </span>
                </div>
              </div>
              <div className={styles.footerDiv1section}>
                <div className="grid grid-cols-6 ">
                  <div className="col-span-1">
                    <img src={orImg} alt="" className="w-14" />
                  </div>
                  <div className="col-span-5">
                    <span className="font-semibold">100% ORIGINAL</span>{" "}
                    guarantee <br />
                    for all products at myntra.com
                  </div>
                </div>
                <br />
                <div className="grid grid-cols-6 ">
                  <div className="col-span-1">
                    <img src={reImg} alt="" className="w-12" />
                  </div>
                  <div className="col-span-5">
                    <span className="font-semibold">Return within 30days</span>{" "}
                    of
                    <br />
                    receiving your order
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footerDiv2}>
              <h1 className='font-semibold text-black mb-4 mt-4 text-sm'>POPULAR SEARCHES</h1>
              <br />
              <h1>
                Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees
              </h1>
            </div>
            <br />
            <div className={styles.footerDiv3}>
              <span className='absolute right-0'> © 2022 www.myntra.com. All rights reserved.</span>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className="w-10/12 mx-auto font1 mt-4">
            <div className="w-full">
              <h1 className=" text-base font-semibold ">SHOP&nbsp;&nbsp;FOR</h1>
              <ul className=" text-sm text-slate-500 pt-2 flex ">
                <li className="mr-2">Men</li>|
                <li className="mr-2 ml-2">Women</li>|
                <li className="mr-2 ml-2">Kids</li>|
                <li className="mr-2 ml-2">Home & Living</li>|
                <li className="mr-2 ml-2">Beauty</li>
              </ul>
            </div>

            <div className="mt-4">
              <h1 className="text-base font-semibold ">
                EXPERIENCE MYNTRA APP ON MOBILE
              </h1>
              <div className="grid grid-cols-2 gap-4 pt-2 w-[80%]">
                <img src={gpImg} alt="" />
                <img src={apImg} alt="" />
              </div>
              <h1 className="text-base font-semibold mt-4">KEEP IN TOUCH</h1>

              <div className="flex mt-2">
                <span className="text-3xl text-[grey] mr-4 ">
                  <AiFillFacebook />
                </span>
                <span className="text-3xl text-[grey] mr-4 ">
                  <ImTwitter />
                </span>
                <span className="text-3xl text-[grey] mr-4 ">
                  <AiFillYoutube />
                </span>
                <span className="text-3xl text-[grey] mr-4 ">
                  <ImInstagram />
                </span>
              </div>
            </div>

            <div className="mt-4 w-full">
              <h1 className="text-base font-semibold">USEFUL LINKS</h1>
              <div className="text-sm text-slate-500 pt-2 leading-7 w-[100%] overflow-clip">
                <Link to="/">Contact Us</Link>|
                <Link to="/" >FAQ</Link>|
                <Link to="/" >T&C</Link>|
                <Link to="/" >Terms Of Use</Link>|
                <Link to="/" >Track Orders</Link>|
                <Link to="/" >Shipping</Link>|
                <Link to="/" >Cancellation</Link>|
                <Link to="/" >Returns</Link>|
                <Link to="/" >Whitehat</Link>|
                <Link to="/" >Blog</Link>|
                <Link to="/" >Careers</Link>|
                <Link to="/" >Privacy Policy</Link>|
                <Link to="/" >Site Map</Link>|
                <Link to="/" >Corporate Information</Link>
              </div>
            </div>

            <div className="flex mx-auto text-slate-400 mt-4 mb-20">
              <div className=" text-xs float-left">
                {" "}
                © 2022 www.myntra.com All rights reserved
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export { Footer };
