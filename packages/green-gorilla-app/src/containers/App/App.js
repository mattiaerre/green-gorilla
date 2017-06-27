import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import OpenWeatherMap from 'react-open-weather-map';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: { name: '', version: '' },
      currentWeather: { weather: [{}], sys: {}, main: {} }
    };
  }

  componentDidMount() {
    this.props.actions.getData().then(data => {
      this.setState(data);
    });
  }

  render() {
    return (
      <div className="App">
        <Header {...this.state.info} />
        <OpenWeatherMap
          config={{ containerClassName: 'OpenWeatherMap' }}
          data={this.state.currentWeather} />
      </div>
    );
  }
}

export default App;
