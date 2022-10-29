import MainPage from '../../pages/main-page/main-page';

type AppMainProps = {
  placeCardCount: number;
}
//корневой компонент App
function App({ placeCardCount }: AppMainProps): JSX.Element {
  return (
    <MainPage placeCardCount={placeCardCount} />
  );
}

export default App;
