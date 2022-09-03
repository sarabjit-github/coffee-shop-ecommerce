import React from "react";
import "./Scss/about.css";
import aCoffee from "../../Img/a-coffee.png";
import { Navbar } from "../Navbar/Navbar";

export const About = () => {
  return (
    <>
    <Navbar deliveryTab={false} />
    <section className="about">
      <div className="a-left">
        <div className="a-img">
          <img src={aCoffee} alt="about coffee" />
        </div>
      </div>
      <div className="a-right">
        <div className="heading">
          <h1>
            About <span>us</span>
          </h1>
        </div>
        <p className="sub-heading">
          We provide quality coffee, and ready to deliver.
        </p>
        <p>
          We are a company that makes and distributes delicious drinks. our main
          product is made with a secret recipe and available in stores
          worldwide.
        </p>
        <div>
          <button>Get your coffee</button>
        </div>
      </div>
    </section>
    </>
  );
};
