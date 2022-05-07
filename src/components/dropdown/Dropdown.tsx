import React, { useState } from 'react';
import './Dropdown.scss';

export interface DropdownProps<T> {
  options: T[];
  placeholder: string;
  displayOptionFn: DisplayOptionFn<T>;
  handleSelectedOptionFn: (option: T) => void;
}

export type DisplayOptionFn<T> = (option: T) => string;

function Dropdown<T>({ options, placeholder, displayOptionFn, handleSelectedOptionFn }: DropdownProps<T>) {
  const [isOpened, toggle] = useState<boolean>(false);
  const [selectedOption, selectOption] = useState<T | null>(null);

  return (
    <div className={'dropdown font-size-sm font-weight-400' + (isOpened ? ' opened' : '')}   tabIndex={0}
         onBlur={() => {
           toggle(false);
         }}>
      <div
        className="dropdown__header py-12 px-44 d-flex justify-center align-center cursor-pointer "
        onClick={() => toggle((isOpened) => !isOpened)}
      >
        {selectedOption ? displayOptionFn(selectedOption) : placeholder}
        <img className="ml-8" src={`${process.env.PUBLIC_URL}/icons/expand.svg`} />
      </div>
      {isOpened && (
        <div className="dropdown__options d-flex flex-column align-center">
          {options.map((option, index) => (
            <span
              key={index}
              className="mb-12 cursor-pointer"
              onClick={() => {
                selectOption(option);
                handleSelectedOptionFn(option);
                toggle(false);
              }}
            >
              {displayOptionFn(option)}
            </span>
          ))}
        </div>
      )}
      {isOpened && <div style={{ height: '2px' }}></div>}
    </div>
  );
}

export default Dropdown;
