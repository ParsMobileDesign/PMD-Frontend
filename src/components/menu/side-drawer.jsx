import React from "react";
import ReactDOM from "react-dom";

import { CSSTransition } from "react-transition-group";
import "./side-drawer.scss";

const SideDrawer = (props) => {
  const drawer = (
    <CSSTransition in={props.show} timeout={200} classNames='slide-in-left' mountOnEnter unmountOnExit>
      <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(
    drawer,
    document.getElementById("sideDrawer-hook")
  );
};

export default SideDrawer;
