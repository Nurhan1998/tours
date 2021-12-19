import React, {useEffect} from "react";
import Sidebar from "./sidebar/sidebar";
import MainInfo from "./mainInfo/mainInfo";
import {useDispatch} from "react-redux";
import {setPlaces} from "../../../redux/places/actions";
import {getPlaces} from "../../../API/places";

const AboutKyrgyzstan = () => {
  const dispatch = useDispatch();

  const getDistricts = async () => {
    try {
      const  data  = getPlaces();
      dispatch(setPlaces(data))
    } catch (e) {
      console.log(e);
    };
  };

  useEffect(()=> {
    getDistricts();
  },[])

  return (
      <section className="section-kyrgyzstan">
        <div className="wrapper">
          <div className="container1">
            <MainInfo/>
            <Sidebar/>
          </div>
        </div>
      </section>
    );
};

export default AboutKyrgyzstan;
