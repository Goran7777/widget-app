import React from 'react';
import AccordionItem from './AccordionItem';

import { IItem } from '../../App';
import './Accordion.scss';

interface IProps {
  items: IItem[];
}

const Accordion = ({ items }: IProps) => {
  return (
    <div className="accordion">
      <h1 className="accordion__title">React Accordion Example</h1>
      {items.map(({ title, content }, i) => (
        <AccordionItem key={i + 1} title={title} content={content} />
      ))}
    </div>
  );
};

export default Accordion;
