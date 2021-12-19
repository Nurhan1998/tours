import React from "react";
import { useNavigate } from "react-router-dom";


const OneTour = ({id, name, imageUrl, body_list }) => {
  const navigate = useNavigate();

    const handleClick = (id) => {
      navigate(`/tours/${id}`)
    };

    return (
      <div className="top__card">
        <div className="top__cardPic">
          <img
            src={imageUrl}
            alt="123"
            className="top__cardThumb"
          />
          <div className="top__cardStats ">
            <h3 className="top__cardTitle">{name}</h3>
          </div>
        </div>
        <p className="top__cardDesc">
          {body_list}
        </p>
          <a className="top__cardMore" onClick={() => handleClick(id)}>SEE MORE</a>
      </div>
      
    )
}

export default OneTour;
