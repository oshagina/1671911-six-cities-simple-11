import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute,AuthorizationStatus} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Property from '../../pages/property/property';
import PropertyNotLogged from '../../pages/property-not-logged/property-not-logged';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {OfferForm} from '../../types/offer-form';

type AppProps = {
  placeCount: number;
  offers: OfferForm[];
}
//корневой компонент App
function App({ placeCount, offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = {AppRoute.Main}
          element = {<MainPage placeCount = {placeCount} offers ={offers} />}
        />

        <Route
          path={'${AppRoute.Property}/:id'}
          element={<Property/>}
        />
        <Route
          path={AppRoute.PropertyNotLogged}
          element={<PropertyNotLogged/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus = {AuthorizationStatus.NoAuth}
            >
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<Login/>}
        />
        <Route
          path="*"
          element = {<NotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>

  );
}

export default App;


