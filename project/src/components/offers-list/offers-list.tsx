//import { useState} from 'react';
import PlaceCard from '../../components/place-card/place-card';
import { OfferForm } from '../../types/offer-form';

type OffersListProps = {
  offers: OfferForm[];
}

function OffersList ({offers}: OffersListProps ): JSX.Element {
  // в состоянии будем хранить выбранный вариант
  // const [offer, setOffer] = useState([false]);
  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map ((offer: OfferForm) => (
        <PlaceCard key={offer.id} offer={offer}/>
      ))}
    </div>
  );
}
export default OffersList;
