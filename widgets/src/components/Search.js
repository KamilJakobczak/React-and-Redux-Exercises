import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [input, setInput] = useState('programming');
  const [debouncedInput, setDebouncedInput] = useState(input);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      // console.log(`za 1s ustawię debouncedInput na: ${input}`);
      setDebouncedInput(input);
    }, 1000);
    return () => {
      // console.log(
      //   'Czyszczę timeout za każdy razem jak input się zmienia'
      // );
      clearTimeout(timerId);
    };
  }, [input]);

  useEffect(() => {
    // console.log('Fetchuję dane z wiki api');
    const searchWiki = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedInput,
        },
      });

      setResults(data.query.search);
      // console.log('zapisuję zwrócone dane w results');
    };
    // console.log(
    //   'wywołuję fetchowanie danych za każdym razem jak zmieni się debouncedInput'
    // );
    searchWiki();
  }, [debouncedInput]);

  const renderedResults = results.map(result => {
    return (
      <div key={result.pageid} className='item'>
        <div className='right floated content'>
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className='ui button'
          >
            Go
          </a>
        </div>
        <div className='content'>
          <div className='header'>{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label htmlFor=''>Enter search term:</label>
          <input
            type='text'
            className='input'
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </div>
      </div>
      <div className='ui celled list'>{renderedResults}</div>
    </div>
  );
};

export default Search;
