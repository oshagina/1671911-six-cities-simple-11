import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  PLACE_CARD_COUNT: 5,
};

//создаем root элемент
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
//строгий режим для реакта
  <React.StrictMode>
    <App
      placeCardCount = {Setting.PLACE_CARD_COUNT}
    />
  </React.StrictMode>,
);
