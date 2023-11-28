import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, } from "reactstrap";
import logo from "../assets/images/logo.svg"
import user1 from "./../assets/images/surendar.jpeg";
import logoLightSvg from "../assets/images/logo-light.svg";
import sidebarMenu from "../data/SidebarData";
import {ActionTypes} from "../redux/constants/actionTypes"
import RightSidebar from "./RightSidebar";
import { useDispatch, useSelector } from 'react-redux';
const Header = () => {
  let location = useLocation();
  const { showRight } = useSelector((state) => state);
  const dispatch = useDispatch();
  const updateState = (actionType, value) => () => {
    dispatch({ type: actionType, payload: value });
    return Promise.resolve();
  }
  const [menu, setMenu] = useState(false);
  function tToggle() {
    let body = document.body;
    if (window.screen.width <= 998) {
      body.classList.toggle("sidebar-enable");
    } else {
      body.classList.toggle("vertical-collpsed");
      body.classList.toggle("sidebar-enable");
    }
  }
  useEffect(() => {

  }, [showRight.showRightSidebar])
  const showRightSidebarAction = () => {
    manageBodyClass("right-bar-enabled", "add");
    dispatch(updateState(ActionTypes.SHOW_RIGHT_SIDEBAR, { showRightSidebar: !showRight.showRightSidebar }))
  }
  const manageBodyClass = (cssClass, action = "toggle") => {
    switch (action) {
      case "add":
        if (document.body) document.body.classList.add(cssClass);
        break
      case "remove":
        if (document.body) document.body.classList.remove(cssClass);
        break
      default:
        if (document.body) document.body.classList.toggle(cssClass);
        break
    }
    return true
  }
  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex align-items-center">
            <div className="navbar-brand-box d-lg-none d-md-block">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logo} alt="" height="22" />
                </span>
              </Link>

              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  <img src={logoLightSvg} alt="" height="22" className="img-filter-icon" />
                </span>
              </Link>
            </div>
            <button
              type="button"
              onClick={() => {
                tToggle();
              }}
              className="btn btn-sm px-3 font-size-16 header-item "
              id="vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars" />
            </button>
            <div className="header_text">
              {location.pathname === "/profile" && "Profile"}
              {location.pathname === "/settings" && "Settings"}
              {location.pathname === "/dashboard" && "Dashboard"}
              {location.pathname.includes("/storemerchant") && "Merchant List"}
              {location.pathname.includes("/storelist") && "Store List"}
              {location.pathname.includes("/subuserlist") && "SubUser list"}
              {location.pathname.includes("/submerchantlist") && "SubMerchant list"}
              {location.pathname.includes("/vpalist") && "Vpa list"}
              {location.pathname.includes("/banklist") && "Bank list"}
              {location.pathname.includes("/transaction") && "Transaction List"}
              {location.pathname.includes("/upitransaction") && "UPI Transaction"}
              {location.pathname.includes("/paylinktransaction") && "Paylink Transaction"}
              {location.pathname.includes("/manualtransaction") && "Manual Transaction"}
              {location.pathname.includes("/settlementtransaction") && "Settlement Transaction"}
              {location.pathname.includes("/merchants") && "Merchants"}
              {location.pathname.includes("/generateqrmerchant") && "Generate QR Merchant"}
              {location.pathname.includes("/merchantqrrequest") && "Merchant Qr Request"}
              {location.pathname.includes("/blockedmerchants") && "Blocked Merchants"}
              {location.pathname.includes("/subadmins") && "Sub Admin"}
              {location.pathname.includes("/categories") && "Categories"}
              {location.pathname.includes("/banks") && "Banks"}
              {location.pathname.includes("/managementpaylink") && "Paylinks"}
              {location.pathname.includes("/disputes") && "Disputes"}
              {location.pathname.includes("/pushnotification") && "Push Notification"}
              {location.pathname.includes("/payouts") && "Payouts"}
              {location.pathname.includes("/approvalpaylinks") && "Paylinks"}
              {location.pathname.includes("/bankapprove") && "Bank Approve"}
              {location.pathname.includes("/personal") && "Personal"}
              {location.pathname.includes("/shop") && "Shop"}
              {location.pathname.includes("/inventory") && "Inventory"}

              {/* {sidebarMenu.map((item, index) => {
                if (item.childrens) {
                  return (
                    <>
                      {item.childrens.map((child, m) => <>
                        {location.pathname === (child.path) ? (child.title) : ""}
                      </>
                      )}
                    </>
                  )
                }
                else {
                  return (
                    <>
                      {location.pathname === (item.path) ? (item.title) : ""}
                    </>
                  )
                }
              })} */}
            </div>

          </div>
          <div className="d-flex">
            <Dropdown
              isOpen={menu}
              toggle={() => setMenu(!menu)}
              className="d-inline-block"
            >
              <DropdownToggle
                className="btn header-item "
                id="page-header-user-dropdown"
                tag="button"
              >
                <img
                  className="rounded-circle header-profile-user"
                  src={user1}
                  alt="Header Avatar"

                />
                <span className="d-none d-xl-inline-block ms-2 me-1 font-size-16">Surendar</span>
                <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">
                <Link to="/profile" className="dropdown-item">
                  {" "}
                  <i className="bx bx-user font-size-16 align-middle me-1" />
                  Profile
                </Link>
                <Link to="/settings" className="dropdown-item">
                  {/* <span className="badge bg-success float-end">11</span> */}
                  <i className="bx bx-wrench font-size-16 align-middle me-1" />
                  Settings
                </Link>
                <div className="dropdown-divider" />
                <Link to="/logout" className="dropdown-item">
                  <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" />
                  <span>Logout</span>
                </Link>
              </DropdownMenu>
            </Dropdown>
            <div
              onClick={showRightSidebarAction}
              className="dropdown d-inline-block"
            >
              <button
                type="button"
                className="btn header-item noti-icon right-bar-toggle "
              >
                <i className="bx bx-cog bx-spin" />
              </button>
            </div>
          </div>
        </div>
      </header>
      {showRight.showRightSidebar ? <RightSidebar /> : null}
    </React.Fragment>
  );
};
export default Header;
