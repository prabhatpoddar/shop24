import "./small.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { useEffect } from "react";
import { userRequest } from "../../requestMethod";
import { useState } from "react";


export default function Small() {
  const [data, setData] = useState([])
  useEffect(() => {
    userRequest.get("/users?limit=5").then(res => {
      setData(res.data)

    }).catch(err => {
      console.log('err:', err)


    })
  }, [])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {
          data.length > 0 && data.map((el)=>{
            return (
              <li className="widgetSmListItem" key={el._id}>
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">Anna Keller</span>
                <span className="widgetSmUserTitle">Software Engineer</span>
              </div>
              <button className="widgetSmButton">
                <AcUnitIcon className="widgetSmIcon" />
                Display
              </button>
            </li>
            )
          })
        }
      
       
      </ul>
    </div>
  );
}
