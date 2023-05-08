import React, { useEffect, useState } from 'react';

import chair from '../../components/assets/img/promo_chair.png';
import lamp from '../../components/assets/img/promo_lamp.png';

import { ProductCard } from '../../components/ProductCard/ProductCard';

interface Products {
  _id: string;
  id: number;
  path_img: string;
  title: string;
  descr: string;
  price: number;
}

export default function MainPage() {
  const [productList, setProductList] = useState<Products[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data');
        const response = await fetch('http://localhost:3000/products');
        const jsonData = await response.json();
        setProductList(jsonData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="promo bg-f_sky_blue h-[764px] relative">
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
          </div>
        </div>
        <img src={lamp} alt="" className="promo-lamp absolute top-0" />
      </section>

      <section className="best-products h-[600px] pt-20 mb-5">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="best-products__title text-center text-4xl font-josefin font-semibold">
            Best products
          </h2>
          <div className="best-products__list mt-12 grid grid-cols-4 grid-rows-1 gap-20 content-center">
            {productList.map((product) => (
              <ProductCard
                img_path={product.path_img}
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
