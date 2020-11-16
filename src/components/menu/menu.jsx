import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./menu.scss";
import MenuNavigator from "./menu-navigator";
import SideDrawer from "./side-drawer";
import BackDrop from "../shared/modal/back-drop";
const Menu = (props) => {
  const [isDrawableOpen, setDrawableState] = useState(false);
  const openDrawable = () => {
    setDrawableState(true);
  };
  const closeDrawable = () => {
    setDrawableState(false);
  };
  return (
    <React.Fragment>
      {isDrawableOpen && <BackDrop clickHandler={closeDrawable} />}
      <SideDrawer show={isDrawableOpen} onClick={closeDrawable}>
        <MenuNavigator menuItems={props.menuItems} Class="menu-side-drawer" />
      </SideDrawer>
      <div className="menu">
        <div className="menu-left-content">
          <div className="menu-toggle" onClick={openDrawable}>
            <span />
            <span />
            <span />
          </div>
          <Link to="/" className="menu-logo">
            Pars Mobile Design
          </Link>
        </div>
        <MenuNavigator menuItems={props.menuItems}  Class="menu-navigator" />
      </div>
    </React.Fragment>
  );
};
export default Menu;
