import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Search.scss';

export interface IResult {
  ns: number;
  title: string;
  pageid: number;
  size: number;
  wordcount: number;
  snippet: string;
  timestamp: string;
}

const Search = () => {
  const [term, setTerm] = useState('welcome');
  const [debouncedTerm, setDebauncedTerm] = useState(term);
  const [results, setResults] = useState<IResult[]>([]);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebauncedTerm(term);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);
  useEffect(() => {
    const search = async (): Promise<void> => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };
    if (debouncedTerm) {
      search();
    }
  }, [debouncedTerm]);

  return (
    <div className="container">
      <div className="container-field">
        <label className="container-field__label" htmlFor="input">
          Enter Search Term
        </label>
        <input
          className="container-field__input"
          type="text"
          id="input"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      <div>
        {results.map((result, i: number) => {
          return (
            <div className="item" key={result.pageid}>
              <button className="item__button">
                <a
                  className="item__button--link"
                  href={`https://en.wikipedia.org?curid=${result.pageid}`}
                >
                  Go To
                </a>
              </button>
              <h3 className="item__title">{result.title}</h3>
              <span
                dangerouslySetInnerHTML={{ __html: result.snippet }}
                className="item__snippet"
              ></span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
