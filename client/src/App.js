import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import MainRoute from "./Pages/MainRoute";
import ReactGa from "react-ga";

const trackingID = "G-60GMFP4FBM";
ReactGa.initialize(trackingID);

function App() {
  return (
    <div className="App">
      <MainRoute />
      <Footer />
    </div>
  );
}

export default App;
