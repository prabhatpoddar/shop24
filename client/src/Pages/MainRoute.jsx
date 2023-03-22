import { Navigate, Route, Routes } from "react-router-dom";
import Mens from "./Products/Mens/Mens";
import Womens from "./Products/Womens/Womens";
import Kids from "./Products/Kids/Kids";
import Home from "./Home";
import SinglePage from "./singlepage/Singlepage";
import Bag from "./Bag/Bag";
import Login from "./Login/Login";
import LoginByEmail from "./Login/LoginByEmail";
import Signup from "./Login/Signup";
import WishlistCart from "./WishList/WishlistCart";
import HomeAndLeaving from "./Products/Home&Living/HomeAndLeaving";
import Beauty from "./Products/Beauty/Beauty";

const MainRoute = () => {

  const Token = (child) => {
    let token = JSON.parse(localStorage.getItem("token"));
    if (token != null) {
      return child;
    } else {
      return <Navigate to="/login" />
    }
  };
return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/mens" element={<Mens />} />
    <Route path="/womens" element={<Womens />} />
    <Route path="/kids" element={<Kids />} />
    <Route path="/home&leaving" element={<HomeAndLeaving />} />
    <Route path="/beauty" element={<Beauty />} />
    <Route path="/login" element={<Login />} />
    <Route path="/loginbyemail" element={<LoginByEmail />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/singlepage/:direction" element={Token(<SinglePage />)} />
    <Route path="/bag" element={Token(<Bag />)} />
    <Route path="/wishlist" element={Token(<WishlistCart />)} />
  </Routes>
);
};

export default MainRoute;
