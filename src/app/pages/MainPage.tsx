import React from 'react';

import chair from '../../components/assets/img/promo_chair.png';

export default function MainPage() {
  return (
    <>
      <section className="promo bg-f_sky_blue h-[764px]">
        <div className="container mx-auto px-94 flex flex-row">
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

      <section className="products"></section>
      <section className="service"></section>
      <section className="advertisement"></section>
      <section className="trending"></section>
      <section className="discount"></section>
      <section className="top-categories"></section>
      <section className="newslater-subscribe"></section>
      <section className="latest-blog"></section>
    </>
  );
}
