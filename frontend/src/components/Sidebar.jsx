import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo_hsbc.svg";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link /*, useLocation,  useNavigate */ } from 'react-router-dom'


const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left: '0'
    },
    false: {
      left: '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpaned(!expanded)}>
        <UilBars />
      </div>
      <motion.div className='sidebar'
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      >
        {/* logo */}
        <Link to='/' className="link" >
          <div className="logo">
            <img src={Logo} alt="logo" />
            <span>HSBC</span>
          </div>
        </Link>

        <div className="menu">
          {SidebarData.map((item, index) => {
            return (

              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <Link to={item.Path} className="link">
                  <div className="link-content">
                    <item.icon />
                    <span>{item.heading}</span>
                  </div>
                </Link>

              </div>
            );
          })}
          {/* signoutIcon */}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;

