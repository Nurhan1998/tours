import React from "react"
import Place from "./place";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const TopPlaces = () => {

  const dispatch = useDispatch();

  // const fetchtopPlaces = async() => {
  //   const response = await axios.get("https://erzhan.pythonanywhere.com/api/v1/tours/").catch ((err) => {
  //     console.log("Err", err)
  //   })
  //   dispatch(setTopPlaces(response.data))
  //   console.log(response.data)
  // };

  // useEffect (() => {
  //   fetchtopPlaces();
  // }, [])

  // console.log(items)
  
return (
    <section className="section-tours">
      <div className="wrapper">
        <h2 className="top__title section-title">Today top places to visit</h2>
        <div className="top__cards">

        
          
            {/* <Place /> */}
            <div className="top__card">
          <div className="top__cardPic">
            <img
              src='https://asiamountains.net/assets/cache_image/assets/lib/resized/331/1600x1200_0x0_d0b.jpg'
              alt="123"
              className="top__cardThumb"
            />
            <div className="top__cardStats">
              <h3 className="top__cardTitle">Кол0Тор</h3>
          
            </div>
          </div>
          <p className="top__cardDesc">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptas accusamus delectus rerum velit cupiditate id consectetur at sint, reprehenderit aperiam nostrum, eos soluta totam deleniti veritatis! Culpa, eos. Pariatur.
          </p>
          <a href="#" className="top__cardMore">SEE MORE</a>
        </div>
           
           
            <div className="top__card">
          <div className="top__cardPic">
            <img
              src='https://asiamountains.net/assets/cache_image/assets/lib/resized/331/1600x1200_0x0_d0b.jpg'
              alt="123"
              className="top__cardThumb"
            />
            <div className="top__cardStats">
              <h3 className="top__cardTitle">Кол0Тор</h3>
          
            </div>
          </div>
          <p className="top__cardDesc">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptas accusamus delectus rerum velit cupiditate id consectetur at sint, reprehenderit aperiam nostrum, eos soluta totam deleniti veritatis! Culpa, eos. Pariatur.
          </p>
          <a href="#" className="top__cardMore">SEE MORE</a>
        </div>
            
            <div className="top__card">
          <div className="top__cardPic">
            <img
              src='https://asiamountains.net/assets/cache_image/assets/lib/resized/331/1600x1200_0x0_d0b.jpg'
              alt="123"
              className="top__cardThumb"
            />
            <div className="top__cardStats">
              <h3 className="top__cardTitle">Кол0Тор</h3>
          
            </div>
          </div>
          <p className="top__cardDesc">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptas accusamus delectus rerum velit cupiditate id consectetur at sint, reprehenderit aperiam nostrum, eos soluta totam deleniti veritatis! Culpa, eos. Pariatur.
          </p>
          <a href="#" className="top__cardMore">SEE MORE</a>
        </div>
        

         

          
        </div>
      </div>
    </section>
    )

}

export default TopPlaces;
