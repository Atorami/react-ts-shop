import React, { FC } from 'react';
import { ShoppingCartIcon } from '../assets/icons/Cart';
import { HeartIcon } from '../assets/icons/Heart';

export type Product = {
  img_path: string;
  title: string;
  descr: string;
  price: string | number;
};

export const ProductCard: FC<Product> = ({ img_path, title, descr, price }) => {
  return (
    <div className="product__card w-[270px] flex flex-col justify-center text-center shadow-md hover:shadow-2xl transition ease-out hover:scale-105 duration-1000 hover:border hover:border-purple-400">
      <div className="card__img-block relative w-35 overflow-hidden h-4/6 ">
        <img src={img_path} className="card__img "></img>
        <ShoppingCartIcon className="absolute h-5 w-5 top-2 left-2 cursor-pointer stroke-sky-400 hover:stroke-purple-700" />
        <HeartIcon className="absolute h-5 w-5 top-2 left-10 cursor-pointer stroke-sky-400 hover:stroke-purple-700" />
      </div>
      <div className="card__info">
        <div className="info__title my-4 text-2xl text-f_pink font-semibold">
          {title}
        </div>
        <div className="info_descr text-xl">{descr}</div>
        <div className="info__price my-4 text-xl">$ {price}</div>
      </div>
    </div>
  );
};
