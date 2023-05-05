import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { HeartIcon } from '../assets/icons/Heart';
import { Language } from './Language/Language';
import { ThemeToggle } from './ThemeToggle/ThemeToggle';

export const Header: FC = () => {
  return (
    <header className="h-20	bg-white">
      <div className="container mx-auto h-full flex items-center px-94 py-5 ">
        <Link
          to="/"
          className="header__logo font-josefin text-[34px] font-bold"
        >
          Hekto
        </Link>
        <Navigation />
        <HeartIcon
          className="w-[30px] h-[30px] cursor-pointer hover:fill-red-300 hover:stroke-amber-400 
transition-all duration-300"
        />
        <Language />
        <ThemeToggle />
      </div>
    </header>
  );
};
