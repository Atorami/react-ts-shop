import React from 'react';
import { SunIcon } from '../../assets/icons/Sun';
import { MoonIcon } from '../../assets/icons/Moon';
export const ThemeToggle = () => {
  return (
    <div className="theme-toggle flex flex-row items-center mx-10">
      <SunIcon className="h-5 w-5" />
      <label className="relative inline-flex items-center cursor-pointer mx-2">
        <input type="checkbox" value="" className="sr-only peer"></input>
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-200 dark:peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
      <MoonIcon className="h-5 w-5" />
    </div>
  );
};
