import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { HeartIcon } from '../assets/icons/Heart';
import { Language } from './Language/Language';
import { ThemeToggle } from './ThemeToggle/ThemeToggle';
import { Cart } from './Cart/Cart';
import { Profile } from './Profile/Profile';
import { Favorite } from './Favorite/Favorite';

export const Header: FC = () => {
  return (
    <header className="h-20	bg-white">
      <div className="container mx-auto h-full flex items-center justify-between py-5 ">
        <Link
          to="/"
          className="header__logo font-josefin text-[34px] font-bold"
        >
          Hekto
        </Link>
        <Navigation />
        <div className="header__utility flex flex-row items-center">
          <Language />
          <ThemeToggle />
        </div>
        <div className="header__profile-activity flex flex-row  items-center">
          <Profile />
          <Favorite />
          <Cart />
        </div>
      </div>
    </header>
  );
};
