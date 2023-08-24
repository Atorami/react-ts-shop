import React, { useEffect, useState } from 'react';

import chair from '../../components/assets/img/promo_chair.png';
import lamp from '../../components/assets/img/promo_lamp.png';
import about_img from '../../components/assets/img/bg/main_about_bg.png';

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
      {/* <section className="promo bg-f_sky_blue h-[764px] relative">
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
      <section className="latest-blog"></section> */}
      <section className="promo bg-main-promo bg-center bg-cover bg-no-repeat h-[630px] relative">
        <div className="promo-layer bg-main-promo-layer bg-cover bg-center w-full">
          <div className="container mx-auto flex flex-col">
            <h4 className="promo_subtitle mt-32 text-4xl italic text-o_green">
              100% Natural Food
            </h4>
            <h2 className="promo_title mt-[8px] text-7xl font-bold text-o_dark_blue">
              Choose the best
              <br /> healthier way
              <br /> of life
            </h2>
            <button className="promo_btn w-60 h-20 mt-[23px] bg-o_yellow rounded-xl text-xl font-bold">
              Explore Now
            </button>
          </div>
        </div>
      </section>
      <section className="about h-[630px] bg-gray-100 w-full">
        <div className="container flex flex-row justify-between h-full ">
          <div className="about_imgb-block w-1/2 justify-self-center">
            {<img src={about_img} alt="" className=" w-full" />}
          </div>

          <div className="about_article mt-32">
            <h4 className="about_title text-4xl italic text-o_green">
              About Us
            </h4>
            <h2 className="about_m-title text-5xl font-extrabold mt-2 text-o_dark_blue">
              We Believe in Working <br /> Accredited Farmers
            </h2>
            <p className="about_descr text-lg mt-3.5">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <ul className="about_list mt-12">
              <li className="about_list_item">
                <img src="" alt="" className="about_list_item_icon" />
                <div className="about_list_item_text">
                  <p className="list_title text-o_dark_blue font-bold">
                    Organic Foods Only
                  </p>
                  <p className="list_descr">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </p>
                </div>
              </li>
              <li className="about_list_item">
                <img src="" alt="" className="about_list_item_icon" />
                <div className="about_list_item_text">
                  <p className="list_title text-o_dark_blue font-bold">
                    Quality Standards
                  </p>
                  <p className="list_descr">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </p>
                </div>
              </li>
            </ul>
            <button className="about_btn w-60 h-20 mt-[23px] bg-o_green rounded-xl text-xl font-bold text-white">
              Shop Now
            </button>
          </div>
        </div>
      </section>
      <section className="products h-[1719px]">
        <div className="container">.</div>
      </section>
    </>
  );
}
