import React from "react";
import Slider from "./slider/slider";
import { SliderData } from "./slider/sliderData";
import GetInTouch from "./getInTouch/getInTouch";
import Info from "./info/info";
import TopPlaces from "./topPlaces/topPlaces";

const Home = () => {
    return (
        <div>
          <Slider slides={SliderData}/> 
          <TopPlaces/>
          <Info/>
          <GetInTouch/>
        </div>
    );
}

export default Home;