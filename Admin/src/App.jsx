import MainRoute from "./Components/MainRouts"
import Navbar from "./Components/Navbar/Navbar"
import "./App.css"
import Slider from "./Components/Slider/Slider"


function App() {


  return (
    <div className="App">
      <Navbar/>
      <div id="container">
        <Slider/>
        <MainRoute/>
      </div> 
       
    </div>
  )
}

export default App
