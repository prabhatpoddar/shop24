import MainRoute from "./Components/MainRouts";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Slider from "./Components/Slider/Slider";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  if (
    location.pathname === "/login" ||
    location.pathname === "/otp" ||
    location.pathname === "/loginbyemail"
  ) {
    return (
      <div className="App">
        <div id="container">
          <MainRoute />
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <div id="container">
        <Slider />
        <MainRoute />
      </div>
    </div>
  );
}

export default App;
