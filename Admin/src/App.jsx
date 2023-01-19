import MainRoute from "./Components/MainRouts"
import Navbar from "./Components/Navbar/Navbar"
import "./App.css"
import Slider from "./Components/Slider/Slider"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProductAdmin } from "./Redux/UserRedux/action"

function App() {
  const dispatch=useDispatch()
  const data=useSelector(state=>state.userReducer.products)
  console.log('data:', data)
  useEffect(() => {
    dispatch(getProductAdmin("user"))

}, [dispatch])

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
