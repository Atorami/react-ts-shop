import chair from "../assets/img/promo_chair.png";
import React from "react";

export const SliderItem = () => {
  return (
    <div className="slider__container__item w-[300px] h-[380px] flex flex-col items-center">
      <div className="item__img-block w-[290px] h-[290px] mx-auto rounded-full bg-gray-50 flex items-center justify-center overflow-hidden group relative hover:shadow-2xl">
        <img src={chair} alt="slider-item"
             className="w-3/4 transition-transform transform group-hover:scale-105"/>
        <div className="overlay absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button className="bg-green-600 text-white h-[40px] px-2 transition">View Shop</button>
        </div>
      </div>
      <p className="item__title text-center pt-8 font-semibold text-xl text-blue-800">Mini LCV Chair</p>
      <p className="item__price text-center font-medium text-lg text-blue-800">$ 56.00</p>
    </div>
  )
}