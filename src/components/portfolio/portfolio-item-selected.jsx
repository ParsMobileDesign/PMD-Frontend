import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "./portfolio-item-selected.scss";
import Items from "../../temp/items";
import Modal from "../shared/modal/modal";

const PortfolioItemSelected = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const modalHandler = () => {
    setDialogOpen(true);
  };
  const closeHandler = () => {
    setDialogOpen(false);
  };
  const profileItemId = useParams().id;
  const items = Items.filter((e) => e.srl === Number(profileItemId));
  let component = "";
  let item;
  if (items.length > 0) {
    item = items[0];
    component = (
      <div className="p-item-container">
        <img src={`${item.imgAddr}`} alt={item.title} />
        <div className="p-item-selected-content">
          <span className="p-item-title">{item.title}</span>
          <span className="p-item-desc">{item.desc}</span>
        </div>
      </div>
    );
  } else {
    component = <div> No item found ...</div>;
  }

  return component;
};

export default PortfolioItemSelected;
