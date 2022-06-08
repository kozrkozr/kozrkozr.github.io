import React, { useEffect, useState } from 'react';
import Dropdown from '../../components/dropdown/Dropdown';
import { City, getCities, getPlacesToEat, PlaceToEat } from './api';
import DynamicHeader from '../../components/layout/DynamicHeader';
import './PlacesToEat.scss';

function PlacesToEat() {
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [places, setPlaces] = useState<PlaceToEat[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const cities = await getCities();
      const places = await getPlacesToEat();

      setCities(cities);
      setPlaces(places);
    };

    fetchData();
  }, []);

  const fetchPlacesByCity = async (city: City) => {
    setSelectedCity(city);
    const places = await getPlacesToEat(city.id);

    setPlaces(places);
  };

  return (
    <div className="places-to-eat">
      <div className="mb-40 position-sticky">
        <DynamicHeader title={'Заклади харчування'} />
      </div>

      <div className="d-flex justify-end mb-72 px-24">
        <Dropdown
          placeholder="Обрати місто"
          options={cities}
          displayOptionFn={(city: City) => city.name}
          handleSelectedOptionFn={(city: City) => fetchPlacesByCity(city)}
        />
      </div>
      {selectedCity && !places.length ? (
        <div className="d-flex flex-column px-24">
          <div className="font-size-md font-weight-400">Ой.</div>
          <div className="font-size-md font-weight-400 mb-12">Немає кафе.</div>
          <div className="font-size-sm font-weight-400">Спробуй обрати інше місто.</div>
        </div>
      ) : (
        places.map((place, index) => (
          <div className="place d-flex flex-column px-24 mb-72 w-100" key={index}>
            <img className="w-100 place__img mb-10" src={place.imageUrl} />
            <div className="place__title font-size-lg font-weight-400 mb-8">{place.name}</div>
            <div className="place__description font-weight-300 line-height-lg mb-8">{place.description}</div>
            <div className="place__address d-flex align-center">
              <img src={`${process.env.PUBLIC_URL}/icons/location.svg`} />
              <span className="ml-8 font-size-sm color-muted">{place.address}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default PlacesToEat;
