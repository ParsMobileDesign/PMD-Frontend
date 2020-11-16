import React from "react";

import "./Button.scss";

/** Create customized Button with these properties : title, clickHandler, type, class */
const Button = (props) => {
  const { title, clickHandler,type,cssClass,disabled } = props;
  return <button disabled={disabled} type={type} className={`${cssClass}`} onClick={clickHandler}>{title}</button>
};
export default Button;
