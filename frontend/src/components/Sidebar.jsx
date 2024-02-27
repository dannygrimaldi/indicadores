import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo_hsbc.svg";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link, useLocation, /* useNavigate */ } from 'react-router-dom'

const Sidebar = ({ setSelectedView }) => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggleSidebar = () => {
    setExpanded(!expanded);
    if (!expanded) {
      setSelectedView("dashboard");
    }
  };

  const sidebarVariants = {
    true: {
      left: '0'
    },
    false: {
      left: '-60%'
    }
  };

  return (
    <>
      <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={handleToggleSidebar}>
        <UilBars />
      </div>
      <motion.div className='sidebar' variants={sidebarVariants} animate={windowWidth <= 768 ? `${expanded}` : ''}>
        {/* logo */}
        <Link to='/'>
          <div className="logo">
            <img src={Logo} alt="logo" />
            <span>HSBC</span>
          </div>
        </Link>
  
        <div className="menu">
          <ul>
            {SidebarData.map((item, index) => (
              <li key={index} className={selected === index ? "menuItem active" : "menuItem"}>
                <Link to={item.Path}>
                  <item.icon />
                  <span>{item.heading}</span>
                </Link>
              </li>
            ))}
          </ul>
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
