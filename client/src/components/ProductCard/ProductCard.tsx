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
    <div className="product__card group w-[300px] h-[360px] flex flex-col justify-center text-center shadow-md hover:shadow-2xl transition ease-out hover:scale-105 duration-1000 hover:border hover:border-purple-400">
      <div className="card__img-block relative overflow-hidden">
        <img src={img_path} className="card__img p-10" alt = 'product-img'/>
        <ShoppingCartIcon className="absolute h-5 w-5 top-2 left-2 cursor-pointer stroke-sky-400 hover:stroke-purple-700" />
        <HeartIcon className="absolute h-5 w-5 top-2 left-10 cursor-pointer stroke-sky-400 hover:stroke-purple-700" />
      </div>
      <div className="card__info group-hover:bg-purple-600 group-hover:text-white transition ease-in duration-500 py-4">
        <p className="info__title text-2xl text-f_pink font-semibold group-hover:text-white transition ease-in duration-500">
          {title}
        </p>
        <p className="info_descr py-2 text-xl">{descr}</p>
        <p className="info__price  text-xl">$ {price}</p>
      </div>
    </div>
  );
};
