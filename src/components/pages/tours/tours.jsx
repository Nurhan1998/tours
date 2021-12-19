import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import OneTour from "./onetour";
import { useDispatch } from "react-redux";
import { setTours } from "../../../redux/tours/actions";
import { getTours } from "../../../API/tours";


const Tours = () => {
  const dispatch = useDispatch();
  const tours = useSelector(({ tours }) => tours.tours)

  const fetchTours = async() => {
    try {
      const { data } = await getTours();
      dispatch(setTours(data));
    } catch (e) {
      console.log(e);
    };
  };

  useEffect(() => {
    fetchTours();
  }, [])

  return (
    <section className="section-tours">
      <div className="wrapper">
        <div className="photo-big-3"><img src="./img/pngCard/Burana-Tower.jpg" alt=""/></div>
        <h1 className="tours-title">Your trips start here</h1>
        <div className="top__cards">
          {tours && tours.map(tours => <OneTour key = {tours.id} {...tours}/>)}
        </div>
      </div>
    </section>
  )
}

export default Tours;
