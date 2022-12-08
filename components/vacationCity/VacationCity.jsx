import { useEffect, useState } from "react";
import style from "../vacationCity/VacationCity.module.scss";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import axios from "axios";

const VacationCity = ({ currentCity }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${currentCity.country}${currentCity.cityName}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
      );
      const data = response.data;

      if (data.results.length > 0) {
        setCoordinates({
          lat: data.results[0].geometry.location.lat,
          lng: data.results[0].geometry.location.lng,
        });
      }
    };

    fetchCoordinates();
  }, [currentCity]);

  if (!isLoaded && coordinates) {
    console.log(coordinates);
    return <div>Loading...</div>;
  }
  return (
    <div className={style.container}>
      <GoogleMap
        zoom={14}
        center={{ lat: coordinates?.lat, lng: coordinates?.lng }}
        mapContainerClassName={style.map}
      >
        <Marker position={{ lat: coordinates?.lat, lng: coordinates?.lng }} />
      </GoogleMap>
      <div className={style.details}>
        <div className={style.placeContainer}>
          <div className={style.cityName}>{currentCity.cityName}</div>
          <div className={style.country}>{currentCity.country}</div>
        </div>
        <div className={style.priceContainer}>
          <div>price: </div>
          <div className={style.price}>{currentCity.vacationprice}</div>
        </div>
      </div>
    </div>
  );
};

export default VacationCity;
