import { useState } from 'react';
import Bundler from '../bundler';
import CodeEditor from './code-editor';
import Preview from './preview';
const App = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const onClick = async () => {
    const output = await Bundler(input);
    setCode(output);
  };

  return (
    <div>
      <CodeEditor
        initialValue={'const a = 1'}
        onChange={value => setInput(value)}
      />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  );
};

export default App;
