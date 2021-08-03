import React from 'react';

const Header = () => {

  // let today = new Date().toLocaleString('ru-RU', {
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric'
  // });


  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <h1 className="header__title">Прогноз погоды в Москве на 7 дней</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;