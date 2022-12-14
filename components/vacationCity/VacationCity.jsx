import { useEffect, useState } from "react";
import style from "../vacationCity/VacationCity.module.scss";
import { useLoadScript } from "@react-google-maps/api";
import axios from "axios";
import Map from "../map/Map";

const VacationCity = ({ currentCity }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyABO0F8O9w1glVE7x5CYt4m5pjiJ8vA8qQ",
  });

  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${currentCity.country}&key=AIzaSyABO0F8O9w1glVE7x5CYt4m5pjiJ8vA8qQ`
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

  if (!isLoaded && !coordinates) {
    console.log(coordinates);
    return <div>Loading...</div>;
  }
  return (
    <div className={style.container}>
      <Map coordinates={coordinates} />
      <div className={style.details}>
        <div className={style.country}>
          <div className={style.placeContainer}>
            <div className={style.cityName}>{currentCity.cityName}</div>
            <div className={style.country}>{currentCity.country}</div>
          </div>
          <div className={style.priceContainer}>
            <div className={style.price}>${currentCity.vacationprice}</div>
          </div>
        </div>
        <a
          href={`http://en.wikipedia.org/wiki/${currentCity.country}`}
          target="_blank"
          rel="noopener noreferrer"
          className={style.wiki}
        >
          Read in wikipedia about {currentCity.country}
        </a>
      </div>
    </div>
  );
};

export default VacationCity;
