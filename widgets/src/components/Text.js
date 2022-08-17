import React from 'react';

const Text = ({ selected }) => {
  return (
    <div className='ui header'>
      <p style={{ color: selected }}>
        Change color of this text with a dropdown!
      </p>
    </div>
  );
};

export default Text;
