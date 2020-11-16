import React from "react";
import { Carousel } from "react-bootstrap";
import "./imageCarousel.scss";

const ImageCarousel = (props) => {
  return (
    <Carousel>
      {props.images.map((e) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={e.imageAddr}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{e.title}</h3>
            <p>{e.desc}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
