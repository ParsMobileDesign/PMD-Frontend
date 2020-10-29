import React from "react";

import "./portfolio-list.scss";
import PortfolioItem from "./portfolio-item";
const PortfolioList = (props) => {
  return (
    <div className="portfolio-list-container">
      <div className="portfolio-list">
        {props.items.map((item) => (
          <PortfolioItem key={item.srl} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
