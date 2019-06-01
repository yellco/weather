import React from 'react';
import Form from './components/form';
import Weather from './components/weather';
import Info from './components/info';
import './App.scss';

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

      if (data.hasOwnProperty("message")) {
        this.setState({
          temp: undefined,
          city: undefined, 
          country: undefined,
          pressure: undefined,
          sunset: undefined,
          error: "Неверно указан город!"
        });
      } else {
        let sunset = data.sys.sunset;
        let date = new Date();
        date.setTime(sunset);
        const currHours = date.getHours();
        const currMinutes = date.getMinutes();
        const currSeconds = date.getSeconds();
        let sunset_date = ('0' + currHours).slice(-2) + ' часа ' + ('0' + (currMinutes)).slice(-2) + ' минут ' + ('0' + (currSeconds)).slice(-2) + " секунд";
        //let sunset_date = currHours + ":" + currMinutes + ":" + currSeconds;
  
        this.setState({
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          pressure: data.main.pressure,
          sunset: sunset_date,
          error: undefined
        });
      }
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
      <div className="rootDiv">
        <div id="elements">
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
        <div id="video-bg"> 
            <video width="100%" height="auto" preload="auto" autoPlay="autoplay"
            loop="loop" poster="./assets/Nature-Sunset.jpg">
                <source src="./assets/Nature-Sunset.mp4" type="video/mp4"></source>
                <source src="./assets/Nature-Sunset.webm" type="video/webm"></source>
            </video>
        </div>
      </div>
    );
  }
}

export default App;
