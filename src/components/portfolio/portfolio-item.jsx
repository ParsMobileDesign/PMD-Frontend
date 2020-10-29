import React from "react";
import {Link} from 'react-router-dom'

import "./portfolio-item.scss";
const PortfolioItem = ({srl, title, desc, imgAddr }) => {
  let descSub=desc.length>20?desc.substring(0,20)+"...":desc;
  return (
    <div className="portfolio-item" >
        <Link to={`/portfolio/${srl}`}>
      <div className="portfolio-item-desc">
        <span className='portfolio-item-title'>{title}</span>
        <span>{descSub}</span>
      </div>
      <img src={`${imgAddr}`} alt={title} className='portfolio-item-img' />
      </Link>
    </div>
  );
};

export default PortfolioItem;
