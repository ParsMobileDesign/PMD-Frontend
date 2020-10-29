import React from "react";
import ReactDOM from "react-dom";

import "./back-drop.scss";

const BackDrop = ({clickHandler}) => {
  const backdrop = <div className="backdrop" onClick={clickHandler}></div>;
  return ReactDOM.createPortal(
    backdrop,
    document.getElementById("backdrop-hook")
  );
};
export default BackDrop;
