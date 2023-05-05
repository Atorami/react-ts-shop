import React from 'react';
import { useState } from 'react';

import { ChevronDownIcon } from '../../assets/icons/ArrowDown';

enum Languages {
  eng = 'ENG',
  ru = 'RUS',
}

export const Language = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectLanguage, setSelectLanguage] = useState(Languages.eng);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const langHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const selectedLang = e.currentTarget.getAttribute(
      'data-value'
    ) as Languages;

    setSelectLanguage(selectedLang);
    setIsOpen(false);
  };

  return (
    <div className="dropdown mx-4 cursor-pointer relative transition duration-200 w-10">
      <div
        className="dropdown__current-language flex flex-row items-center"
        onClick={clickHandler}
      >
        <div className="px-4">{selectLanguage}</div>
        <div className="dropdown__icon transition  ease-in-out duration-200">
          {!isOpen ? (
            <ChevronDownIcon className="h-4 transition  ease-in-out duration-600" />
          ) : (
            <ChevronDownIcon className="h-4 transition  ease-in-out duration-600 rotate-180" />
          )}
        </div>
      </div>
      <div
        className={`dropdown__lang-list absolute top-8 left-0 text-center transition duration-400 w-16 border-gray-50 rounded-lg bg-white shadow-xs  ${
          isOpen ? 'opasity-300 ' : 'opacity-0'
        }`}
      >
        {Object.values(Languages).map((val) => (
          <div
            className="lang-list__item hover:bg-red-100 w-full px-3 rounded-lg"
            data-value={val}
            onClick={langHandler}
          >
            {val}
          </div>
        ))}
      </div>
    </div>
  );
};
