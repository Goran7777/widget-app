import React, { useState } from 'react';
import DropDownTranslate from './DropDownTranslate';
import Convert from './Convert';
import { IOption } from '../../App';
import './Translate.scss';

const options: IOption[] = [
  {
    label: 'Africaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  { label: 'Hindi', value: 'hi' },
  {
    label: 'French',
    value: 'fr',
  },
  {
    label: 'Dutch',
    value: 'nl',
  },
  {
    label: 'Italian',
    value: 'it',
  },
  {
    label: 'Serbian',
    value: 'sr',
  },
];

const Translate = () => {
  const [language, setLanguage] = useState<IOption>(options[0]);
  const [text, setText] = useState('');

  return (
    <div className="translate">
      <label htmlFor="text" className="translate-label">
        Enter Text
      </label>
      <input
        id="text"
        type="text"
        className="translate-input"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <DropDownTranslate options={options} onSetLanguage={setLanguage} />
      <hr />
      <h3 className="translate-header">Output</h3>
      <Convert text={text} language={language} clearInput={setText} />
    </div>
  );
};

export default Translate;
