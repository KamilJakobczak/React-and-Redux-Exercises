import React, { useState } from 'react';
import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Route from './Route';
import Search from './Search';
import Translate from './Translate';
import Header from './Header';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use it by creating components',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'The Color Blue',
    value: 'blue',
  },
];

const App = () => {
  const [selected, setSelected] = useState('');

  return (
    <div>
      <Header />
      <Route path={'/'}>
        <Accordion items={items} />
      </Route>
      <Route path={'/search'}>
        <Search />
      </Route>
      <Route path={'/dropdown'}>
        <Dropdown
          label='Select a color'
          options={options}
          selected={selected}
          onSelected={setSelected}
          isTxt={true}
        />
      </Route>
      <Route path={'/translate'}>
        <Translate />
      </Route>
    </div>
  );
};

export default App;
