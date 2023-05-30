import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export type NavLink = {
  name: string;
  path: string;
  textColor?: string;
};

export const LinkItem: FC<NavLink> = ({ name, path, textColor }) => {
  return (
    <Link to={path} className="mr-[35px]">
      {name}
    </Link>
  );
};
