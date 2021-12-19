import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Place = () => {

  const tour = useSelector(({topPlaces}) => topPlaces.topPlaceItems);

  const renderItems = tour.map((tour) => {
    const { id, name, image, info, body} = tour;

    return (
       
      <Link to={`/tour`} >
      <div className="top__card">
          <div className="top__cardPic">
            <img
              src={image}
              alt="123"
              className="top__cardThumb"
            />
            <div className="top__cardStats">
              <h3 className="top__cardTitle">{name}</h3>
          
            </div>
          </div>
          <p className="top__cardDesc">
           {body}
          </p>
          <a href="#" className="top__cardMore">SEE MORE</a>
        </div>
        </Link>
        
  );

  });

return <>{renderItems}</>
    
}

export default Place;



