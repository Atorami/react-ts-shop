import React from 'react';

import chair from '../../components/assets/img/promo_chair.png';
import { ProductCard } from '../../components/ProductCard/ProductCard';

const products = [
  {
    img_path:
      'https://secure.img1-cg.wfcdn.com/im/10532986/compr-r85/1948/194854595/ziaa-upholstered-armchair.jpg',
    title: 'Sky Chair',
    descr: 'Theres some product info',
    price: 20,
  },
  {
    img_path:
      'https://secure.img1-cg.wfcdn.com/im/10532986/compr-r85/1948/194854595/ziaa-upholstered-armchair.jpg',
    title: 'Sky Chair',
    descr: 'Theres some product info',
    price: 20,
  },
  {
    img_path:
      'https://secure.img1-cg.wfcdn.com/im/10532986/compr-r85/1948/194854595/ziaa-upholstered-armchair.jpg',
    title: 'Sky Chair',
    descr: 'Theres some product info',
    price: 20,
  },
  {
    img_path:
      'https://secure.img1-cg.wfcdn.com/im/10532986/compr-r85/1948/194854595/ziaa-upholstered-armchair.jpg',
    title: 'Sky Chair',
    descr: 'Theres some product info',
    price: 20,
  },
];

export default function MainPage() {
  return (
    <>
      <section className="promo bg-f_sky_blue h-[764px]">
        <div className="container mx-auto flex flex-row">
          <div className="promo__info">
            <p className="pormo__info__subtitle pt-[203px] text-f_pink">
              Best Furniture For Your Castle....
            </p>
            <h2 className="promo__info__title mt-[12px] font-josefin text-[53px] font-semibold leading-[82px]">
              New Furniture Collection
              <br />
              Trends in 2020
            </h2>
            <p className="promo__info__descr mt-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing <br />
              in phasellus non in justo.
            </p>
            <button className="promo__info__btn mt-[27px] w-[163px] h-[50px] bg-f_pink 	text-white ">
              Shop Now
            </button>
          </div>
          <div className="promo__img relative mr-[32px]">
            <img src={chair} alt="" className="promo__img__main  py-[99px]" />
            {/* <div className="promo__img__disk absolute h-[136px] w-[136px] bg-cyan-500 rounded-full text-center top-0 left-0 text-white self-center">
              50%
            </div> */}
          </div>
        </div>
      </section>

      <section className="best-products h-[600px] pt-20 mb-5">
        <div className="container mx-auto">
          <h2 className="best-products__title text-center text-4xl font-josefin font-semibold">
            Best products
          </h2>
          <div className="best-products__list mt-12 grid grid-cols-4 grid-rows-1 content-center">
            {products.map((product) => (
              <ProductCard
                img_path={product.img_path}
                title={product.title}
                descr={product.descr}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="trending-products">
        <div className="container mx-auto">
          <h2 className="trending-products__title">Trending products</h2>
        </div>
      </section>
      <section className="discount"></section>
      <section className="top-categories"></section>
      <section className="newslater-subscribe"></section>
      <section className="latest-blog"></section>
    </>
  );
}
