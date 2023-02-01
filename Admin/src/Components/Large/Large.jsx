import { userRequest } from "../../../../client/src/requestMethod";
import "./Large.css";
import axios from "axios"
import { useState } from "react";

export default function Large() {
  const [data, setData] = useState([])
  console.log('data:', data)

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  const getData = () => {
    userRequest.get("https://plum-jay-wear.cyclic.app/order", {
      headers: {
        "token": localStorage.getItem("token")
      }
    }).then(res => {
      setData(res.data)

    }).catch(err => {
      console.log('err:', err)

    })
  }
  return (
    <div className="widgetLg" onClick={getData}>
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
       {data.length>0 && data.map(el=>{
        return(
          <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        )
       })}



      </table>
    </div>
  );
}
