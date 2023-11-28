import PropTypes from "prop-types";
import React from "react";
import SidebarContent from "../Sidebar/SidebarContent";
import { Link } from "react-router-dom";
import logoLightPng from "../../assets/images/ippopay_white.svg";
import logoLightSvg from "../../assets/images/logo-light.svg";
const Sidebar = () => {
  return (
    <React.Fragment>
      <div className="vertical-menu">
        <div className="navbar-brand-box">
          <Link to="/" className="logo logo-dark">
            <span className="logo-sm">
              <img src={logoLightSvg} alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src={logoLightPng} alt="" height="32" />
            </span>
          </Link>
          <Link to="/" className="logo logo-light">
            <span className="logo-sm">
              <img src={logoLightSvg} alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src={logoLightPng} alt="" height="32" />
            </span>
          </Link>
        </div>
        <div data-simplebar className="h-100">
          <SidebarContent />
        </div>
        <div className="sidebar-background"></div>
      </div>
    </React.Fragment>
  );
};
export default Sidebar;
