import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Convert.scss';

// translate API url https://translation.googleapis.com/language/translate/v2
// API key AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM   only for localhost,its paid service

interface IProps {
  language: { label: string; value: string };
  text: string;
  clearInput: React.Dispatch<React.SetStateAction<string>>;
}

const Convert = ({ language, text, clearInput }: IProps) => {
  const [translated, setTranslated] = useState('');
  const [debauncedText, setDebauncedText] = useState(text);
  // const [users, setUsers] = useState([]);
  // example of axios get request
  // const URL = 'https://jsonplaceholder.typicode.com/users';
  // useEffect(() => {
  //   const getResponse = async () => {
  //     const { data } = await axios.get(URL);
  //     setUsers(data);
  //   };
  //   getResponse();
  // }, []);
  // console.log(users);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebauncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const doTranslate = async () => {
        const { data } = await axios.post(
          'https://translation.googleapis.com/language/translate/v2',
          {},
          {
            params: {
              q: debauncedText,
              target: language.value,
              key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
            },
          }
        );
        setTranslated(data.data.translations[0].translatedText);
      };
      doTranslate();
    }, 500);
  }, [language, debauncedText]);

  // console.log(translated);
  return (
    <div className="container">
      <h1 className="container-title">
        {translated && `Translated word is - "${translated}"`}
      </h1>
    </div>
  );
};

export default Convert;
