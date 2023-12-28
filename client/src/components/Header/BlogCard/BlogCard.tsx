import React, { FC } from 'react';
import img from '../../assets/img/blog/blog-1.png'

export const BlogCard: FC = () => {
  return (
    <div className="blog__card w-[370px] h-[493px] flex flex-col rounded-xl shadow-md hover:shadow-2xl transition ease-out duration-1000 hover:border hover:border-purple-200">
      <div className="card__img-block w-full overflow-hidden rounded-t-lg h-[253px]">
        <img src={img} className="card__img object-none" alt="blog-img"/>
      </div>
      <div className="card__info">
        <div className="card__top-info px-8 py-2 flex flex-row justify-between">
          <p className="card__top-info__author">Some Guy</p>
          <p className="card__top-info__pub-date">21 August,2023</p>
        </div>
        <div className="card__main-info px-8">
          <div className="info__title my-4 text-xl text-blue-500 font-semibold">
            Top esssential Trends in 2021
          </div>
          <div className="info_descr text-base font-thin mb-4">
            More off this less hello samlande lied much
            over tightly circa horse taped mightly
          </div>
          <a href="" className=" info__read-more my-4 text-xl hover:text-f_pink">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
