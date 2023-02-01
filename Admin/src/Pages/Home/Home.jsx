import React from 'react'
import "./Home.css"
import { userData } from '../../dummu'
import Info from '../../Components/info/Info'
import Chart from '../../Components/chart/Chart'
import Small from '../../Components/Small/Small'


const Home = () => {

  return (
    <div className="home">
    <Info />
    <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
    <div className="homeWidgets">
      <Small/>
     
    </div>
  </div>
  )
}

export default Home