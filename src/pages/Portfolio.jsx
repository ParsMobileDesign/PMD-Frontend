import React from "react";
import PortfolioList from "../components/portfolio/portfolio-list";
import "./Portfolio.scss";
import Items from "../temp/items";

const Portfolio = () => {
  return <PortfolioList items={Items}/>
};
export default Portfolio;
