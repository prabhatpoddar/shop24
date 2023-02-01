import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethod";
import "./info.css";
import { AiOutlineLineChart } from 'react-icons/ai';


import { BiLineChartDown } from 'react-icons/bi';
// import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function Info() {
  const [amount, setAmount] = useState(0)
  console.log('amount:', amount)



  const getData = () => {
    userRequest.get("/order", {
    }).then(res => {

      res.data.length > 0 && res.data.map((el) => {
        return (
          setAmount(prev => prev + el.amount)

        )
      })

    }).catch(err => {
      console.log('err:', err)
    })
  }
  useEffect(() => {
    getData()

  }, [])

  // const getAmount = () => {
  //   data.length > 0 && data.map((el) => {
  //     return (
  //       setAmount(prev => prev + el.amount)

  //     )
  //   })
  // }


  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{amount}₹</span>
          <span className="featuredMoneyRate">
            -11.4

            <AiOutlineLineChart className="featuredIcon " />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Profit</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{(amount / 100) * 40}₹</span>
          <span className="featuredMoneyRate">
            -1.4
            <AiOutlineLineChart className="featuredIcon " />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{((amount / 100) * 60)}₹</span>
          <span className="featuredMoneyRate">
            +2.4
            <BiLineChartDown className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
