import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { someOffers } from './mocks/offers';

const Setting = {
  PLACE_CARD_COUNT: 4,
};

//создаем root элемент
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
//строгий режим для реакта
  <React.StrictMode>
    <App
      placeCount = {Setting.PLACE_CARD_COUNT}
      offers = {someOffers}
    />
  </React.StrictMode>,
);
