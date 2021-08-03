import React, { useState } from 'react';
import './AccordionItem.scss';

interface IProps {
  title: string;
  content: string;
  key: number;
}

const AccordionItem = ({ title, content }: IProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion">
      <div
        className="accordion__wrapper"
        onClick={() => setIsActive(!isActive)}
      >
        <h4 className="accordion__title">{title}</h4>
        <button className="accordion__button">{isActive ? 'X' : '>'}</button>
      </div>
      {isActive && <div className="accordion__content">{content}</div>}
    </div>
  );
};

export default AccordionItem;
