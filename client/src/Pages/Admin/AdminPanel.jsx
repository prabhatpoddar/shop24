import React, { useState } from 'react'
import AdminNav from './AdminNav/AdminNav'
import "./AdminPanel.css"
import AdminSlider from './AdminSlider/AdminSlider'
import Dashboard from './Dashboard/Dashboard'

const AdminPanel = () => {
    const [theme, setTheme] = useState(false)
    const [togalDash, setTogalDash] = useState("")




    return (
        <div className={!theme ? "home" : "homeDark"}>
            <AdminNav theme={theme} setTheme={setTheme} setTogalDash={setTogalDash} />
            <div className="homeContainer">
                 <AdminSlider theme={theme} setTheme={setTheme} setTogalDash={setTogalDash} />
                <Dashboard theme={theme} togalDash={togalDash} setTogalDash={setTogalDash} />
            </div>
        </div>
    )
}

export default AdminPanel