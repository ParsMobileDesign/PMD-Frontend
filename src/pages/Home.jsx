import React from "react";
import ImageCarousel from "../components/carousel/imageCarousel";
import CarouselImages from "../temp/carouselImages";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home container">
        <ImageCarousel images={CarouselImages} />
    </div>
  );
};
export default Home;
