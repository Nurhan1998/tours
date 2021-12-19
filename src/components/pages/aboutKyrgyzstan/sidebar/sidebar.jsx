import React from "react";
import {useSelector} from "react-redux";

const Sidebar = () => {
  const places = useSelector(({ places }) => places.places )
  console.log(places, "places")
  return (
        <div className="sidebar">
          <div className="sidebar__section">
            <h2 className="sidebar__title">Туристические места</h2>
            {/*{places?.map(place => (*/}
            {/*  <div className="sidebar__item" key={place.id}><a href="#">{place.name}</a></div>*/}
            {/*))}*/}
          </div>
        </div>
    )
}

export default Sidebar;
