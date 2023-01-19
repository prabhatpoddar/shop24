import React from 'react'
import { userData } from '../../../Dummydata'
import Chart from '../../Components/Chart/Chart'
import Info from '../../Components/Info/Info'

const Home = () => {
  return (
    <div>
        <Info/>
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      
    </div>
  )
}

export default Home
