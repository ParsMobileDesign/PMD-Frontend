import React from "react";

import MenuItem from './menu-item';
import "./menu-navigator.scss";

const MenuNavigator = ({menuItems,Class}) => {
  return <div className={`${Class}`}>
    {menuItems.map((item) => (
      <MenuItem key={item.srl} title={item.title} path={item.path} />
    ))}
  </div>;
}
export default MenuNavigator;
