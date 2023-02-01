import { Navigate, Route, Routes } from "react-router-dom";
import Mens from "./Products/Mens/Mens";
import Womens from "./Products/Womens/Womens";
import Kids from "./Products/Kids/Kids";
import Home from "./Home";
import SinglePage from "./singlepage/Singlepage";
import Bag from "./Bag/Bag";
import Login from "./Login/Login";
import LoginByEmail from "./Login/LoginByEmail";
import Otp from "./Login/Otp";
import Signup from "./Login/Signup";
import WishlistCart from "./WishList/WishlistCart";
const MainRoute = () => {
  const Token=(child)=>{
    let token=JSON.parse(localStorage.getItem("token"));
    if(token!=null){
      return child;
    } else {
      alert("Login First");
      return <Navigate to="/login" />
    }
  };
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/mens" element={<Mens />} />
      <Route path="/womens" element={<Womens />} />
      <Route path="/kids" element={<Kids/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/loginbyemail" element={<LoginByEmail />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/signup" element={<Signup />} />
      
      <Route path="/singlepage/:direction" element={<SinglePage />} />
      {/* <Route path="/bag" element={<Token><Bag/></Token>} /> */}
      <Route path="/bag" element={<Bag/>} />
      <Route path="/wishlist" element={<WishlistCart/>} />
    </Routes>
  );
};

export default MainRoute;
