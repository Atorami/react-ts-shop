import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

import { ChevronDownIcon } from '../../assets/icons/ArrowDown';

enum Languages {
  eng = 'ENG',
  ru = 'RUS',
}

export const Language = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectLanguage, setSelectLanguage] = useState(Languages.eng);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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
    <div
      className="dropdown mx-6 cursor-pointer relative w-10"
      ref={dropdownRef}
    >
      <div
        className="dropdown__current-language flex flex-row items-center"
        onClick={clickHandler}
      >
        <div className="px-4">{selectLanguage}</div>
        <div className="dropdown__icon ">
          {!isOpen ? (
            <ChevronDownIcon className="h-4 transition ease-in-out duration-1000 transform rotate-0" />
          ) : (
            <ChevronDownIcon className="h-4 transition ease-in-out duration-1000 transform rotate-180" />
          )}
        </div>
      </div>
      <div
        className={`dropdown__lang-list absolute top-8 left-1 text-center transition-all duration-700 border-gray-50 rounded-lg bg-white shadow-xs z-10 max-h-0 overflow-hidden ${
          isOpen ? 'max-h-20 opacity-100' : 'opacity-0'
        }`}
      >
        {Object.values(Languages).map((val) => (
          <div
            className="lang-list__item hover:bg-red-100 w-full px-3 py-2 rounded-lg"
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
