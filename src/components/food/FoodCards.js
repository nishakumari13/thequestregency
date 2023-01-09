import React from "react";
import "./food.css";
import FoodSwiper from "./FoodSwiper.js";
import { data } from "./data";

function FoodCards() {
  console.log("data", data);
  return (
    <div className="main-card" id="food-id">
      <div className="header-proj">
        <h2 className="heading-proj">Cuisines</h2>
        <hr className="hr-proj" />
      </div>

      <>
        <div className="inner-card mobile-view">
          <div className="food-item ">
            <FoodSwiper dish={data[0].mughlai} />
            <div className="text">
              <p>Mughlai</p>
            </div>
          </div>

          <div className="food-item ">
            <FoodSwiper dish={data[0].chinese} />
            <p className="text">Chinese</p>
          </div>
        </div>
        <div className="inner-card mobile-view">
          <div className="food-item ">
            <FoodSwiper dish={data[0].bread} />
            <p className="text">Breads</p>
          </div>
          <div className="food-item ">
            <FoodSwiper dish={data[0].starters} />
            <p className="text">Starters</p>
          </div>
        </div>
        <div className="inner-card mobile-view">
          <div className="food-item ">
            <FoodSwiper dish={data[0].indian} />
            <p className="text">North Indian</p>
          </div>
          <div className="food-item ">
            <FoodSwiper dish={data[0].dessert} />
            <p className="text">Desserts</p>
          </div>
        </div>
      </>

      <>
        <div className="inner-card desktop-view">
          <div className="food-item ">
            <FoodSwiper dish={data[0].mughlai} />
            <div className="text">
              <p>Mughlai</p>
            </div>
          </div>
          <div className="food-item ">
            <FoodSwiper dish={data[0].chinese} />
            <p className="text">Chinese</p>
          </div>
          <div className="food-item ">
            <FoodSwiper dish={data[0].bread} />
            <p className="text">Breads</p>
          </div>
        </div>
        <div className="inner-card desktop-view">
          <div className="food-item ">
            <FoodSwiper dish={data[0].starters} />
            <p className="text">Starters</p>
          </div>
          <div className="food-item ">
            <FoodSwiper dish={data[0].indian} />
            <p className="text">North Indian</p>
          </div>
          <div className="food-item ">
            <FoodSwiper dish={data[0].dessert} />
            <p className="text">Desserts</p>
          </div>
        </div>
      </>
    </div>
  );
}

export default FoodCards;
