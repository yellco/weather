import React from 'react';
import Form from './components/form';
import Weather from './components/weather';
import Info from './components/info';
import './App.css';

const API_KEY = "9fbef5c75dc20326b5b5cde381dd1023";

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined, 
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await url.json();

      let sunset = data.sys.sunset;
      let date = new Date();
      date.setTime(sunset);
      let sunset_date = date.getHours() +  ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_date,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined, 
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: "Введите город!"
      });
    }
  }

  render() {
    return (
      <div>
        <Info/>
        <Form weatherMethod={this.getWeather}/>
        <Weather 
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          pressure={this.state.pressure}
          sunset={this.state.sunset}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
