import React from "react";
import { Card } from "../Card/Card";
import "./Scss/popularproduct.css";

export const Popularproduct = () => {
  return (
    <section className="popular-section">
      <div className="container">
        <div className="p-heading heading">
          <h1>Popular <span>Now</span></h1>
        </div>
        <div className="p-container">
            <div className="card-container">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
      </div>
    </section>
  );
};
