import React from "react";
import { MenuItem } from "./MenuItem";
import "./Navbar.css";

const Navbar = () => {
  let state = {
    clicked: false,
  };

  return (
    <nav className='NavbarItems'>
      <h1 className='navbar-logo'>React</h1>
      <div className='menu-icon'></div>
      <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItem.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.className} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
