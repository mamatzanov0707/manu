import React from "react";
import "./Header.scss";
import {CiSearch} from "react-icons/ci"
import { Link } from "react-router-dom";
import AboutUs from "../../page/AboutUs/AboutUs";
import Happy from "../../page/Happy/Happy";

const Header = () => {
    
  const scrollToComponent = (componentId) => {
    const element = document.getElementById(componentId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <h1>Restaurant</h1>
          <nav>
            <a ><Link to="/">interior</Link></a>
            <a onClick={()=> scrollToComponent("aboutUs")}>About Us</a>
            <a> <Link to="/menu">Menu</Link></a>
            <a onClick={()=> scrollToComponent("happy")}>Contacts</a>
          </nav>
          <div className="search">
            <CiSearch
              className="icon"
              style={{ color: "white", width: "22px", height: "22px" }}
            />
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
