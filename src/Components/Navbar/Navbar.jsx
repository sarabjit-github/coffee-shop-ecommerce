import React from "react";
import "./Scss/navbar.css";
import logo from "../../Img/logo_coffe.svg";
import cartIcon from "../../Img/cart_icon.svg";
import searchIcon from "../../Img/search_icon.svg";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

export const Navbar = ({deliveryTab}) => {
  return (
    <header>
      <div className="left">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
      </div>
      <div className="center">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/ourproduct">Our Product</NavLink>
          {
            deliveryTab && <Link spy={true} to="Delivery" smooth={true}>Delivery</Link>
          }
          
        </nav>
      </div>
      <div className="right">
        <div className="search-bar">
          <div className="search-icon">
            <img src={searchIcon} alt="search" />
          </div>
          <input type="text" placeholder="Cappuccino" />
        </div>
        <div className="cart-icon">
          <img src={cartIcon} alt="cart icon" />
        </div>
      </div>
    </header>
  );
};
