import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
//import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {City} from '../../types/offer-form';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import 'leaflet/dist/leaflet.css';
import { OfferForm } from '../../types/offer-form';

type MapProps = {
  offers: OfferForm[];
  city: City;
}

function Map({city, offers}: MapProps){
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  /*const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
*/
  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, defaultCustomIcon]);
  return (
    <div
      style={{height:'500px'}}
      ref={mapRef}
    >
    </div>
  );
}
export default Map;
