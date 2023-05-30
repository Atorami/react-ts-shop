import React from 'react';
import { HeartIcon } from '../../assets/icons/Heart';

export const Favorite = () => {
  return (
    <div className="favorite flex flex-row items-center mr-10 cursor-pointer">
      Favorite
      <HeartIcon className="h-5 w-5 ml-1" />
    </div>
  );
};
