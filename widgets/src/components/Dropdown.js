import React, { useState, useEffect, useRef } from 'react';
import Text from './Text';

const Dropdown = ({ options, selected, onSelected, isTxt, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = e => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map(option => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className='item'
        onClick={() => {
          onSelected(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <>
      <div className='ui form' ref={ref}>
        <div className='field'>
          <label htmlFor='' className='label'>
            {label}
          </label>
          <div
            className={`ui selection dropdown ${open ? 'visible active' : ''}`}
            onClick={() => setOpen(!open)}
          >
            <i className='dropdown icon'></i>
            <div className='text'>{selected.label}</div>
            <div className={`menu ${open ? 'visible transition' : ''}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
      {isTxt ? <Text selected={selected.value} /> : null}
    </>
  );
};

export default Dropdown;
