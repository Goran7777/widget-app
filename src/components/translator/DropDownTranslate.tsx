import React, { useState } from 'react';
import Select from 'react-select';
import { options } from '../../static-data';
import { IOption } from '../../App';
import './DropDownTranslate.scss';

interface IProps {
  options: IOption[];
  onSetLanguage: React.Dispatch<React.SetStateAction<IOption>>;
}

const DropDownTranslate = ({ options, onSetLanguage }: IProps) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption: IOption) => {
    onSetLanguage({ ...selectedOption });
  };

  return (
    <div className="container">
      <div className="container__field">
        <label htmlFor="language" className="container__field-label">
          Select Language
        </label>
        <div id="language" className="container__field-selection">
          <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
            placeholder="Afrikaans = default"
            className="container__selected"
          />
        </div>
      </div>
    </div>
  );
};

export default DropDownTranslate;
