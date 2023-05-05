import React from 'react';
import { useState } from 'react';

import { ChevronDownIcon } from '../../assets/icons/ArrowDown';
import { ChevronUpIcon } from '../../assets/icons/ArrowUp';

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
    <div className="dropdown ml-4 cursor-pointer relative">
      <div
        className="dropdown__current-language flex flex-row items-center"
        onClick={clickHandler}
      >
        <div className="">{selectLanguage}</div>
        <div className="dropdown__icon">
          {!isOpen ? (
            <ChevronDownIcon className="h-4 ml-2" />
          ) : (
            <ChevronUpIcon className="h-4 ml-2" />
          )}
        </div>
      </div>
      <div
        className={`dropdown__lang-list absolute top-8 ${
          isOpen ? '' : 'hidden'
        }`}
      >
        {Object.values(Languages).map((val) => (
          <div
            className="lang-list__item"
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
