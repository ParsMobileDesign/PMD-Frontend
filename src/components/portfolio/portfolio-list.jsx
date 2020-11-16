import React from "react";

import "./portfolio-list.scss";
import PortfolioItem from "./portfolio-item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const newItem = () => {
  console.log("click");
};
const PortfolioList = (props) => {
  const auth = useContext(AuthContext);
  return (
    <div className="container portfolio-list-container">
      {
       auth.isLoggedIn &&
        <Link to='/newItem' className="plusIcon" onClick={newItem}>
          <FontAwesomeIcon icon={faPlusCircle} />
        </Link>
      }
      <div className="col-12 portfolio-list">
        {props.items.map((item) => (
          <PortfolioItem key={item.srl} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
