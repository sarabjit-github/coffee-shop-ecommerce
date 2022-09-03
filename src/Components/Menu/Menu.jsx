import React from "react";
import { Menucard } from "../MenuCard/Menucard";
import { Navbar } from "../Navbar/Navbar";
import "./Scss/menu.css";

export const Menu = () => {
  return (
    <>
      <Navbar deliveryTab={false} />
      <section className="menu-container">
        <div className="heading">
          <h1>
            Special menu <span>for you</span>
          </h1>
        </div>
        <div className="mc-con">
          <Menucard />
          <Menucard />
          <Menucard />
          <Menucard />
          <Menucard />
          <Menucard />
          <Menucard />
          <Menucard />
        </div>
      </section>
    </>
  );
};
