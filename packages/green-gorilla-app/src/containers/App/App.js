import React, { Component } from 'react';
import OpenWeatherMap from 'react-open-weather-map';
import Header from '../../components/Header/Header';
import data from './data';
import MoraleCheck from '../../components/MoraleCheck/MoraleCheck';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: { name: '', version: '' },
      morale: props.morale ? props.morale : 'good'
    };

    this.getData = this.getData.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  getData(city) {
    this.props.actions.getData(city).then(data => {
      this.setState(data);
    });
  }

  componentDidMount() {
    this.getData(data[2].city);
  }

  handleOnClick(e) {
    this.getData(e.target.value);
  }

  render() {
    const buttons = data.map(({ city }) => (
      <button type="button" key={city} value={city} onClick={this.handleOnClick}>{city}</button>)
    );
    return (
      <div className={`App ${this.state.morale}`}>
        <Header {...this.state.info} />
        <div className="buttons-container">
          {buttons}
        </div>
        <OpenWeatherMap
          config={{ containerClassName: 'OpenWeatherMap' }}
          data={this.state.currentWeather} />
        <MoraleCheck onClick={(id) => { this.setState({ morale: id }); }} />
      </div>
    );
  }
}

export default App;
