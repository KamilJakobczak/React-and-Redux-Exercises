import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [input, setInput] = useState('programming');
  const [results, setResults] = useState([]);
  console.log(results);

  useEffect(() => {
    const searchWiki = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: input,
        },
      });
      setResults(data.query.search);
    };

    if (input && !results.length) {
      searchWiki();
    } else {
      const timeoutId = setTimeout(() => {
        if (input) {
          searchWiki();
        }
      }, 500);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [input]);

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
