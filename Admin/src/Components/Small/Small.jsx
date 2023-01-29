import "./small.css";
// import AcUnitIcon from '@mui/icons-material/AcUnit';
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
                src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{el.fullName}</span>
                <span className="widgetSmUserTitle">{el.email}</span>
              </div>
              <button className="widgetSmButton">
                {/* <AcUnitIcon className="widgetSmIcon" /> */}
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
