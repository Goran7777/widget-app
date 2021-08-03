import React, { useState, useRef } from 'react';
import { IOption } from '../../App';
import './DropDown.scss';

interface IProps {
  options: IOption[];
}

const DropDown = ({ options }: IProps) => {
  const [selected, setSelected] = useState<IOption>(options[0]);
  const optionRef = useRef(null);
  const onHandleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelected({
      value: e.target.value,
      label: `The color ${e.target.value}.`,
    });
  };
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <option
        key={option.label}
        className="container__option"
        value={option.value}
      >
        {option.label}
      </option>
    );
  });
  return (
    <div className="container">
      <div className="container__field">
        <h4
          className="container__selected"
          style={{ color: selected.value, marginTop: '1rem' }}
        >
          {selected.label}
        </h4>
        <label htmlFor="color" className="container__field-label">
          Select Color
        </label>
        <select
          id="color"
          className="container__field-selection"
          onChange={onHandleChange}
          value={selected.label}
        >
          {renderedOptions}
        </select>
        {
          <p
            style={{ color: selected.value, marginTop: '1rem' }}
          >{`This text is ${selected.value} color.`}</p>
        }
      </div>
    </div>
  );
};

export default DropDown;
