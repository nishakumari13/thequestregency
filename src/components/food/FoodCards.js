import React from "react";
import food1 from "../../images/food12.jpeg";
import food2 from "../../images/food2.jpeg";
import food3 from "../../images/food11.jpeg";
import food4 from "../../images/food4.jpeg";
import food5 from "../../images/food14.jpeg";
import food6 from "../../images/food13.jpeg";
import "./food.css";

function FoodCards() {
  return (
    <div className="main-card" id="food-id">
      <div className="header-proj">
        <h2 className="heading-proj">Cuisines</h2>
        <hr className="hr-proj" />
      </div>

      <>
        <div className="inner-card mobile-view">
          <div className="food-item">
            <img src={food1} className="img" alt="food1" />
            <div className="text">
              <p>Mughlai</p>
            </div>
          </div>
          <div className="food-item">
            <img src={food2} className="img" alt="food1" />
            <p className="text">Chinese</p>
          </div>
        </div>
        <div className="inner-card mobile-view">
          <div className="food-item">
            <img src={food3} className="img" alt="food1" />
            <p className="text">Breads</p>
          </div>
          <div className="food-item">
            <img src={food4} className="img" alt="food1" />
            <p className="text">Starters</p>
          </div>
        </div>
        <div className="inner-card mobile-view">
          <div className="food-item">
            <img src={food5} className="img" alt="food1" />
            <p className="text">North Indian</p>
          </div>
          <div className="food-item">
            <img src={food6} className="img" alt="food1" />
            <p className="text">Desserts</p>
          </div>
        </div>
      </>

      <>
        <div className="inner-card desktop-view">
          <div className="food-item">
            <img src={food1} className="img" alt="food1" />
            <div className="text">
              <p>Mughlai</p>
            </div>
          </div>
          <div className="food-item">
            <img src={food2} className="img" alt="food1" />
            <p className="text">Chinese</p>
          </div>
          <div className="food-item">
            <img src={food3} className="img" alt="food1" />
            <p className="text">Breads</p>
          </div>
        </div>
        <div className="inner-card desktop-view">
          <div className="food-item">
            <img src={food4} className="img" alt="food1" />
            <p className="text">Starters</p>
          </div>
          <div className="food-item">
            <img src={food5} className="img" alt="food1" />
            <p className="text">North Indian</p>
          </div>
          <div className="food-item">
            <img src={food6} className="img" alt="food1" />
            <p className="text">Desserts</p>
          </div>
        </div>
      </>
    </div>
  );
}

export default FoodCards;
