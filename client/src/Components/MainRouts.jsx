import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminPanel from "../Pages/Admin/AdminPanel";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminPanel/>}/>


      {/* fun(el)=>
      {axios
        .post("url", el)
        .then((res) => {
          console.log(res);
        })
        .catch()} */}
      {/* axios.post("url",{}).then((res)=>{console.log(res)}).catch() */}
    </Routes>
  );
};

export default MainRoute;
