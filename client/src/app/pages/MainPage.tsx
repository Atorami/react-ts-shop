  import React, { useEffect, useState } from 'react';

  import chair from '../../components/assets/img/promo_chair.png';
  import lamp from '../../components/assets/img/promo_lamp.png';
  import subscribe_bg from '../../components/assets/img/subscribe_bg.png'

  import { ProductCard } from '../../components/ProductCard/ProductCard';
  import {BlogCard} from "../../components/Header/BlogCard/BlogCard";
  import {SliderItem} from "../../components/main/SliderItem";

  interface Products {
    _id: string;
    id: number;
    path_img: string;
    title: string;
    descr: string;
    price: number;
  }

  export default function MainPage() {

    const subscribeBg = {
      backgroundImage: `url(${subscribe_bg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    };

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
                <br/>
                Trends in 2020
              </h2>
              <p className="promo__info__descr mt-[12px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
                est adipiscing <br/>
                in phasellus non in justo.
              </p>
              <button className="promo__info__btn mt-[27px] w-[163px] h-[50px] bg-f_pink 	text-white ">
                Shop Now
              </button>
            </div>
            <div className="promo__img relative mr-[32px]">
              <img src={chair} alt="" className="promo__img__main  py-[99px]"/>
            </div>
          </div>
          <img src={lamp} alt="" className="promo-lamp absolute top-0"/>
        </section>

        <section className="featured-products h-[600px] pt-20 mb-5">
          <div className="container mx-auto flex flex-col items-center">
            <h2 className="featured-products__title text-center text-4xl font-josefin font-semibold">
              Featured Products
            </h2>
            <div className="featured-products__list mt-12 grid grid-cols-4 grid-rows-1 gap-20 content-center">
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
        <section className="latest-products">
          <div className="container mx-auto">
            <h2 className="lates-products__title text-center text-4xl font-josefin font-semibold">Latest Products</h2>
          </div>
        </section>
        <section className="shopex-offer">
          <div className="container mx-auto"></div>
        </section>
        <section className="offer-block">
          <div className="container mx-auto">
            <h2 className="offer-block__title text-center text-4xl font-josefin font-semibold">What Shopex Offer!</h2>
          </div>
        </section>
        <section className="trending-products"></section>
        <section className="discount-block"></section>
        <section className="discount-item"></section>
        <section className="top-categories">
          <div className="container mx-auto py-28">
            <h5 className="top-categories__title text-center text-4xl font-josefin font-semibold">Top Categories</h5>
            <div className="top-categories__slider relative mt-14 px-16">
              <div className="slider__container flex flex-row justify-between align-middle relative mx-2">
                <SliderItem/>
                <SliderItem/>
                <SliderItem/>
                <SliderItem/>
              </div>
              <div className="slider_nav mt-8 flex justify-center">
                <span className="slider_nav__dot  h-3 w-3 bg-f_pink rounded-full mx-1"></span>
                <span className="slider_nav__dot  h-3 w-3 bg-f_pink rounded-full mx-1"></span>
                <span className="slider_nav__dot  h-3 w-3 bg-f_pink rounded-full mx-1"></span>
              </div>
            </div>
          </div>
        </section>
        <section className="newslater-subscribe h-[462px]" style={subscribeBg}>
          <div className="container mx-auto h-full flex flex-col justify-center">
            <h5 className="newslatter-subscribe__title text-center font-semibold text-4xl text-blue-900">Get Leatest
              Update By Subscribe <br/>
              0ur Newslater</h5>
            <form action="" className="newslater-subscribe__form mx-auto mt-14">
              <input className="newslater-subscribe__form__input w-[300px] h-[50px] border-2 p-2" type="text" placeholder="Enter Email Adress"/>
              <button className="newslater-subscribe__form__btn w-[163px] h-[50px] bg-f_pink text-white">Subscribe</button>
            </form>
          </div>
        </section>
        <section className="latest-blog h-[800px] py-20">
          <div className="container mx-auto">
            <h2 className="latest-blog__title text-center text-4xl font-josefin font-semibold">Latest Blog</h2>
            <div className="latest-blog__cards flex flex-row justify-between px-36 py-20">
              <BlogCard/>
              <BlogCard/>
              <BlogCard/>
            </div>
          </div>
        </section>
        <footer className="footer h-[532px] bg-f_sky_blue flex-col py-14">
          <div className="footer-content h-full">
            <div className="container mx-auto">
              <div className="footer__menu flex flex-row justify-between">
                <div className="footer__contact">
                  <a href="" className="footer__logo font-josefin text-[34px] font-bold"> Hekto</a>

                  <div className="footer__subscribe">
                    <div className="form">
                      <label htmlFor=""></label>
                      <input type="text" placeholder="Enter Email Address" className="w-[220px] h-[39px] outline-none p-2"/>
                      <button className="footer__subscribe__btn mt-[27px] w-[135px] h-[39px] bg-f_pink 	text-white ">Sign Up</button>
                    </div>
                  </div>
                  <div className="footer__contact-info pt-8">
                    <h5 className="contact-info__title">
                      Contact Info
                    </h5>
                    <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                  </div>
                </div>
                <div className="footer__categories">
                  <h5 className="footer__categories__title font-bold text-2xl">Catagories</h5>
                  <ul className="pt-8">
                    <li className="mb-2"><a href="">Laptops & Computers</a></li>
                    <li className="mb-2"><a href="">Cameras & Photography</a></li>
                    <li className="mb-2"><a href="">Smart Phones & Tablets</a></li>
                    <li className="mb-2"><a href="">Video Games & Consoles</a></li>
                    <li className="mb-2"><a href="">Waterproof Headphones</a></li>
                  </ul>
                </div>
                <div className="footer__customer-care">
                  <h5 className="footer__customer-care__title font-bold text-2xl">Customer Care</h5>
                  <ul className="pt-8">
                    <li className="mb-2"><a href="">My Account</a></li>
                    <li className="mb-2"><a href="">Discount</a></li>
                    <li className="mb-2"><a href="">Returns</a></li>
                    <li className="mb-2"><a href="">Orders History</a></li>
                    <li className="mb-2"><a href="">Order Tracking</a></li>
                  </ul>
                </div>
                <div className="footer__pages">
                  <h5 className="footer__pages__title font-bold text-2xl">Pages</h5>
                  <ul className="pt-8">
                    <li className="mb-2"><a href="">Blog</a></li>
                    <li className="mb-2"><a href="">Browse the Shop</a></li>
                    <li className="mb-2"><a href="">Category</a></li>
                    <li className="mb-2"><a href="">Pre-Built Pages</a></li>
                    <li className="mb-2"><a href="">Visual Composer Elements</a></li>
                    <li className="mb-2"><a href="">WooCommerce Pages</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="subfooter-content bg-f_sky_dark_blue h-[53px]">
            <div className="container mx-auto h-full flex items-center">
              <p className="rights">©Webecy - All Rights Reserved</p>
              <div className="social">
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
