import React from 'react';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = '9ba6e5ed9610d49dcea7d39e4a9b4943';

class App extends React.Component {
  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Montreal&mode=json&appid=${API_KEY}&units=metric`);
  }
  render() {
    return(
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;