import React, { useState } from 'react';
import './ButtonsRadio.scss';

export type DisplayOptionFn<T> = (option: T) => string;

export interface ButtonsRadioProps<T, V = any> {
  options: T[];
  displayOptionFn: DisplayOptionFn<T>;
  extractOptionValueFn: (option: T) => V;
  handleSelectedOptionFn?: (option: T) => void;
}

function ButtonsRadio<T>({ options, displayOptionFn, handleSelectedOptionFn, extractOptionValueFn }: ButtonsRadioProps<T>) {
  const [selectedOption, selectOption] = useState<T | null>(null);

  const isOptionSelected = (option: T): boolean =>
    !!selectedOption && extractOptionValueFn(option) === extractOptionValueFn(selectedOption);

  const hasSelectedClass = (option: T, index: number): string => {
    const selectedClassName = ' selected';
    if (selectedOption) {
      return isOptionSelected(option) ? selectedClassName : '';
    }

    if (options.length && index === 0) {
      return selectedClassName;
    }
    return '';
  };

  return (
    <div className="buttons-radio d-flex justify-between">
      {options.map((option, index) => (
        <div
          className={
            'font-weight-300 px-24 py-8 text-align-center buttons-radio__option cursor-pointer flex-grow-1 flex-basis-0' +
            hasSelectedClass(option, index)
          }
          key={index}
          onClick={() => {
            selectOption(option);
            handleSelectedOptionFn?.(option);
          }}
        >
          {displayOptionFn(option)}
        </div>
      ))}
    </div>
  );
}

export default ButtonsRadio;
