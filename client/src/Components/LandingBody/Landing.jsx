import React from "react";
import styles from "./Landing.module.css";
import { VStack, Box, HStack, Grid, GridItem, Link, } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import box1 from "./box1.png";
import box2 from "./box2.PNG";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { LazyLoadImage } from 'react-lazy-load-image-component';


const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};
const slideImages = [
  {
    url: "https://github.com/Raj210Kumari/myntra-project-images/blob/master/slider_Img/slider1.png?raw=true"
  },
  {
    url: "https://github.com/Raj210Kumari/myntra-project-images/blob/master/slider_Img/slider2.png?raw=true"
  },
  {
    url: "https://github.com/Raj210Kumari/myntra-project-images/blob/master/slider_Img/slider3.png?raw=true"
  },
  {
    url: "https://github.com/Raj210Kumari/myntra-project-images/blob/master/slider_Img/slider4.png?raw=true"
  },
  {
    url: "https://github.com/Raj210Kumari/myntra-project-images/blob/master/slider_Img/slider5.png?raw=true"
  },
  {
    url: "https://github.com/Raj210Kumari/myntra-project-images/blob/master/slider_Img/slider6.png?raw=true"
  }
]

const Landing = () => {
  return (
    <div className={styles.landingDiv}>
      <VStack spacing={4} align="stretch">
        <Box
          h="500px"
          // bg="yellow.200"

          className={styles.landingDivBox1}
        >
          <HStack justifyContent="center" p="50px">
            <Box w="20%" h="400px" bg="#d3d1d1">
              <button className={styles.landingDivBox1Button}>
                <p>FLAT</p>
                <h1>70%OFF</h1>
              </button>
              <br />
              <button className={styles.landingDivBox1Button}>
                <p>FLAT</p>
                <h1>80%OFF</h1>
              </button>
              <br />
              <button className={styles.landingDivBox1Button}>
                <p>FLAT</p>
                <h1>60%OFF</h1>
              </button>
              <br />
            </Box>
            <Box w="50%" h="400px" bg="tomato">
              {/* <Navigate to="/mens" /> */}
              <img
                src={box1}
                alt="salebanner"
                className={styles.landingDivBox1img}
              />
            </Box>
            <Box w="20%" h="400px" bg="#d3d1d1">
              <button className={styles.landingDivBox1Button}>
                <p>HALF</p>
                <h1>PRICE</h1>
                <h6>STORE</h6>
              </button>
              <br />
              <button className={styles.landingDivBox1Button}>
                <p>UNDER</p>
                <h1>499</h1>
                <h6>STORE</h6>
              </button>
              <br />
              <button className={styles.landingDivBox1Button}>
                <p>FLAT</p>
                <h1>400 OFF</h1>
                <h6>+Free Shipping On 1st Order</h6>
              </button>
              <br />
            </Box>
          </HStack>
        </Box>
        <Box className={styles.landingDivBox2}>
          <button>
            <img src={box2} alt="omgSale" />
          </button>
          <p>LOWEST PRICE ON THE BEST BRANDS</p>
          <button>
            View All
            <ChevronRightIcon fontSize="24px" />
          </button>
        </Box>
        <Box className={styles.Slider}>
          <div className="slide-container">
            <Slide>
              {slideImages.map((slideImage, index) => (
                <div key={index}>
                  <div
                    style={{
                      ...divStyle,
                      backgroundImage: `url(${slideImage.url})`,
                    }}
                    className="SlideDiv"
                  >
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </Box>
        <Box>
          <Box h="100px" marginBottom="10px">
            <h1 className={styles.dealOfDay}>DEAL OF THE DAY</h1>
          </Box>
          <Box h="300px">
            <Grid
            className={styles.eightDiv}
            >
              <GridItem colSpan={1}>
                <Link to='/products'><LazyLoadImage effect='blur' src="https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/17/49939a83-5bf1-4c78-b55d-40d7545f843e1660744474034-Kurtas--4-.jpg" alt="" className="min-h-[200px]" /></Link>
              </GridItem>
              <GridItem colSpan={1}>
                <Link to='/products'><LazyLoadImage effect='blur' src="https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/21/ff83d8ee-ccc4-410d-a984-7261fc24e6621674274331196-SHOP-TILL-YOU-DROP.jpg" alt="" className="min-h-[200px]" /></Link>
              </GridItem>
              <GridItem colSpan={1}>
                <Link to='/products'><LazyLoadImage effect='blur' src="https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/17/d5f885c5-4a54-4634-81da-6333aa51c1a11660744537981-Dresses--13-.jpg" alt="" className="min-h-[200px]" /></Link>

              </GridItem>
              <GridItem colSpan={1}>
                <Link to='/products'><LazyLoadImage effect='blur' src="https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/17/ca8aa842-a6ed-4c53-b85a-5d7551a650121660744817501-Work-Ready-Shoes--1-.jpg" alt="" className="min-h-[200px]" /></Link>

              </GridItem>
              <GridItem colSpan={1}>
                <Link to='/products'><LazyLoadImage effect='blur' src="https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/17/9e19d40a-6720-4d62-92e0-32cd1ee6bee91660744897243-Flats---Heels--3-.jpg" alt="" className="min-h-[200px]" /></Link>

              </GridItem>
              <GridItem colSpan={1}>
                <Link to='/products'><LazyLoadImage effect='blur' src="https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/17/0e56c483-33e8-4ea5-bae0-96020b7b31401660744930158-Dinnerware---Kitchenware.jpg" alt="" className="min-h-[200px]" /></Link>

              </GridItem>
              <GridItem colSpan={1}>
                <Link to='/products'><LazyLoadImage effect='blur' src="https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/17/948bd0a5-5b50-4b1e-93cc-234a9be8cfe11660744976622-Accessories--2-.jpg" alt="" className="min-h-[200px]" /></Link>

              </GridItem>
              <GridItem colSpan={1}>
                <Link to='/products'><LazyLoadImage effect='blur' src="https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/17/ffa236ca-da08-4fb8-bec3-9b4950c943851660745008808-KAMA.jpg" alt="" className="min-h-[200px]" /></Link>

              </GridItem>
            </Grid>
          </Box>
        </Box>
        <Box>
          <div className={styles.exclusiveDiv}>
            <h1>BEST OF MYNTRA EXCLUSIVE BRANDS</h1>
            <div className={styles.links1}>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://raw.githubusercontent.com/Vikas-0-Verma/MyntraClone/main/frontend/src/components/images/a5.webp" alt="" className="min-h-[200px]" /></Link>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://raw.githubusercontent.com/Vikas-0-Verma/MyntraClone/main/frontend/src/components/images/a2.webp" alt="" className="min-h-[200px]" /></Link>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://raw.githubusercontent.com/Vikas-0-Verma/MyntraClone/main/frontend/src/components/images/a1.webp" alt="" className="min-h-[200px]" /></Link>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://raw.githubusercontent.com/Vikas-0-Verma/MyntraClone/main/frontend/src/components/images/a3.webp" alt="" className="min-h-[200px]" /></Link>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://raw.githubusercontent.com/Vikas-0-Verma/MyntraClone/main/frontend/src/components/images/a3.webp" alt="" className="min-h-[200px]" /></Link>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://raw.githubusercontent.com/Vikas-0-Verma/MyntraClone/main/frontend/src/components/images/a4.webp" alt="" className="min-h-[200px]" /></Link>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://raw.githubusercontent.com/Vikas-0-Verma/MyntraClone/main/frontend/src/components/images/a6.webp" alt="" className="min-h-[200px]" /></Link>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://raw.githubusercontent.com/Vikas-0-Verma/MyntraClone/main/frontend/src/components/images/a7.webp" alt="" className="min-h-[200px]" /></Link>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://raw.githubusercontent.com/Vikas-0-Verma/MyntraClone/main/frontend/src/components/images/a8.webp" alt="" className="min-h-[200px]" /></Link>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://raw.githubusercontent.com/Vikas-0-Verma/MyntraClone/main/frontend/src/components/images/a9.webp" alt="" className="min-h-[200px]" /></Link>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://raw.githubusercontent.com/Vikas-0-Verma/MyntraClone/main/frontend/src/components/images/a10.webp" alt="" className="min-h-[200px]" /></Link>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://raw.githubusercontent.com/Vikas-0-Verma/MyntraClone/main/frontend/src/components/images/a11.webp" alt="" className="min-h-[200px]" /></Link>

            </div>
          </div>
        </Box>
        <Box>
          <div className={styles.exclusiveDiv1}>
            <h1>NEW IN TOP BRANDS</h1>
            <div className={styles.links1}>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/1aaf5e6a-2978-4ed8-9634-1559f530d73b1645860227457-SS22-BestOfBrands-H_M.jpg" alt="" className="min-h-[200px]" /></Link>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/3ce3c5e7-6060-4b15-b80b-6ddcd19d385a1645860227491-SS22-BestOfBrands-Max.jpg" alt="" className="min-h-[200px]" /></Link>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/ae3f2d8b-4f02-40ab-8233-d9ab9c7be4941645860227438-SS22-BestOfBrands-CKJeans.jpg" alt="" className="min-h-[200px]" /></Link>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/426cb519-be57-4970-b23c-edb9e442cb761645860227551-SS22-BestOfBrands-W.jpg" alt="" className="min-h-[200px]" /></Link>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/823d5fd5-48e6-4eb1-bd66-1ea70306275a1645860227498-SS22-BestOfBrands-Metro.jpg" alt="" className="min-h-[200px]" /></Link>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/fd730d26-ff9d-41e5-af2e-b20f71757b5f1645779089335-BestOfBrands-Nike.jpg" alt="" className="min-h-[200px]" /></Link>
            </div>
          </div>
        </Box>
        <Box>
          <div className={styles.exclusiveDiv1}>
            <h1>COLORS OF THE SEASON </h1>
            <div className={styles.links1}>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/53a0e7bc-64e7-4fb3-94fd-a1ada51fbefa1647516450800-SS22-Colours-Metallic-Hues.jpg" alt="" className="min-h-[200px]" /></Link>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/17/a6ef0785-eb3c-4726-a6ba-c09f6a44379c1647516450782-SS22-Colours-Elegant-Olive.jpg" alt="" className="min-h-[200px]" /></Link>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/3b1d43f4-46bf-4e3f-903b-ec5ca5c2bac91645860983331-SS22-Colours-Mens-BreezyWhite.jpg" alt="" className="min-h-[200px]" /></Link>
            </div>
          </div>
        </Box>

        <Box>
          <div className={styles.exclusiveDiv1}>
            <h1>TRENDING OUTFITS BY INFLUENCER</h1>
            <div className={styles.links1}>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/0d7a22b9-e201-44db-ba04-6dfba8ebd5061647418012721-Studiocontent-HPCarousel-Women-WesternWear.jpg" alt="" className="min-h-[200px]" /></Link>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/d8bee915-9dbd-4cbb-9562-896dd16afdf31647418012563-Studiocontent-HPCarousel-Men-BeyondBasicsCasulaWear.jpg" alt="" className="min-h-[200px]" /></Link>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/fa1a37d5-db35-4df5-9f3b-dfeebf9a22bd1647418012703-Studiocontent-HPCarousel-Women-IndianWearGuide.jpg" alt="" className="min-h-[200px]" /></Link>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/843d4a44-833a-4179-a5a2-7f8c52bb1ef71647418012580-Studiocontent-HPCarousel-Men-FootwearFavouritesjpg.jpg" alt="" className="min-h-[200px]" /></Link>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/ce751fad-7e3a-456d-87cd-457c6de7fccc1647418012597-Studiocontent-HPCarousel-Men-FormalWear.jpg" alt="" className="min-h-[200px]" /></Link>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/0b6937a5-cf76-49c6-a3ab-551b7a17fafa1647418012686-Studiocontent-HPCarousel-Women-GymWear.jpg" alt="" className="min-h-[200px]" /></Link>
              <Link to='/products'><LazyLoadImage effect='blur' src="https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/16/3edddaf4-c192-4651-966d-6b8e04fa309b1647418012668-Studiocontent-HPCarousel-Women-FormalWear.jpg" alt="" className="min-h-[200px]" /></Link>
            </div>
          </div>
        </Box>
      </VStack>
    </div>
  );
};

export { Landing };
