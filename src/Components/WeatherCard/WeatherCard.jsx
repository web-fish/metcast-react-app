import React from 'react';

function WeatherCard({ todayTime, presentDay, tempDay, description, icon, windSpeed, humidity, pressure }) {

  return (
    <div className="weathercard">
      <div className="container">
        <div className="weathercard__body">
          <div className="weathercard__header">
            <p className="weathercard__header-text">{presentDay.slice(0, 10).split('-').reverse().join('.')}</p>
          </div>
          <div className="weathercard__weather">
            <div className="weathercard__time">
              <p className="weathercard__time-city">Москва</p>
              <p className="weathercard__time-time">{todayTime.substring(10, 16)}</p>
            </div>
            <div className="weathercard__icon">
              <div className="weathercard__icon-img">
                <img src={icon} alt="icon" />
              </div>
            </div>
            <div className="weathercard__temp">
              <p className="weathercard__temp-value">{tempDay} &deg;</p>
            </div>
            <div className="weathercard__wind">
              <div className="weathercard__wind-icon">
                <img src={process.env.PUBLIC_URL + '/icons/wind.svg'} alt="Скорость ветра" />
              </div>
              <p className="weathercard__wind-value">{windSpeed} м/с</p>
            </div>
            <div className="weathercard__air">
              <div className="weathercard__air-icon">
                <img src={process.env.PUBLIC_URL + '/icons/air.svg'} alt="Влажность воздуха" />
              </div>
              <p className="weathercard__air-value">{humidity} %</p>
            </div>
            <div className="weathercard__pressure">
              <div className="weathercard__pressure-icon">
                <img src={process.env.PUBLIC_URL + '/icons/pressure.svg'} alt="Атмосферное давление" />
              </div>
              <p className="weathercard__pressure-value">{pressure} мм</p>
            </div>
          </div>
          <div className="weathercard__description">
            <p className="weathercard__description-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;