import React from 'react';
import "./Scss/delivery.css";
import coffeeCup1 from "../../Img/c-coffee.png";
import coffeeCup2 from "../../Img/coffee-cup 2.png";
import foodTruck from "../../Img/food-truck 1.png";

export const Delivery = () => {
  return (
    <div className="delivery-container" id='Delivery'>
        <div className="heading">
            <h1>How to use delivery <span>service</span></h1>
        </div>
        <div className="d-cards-container">
            <div className="d-card">
                <img src={coffeeCup1} alt="coffee" />
                <h2 className='sub-heading'>Choose your coffee</h2>
                <p>there are 20+ coffees for you</p>
            </div>
            <div className="d-card">
                <img src={foodTruck} alt="food truck" />
                <h2 className='sub-heading'>Choose your coffee</h2>
                <p>Choose delivery service</p>
            </div>
            <div className="d-card">
                <img src={coffeeCup2} alt="coffee 2" />
                <h2 className='sub-heading'>Enjoy your coffee</h2>
                <p>there are 20+ coffees for you</p>
            </div>
        </div>
    </div>
  )
}
