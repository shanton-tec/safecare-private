import React from "react";
import {
  FaHome,
  FaTint,
  FaPills,
  FaHeartbeat,
  FaUserMd,
  FaRobot,
  FaBell,
  FaMapMarkerAlt,
  FaExclamationTriangle,
  FaChartBar,
  FaUser,
  FaSmile,
  FaHeart,
  FaCog,
  FaSignOutAlt,
  FaMusic,
  FaMicrochip
} from "react-icons/fa";

import "./Sidebar.css";
import { useLanguage } from "../context/LanguageContext";

function Sidebar({
  activePage,
  setActivePage,
  logout
}) {

  const { t } = useLanguage();

  const menu = [

    {
      icon:<FaHome/>,
      text:t.dashboard,
      page:"home"
    },

    {
      icon:<FaHeartbeat/>,
      text:t.health,
      page:"health"
    },

    {
      icon:<FaMicrochip/>,
      text:"Hardware",
      page:"hardware"
    },

    {
      icon:<FaTint/>,
      text:t.water,
      page:"water"
    },

    {
      icon:<FaPills/>,
      text:t.medicine,
      page:"medicine"
    },

    {
      icon:<FaUserMd/>,
      text:t.doctor,
      page:"doctor"
    },

    {
      icon:<FaExclamationTriangle/>,
      text:t.emergency,
      page:"sos"
    },

    {
      icon:<FaMapMarkerAlt/>,
      text:t.location,
      page:"location"
    },

    {
      icon:<FaBell/>,
      text:t.notification,
      page:"notifications"
    },

    {
      icon:<FaRobot/>,
      text:t.chatbot,
      page:"ai"
    },

    {
      icon:<FaChartBar/>,
      text:t.reports,
      page:"reports"
    },

    {
      icon:<FaSmile/>,
      text:t.mood,
      page:"mood"
    },

    {
      icon:<FaHeart/>,
      text:t.health,
      page:"tips"
    },

    {
      icon:<FaMusic/>,
      text:t.entertainment,
      page:"entertainment"
    },

    {
      icon:<FaUser/>,
      text:t.profile,
      page:"profile"
    },

    {
      icon:<FaCog/>,
      text:t.settings,
      page:"settings"
    }

  ];

  return (

<div className="sidebar">

<div className="logo">

<div className="logo-circle">

🛡️

</div>

<h1>

ElderShield

</h1>

<p>

{t.goodMorning}

</p>

</div>

<div className="menu">

{

menu.map((item)=>(

<button

key={item.page}

className={
activePage===item.page
?
"active"
:
""
}

onClick={()=>
setActivePage(item.page)
}

>

{item.icon}

<span>

{item.text}

</span>

</button>

))

}

</div>

<div className="logout">

<button
onClick={logout}
>

<FaSignOutAlt/>

<span
style={{
marginLeft:"10px"
}}
>

{t.logout}

</span>

</button>

</div>

</div>

  );

}

export default Sidebar;