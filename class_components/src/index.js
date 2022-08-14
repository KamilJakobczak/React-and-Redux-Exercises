import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, lng: null, errorMessage: '' };
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      err => {
        this.setState({
          errorMessage: err.message,
        });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat && !this.state.lng) {
      return <div>Error:{this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat && this.state.lng) {
      return <SeasonDisplay lat={this.state.lat} lng={this.state.lng} />;
    }
    return <Loader message='Please accept location request' />;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
