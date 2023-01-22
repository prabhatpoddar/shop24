import MainRoute from "./Components/MainRouts";
import Cart from "./Components/Checkout/Cart";
import Footer from "./Components/Footer/Footer";
import MainNavbar from "./Pages/Navbar/MainNavbar";

function App() {
  return (
    <div className="App">
      <MainNavbar/>
      <MainRoute />
      <Footer/>
    </div>
  );
}

export default App;
