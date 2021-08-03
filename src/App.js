import React, { useState, useEffect } from 'react';

import Header from './Components/Header/Header';
import WeatherCard from './Components/WeatherCard/WeatherCard';
import './scss/index.scss';

function App() {

  const [dataWeather, setDataWeather] = useState([]);

  useEffect(() => {
    fetch("http://api.openweathermap.org/data/2.5/forecast?id=524894&appid=d8b06030932a75f45f391fe3b9b00856&units=metric&lang=ru")
      .then(res => res.json())
      .then(
        (result) => {
          const resultData = result.list;
          setDataWeather(resultData);
        }
      )
  }, [])

  return (
    <div className="app">
      <Header />
      {dataWeather.map(function (item, index) {
        return (
          <WeatherCard
            key={index}
            icon={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            presentDay={item.dt_txt}
            todayTime={item.dt_txt}
            description={item.weather[0].description}
            tempDay={Math.round(item.main.temp)}
            humidity={Math.round(item.main.humidity)}
            pressure={Math.round(item.main.pressure / 1.33)}
            windSpeed={Math.round(item.wind.speed)}
          />
        )
      })}
    </div>
  );
}

export default App;
