import React from 'react';
import { UserIcon } from '../../assets/icons/User';
export const Profile = () => {
  return (
    <div className="profile flex flex-row items-center mx-5 cursor-pointer">
      Profile
      <UserIcon className="h-5 w-5 mx-2 " />
    </div>
  );
};
