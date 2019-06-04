import React from 'react';
import Form from './components/form';
import Weather from './components/weather';
import Info from './components/info';
import Time from './components/time';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

import bg from './assets/Nature-Sunset.jpg';
import bgVideoMp4 from './assets/Nature-Sunset.mp4';
import bgVideoWebm from './assets/Nature-Sunset.webm';

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

      // https://github.com/clauderic/react-infinite-calendar

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
        <div id="elements" className="mainblock main">
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
        <div className="mainblock rightblock">
          <Time/>
          <InfiniteCalendar
            className="calendar"
            width={400}
            height={300}
            selected={new Date()}
            disabledDays={[0,6]}
            minDate={new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 7)}
          />
        </div>
        <div id="video-bg">
            <video width="100%" height="auto" preload="auto" autoPlay="autoplay"
            loop="loop" poster={bg}>
                <source src={bgVideoWebm} type="video/webm"></source>
                <source src={bgVideoMp4} type="video/mp4"></source>
            </video>
        </div>
      </div>
    );
  }
}

export default App;
