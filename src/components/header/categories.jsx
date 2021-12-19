import React, { useState } from "react";
import { Link } from "react-router-dom";

const Categories = ({items, onClick}) => {

    const[activeItem, SetActiveItem] = useState(0)

    const onSelectItem = (index) => {
        SetActiveItem (index)
    }


    
    return (
        <div className="header__record">
            <nav className="menu">
              <ul className="menu__list">

                  {/* { items && items.map((name, index) => (
                        <li onClick={() => onSelectItem(index)} key={`${name}_${index}`} className= {activeItem===index ? 'menuItem active1'  : "menuItem"}>
                            <Link to='/home'>{name}</Link>
                        </li>
                  ))} */}


                <li className="menuItem">
                    <Link to='/home'>Home</Link>
                    </li>

                <li className="menuItem"> <Link to='#'>Kyrgyzstan</Link> 

                  <ul className="subMenu__list">
                    <li>
                        <Link to='/aboutKyrgyzstan' className="subMenu__link">About Kyrgyzstan</Link>
                    </li>
                    <li>
                    <Link to='/gallery' className="subMenu__link">Gallery</Link>
                    </li>
                    <li>

                    <Link to='/importantToKnow' className="subMenu__link">Important to know</Link>
                      
                    </li>
                  </ul>
                </li>
                <li className="menuItem">
                    <Link to='/tours'>Tours</Link>

               
                  <ul className="subMenu__list">
                    <li><a href="/" className="subMenu__link">Горы</a></li>
                    <li><a href="/" className="subMenu__link">Озера и Реки</a></li>
                    <li><a href="/" className="subMenu__link">Ущелья</a></li>
                    <li><a href="/" className="subMenu__link">Каньоны</a></li>
                    <li>
                      <a href="/" className="subMenu__link">Гоячие источники</a>
                    </li>
                    <li><a href="/" className="subMenu__link">Водопады</a></li>
                    <li><a href="/" className="subMenu__link">Конные туры</a></li>
                    <li><a href="/" className="subMenu__link">Джип туры</a></li>
                  </ul>
                </li>
                <li className="menuItem"> <Link to='/blog'>Blog</Link></li>
                <li className="menuItem">
                    <Link to='#' >About</Link>

                  
                  <ul className="subMenu__list">
                    <li> <Link to='/aboutUs' className="subMenu__link">About us</Link>
                       </li>

                    <li> <Link to='/contactUs' className="subMenu__link"> Contact us</Link> </li>
                  </ul>
                </li>

              </ul>
            </nav>
          </div>
    )
}

export default Categories;