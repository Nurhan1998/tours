import react from "react";
// import Categories from "./categories";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import Dropdown from "./dropDown";
import './header.css'
import Dropdown2 from "./dropDown2"

const Header = () => {

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };


  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          EPIC
          <i className='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/tours'
              className='nav-links'
              onClick={closeMobileMenu}>
              Tours 
            </Link>
            
          </li>
          <li className='nav-item'>
            <Link
              to='/blog'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
          </li>
          <li  className='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu} >
              Kyrgyzstan <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'
           onMouseEnter={onMouseEnter}
           onMouseLeave={onMouseLeave}  >
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}>
              About <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown2 />}
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
    // return (
    //     <header className="header">
    //   <div className="wrapper">
    //     <div className="header__wrapper">
    //       <div className="header__logo">
    //         <a href="#" className="header__logo-link"> Logo </a>
    //       </div>

    //       <Categories onClick={(name) => console.log(name)} items={[
    //         "Home",
    //         "Kyrgyzstan",
    //         "Tours",
    //         "Blog",
    //         "About",

    //         ]}/>
    //     </div>
    //   </div>
    // </header>
    // )
}

export default Header;
