import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link, NavLink, useNavigate } from "react-router-dom"; // Importa useNavigate desde react-router-dom

const Sidebar = ({ setSelectedView }) => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const navigate = useNavigate(); // Utiliza useNavigate

  const handleToggleSidebar = () => {
    setExpanded(!expanded);
    if (!expanded) {
      setSelectedView("dashboard");
    }
  };

  const handleToggleView = (index, heading, page) => {
    setSelected(index);
    setSelectedView(heading.toLowerCase());
    navigate(page); // Utiliza la función navigate para cambiar la URL
  };

  const sidebarVariants = {
    true: {
      left: '0'
    },
    false: {
      left: '-60%'
    }
  };

  console.log(window.innerWidth);

  return (
    <>
      <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={handleToggleSidebar}>
        <UilBars />
      </div>
      <motion.div className='sidebar'
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          HSBC
        </span>
      </div>

        <div className="menu">
          {SidebarData.map((item, index) => (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => handleToggleView(index, item.heading, item.Link)} >
              <item.icon />
              
              <Link to={item.Link}>{item.heading}</Link>

 

            </div>
          ))}
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
