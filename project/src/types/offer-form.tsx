export type OfferForm = {
  bedrooms: number;
  city: City;
  description: string;
    goods: [string];
  host: {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
  };
  id: number;
  images: [string];
  isPremium: boolean;
  location: Point;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
  };

export type City = {
    location: {
    latitude: number;
    longitude: number;
    zoom: number;
    };
    name: string;
}

export type Point = {
    latitude: number;
    longitude: number;
    zoom: number;
};


