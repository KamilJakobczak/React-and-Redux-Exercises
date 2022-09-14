import React from 'react';
import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  render() {
    return (
      <ColorContext.Consumer>
        {color => (
          <div className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {value => (value === 'english' ? 'Submit' : 'Voorleggen')}
            </LanguageContext.Consumer>
          </div>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
