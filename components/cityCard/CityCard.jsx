import { useEffect, useState } from "react";
import style from "../cityCard/CityCard.module.scss";
import axios from "axios";

const CityCard = ({ city, setCurrentCity, setAllCities, allCities }) => {
  const [img, setImg] = useState("");
  useEffect(() => {
    const fetchPicture = async () => {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${city.country}&client_id=b35UEZ1EvhHC_YlchtCRY2q2SVC5RgsfoKXn_60xTfI`
      );
      const data = await response.data;
      setImg(data.results[0]?.urls.thumb);
    };

    fetchPicture();
  }, [city]);

  const removeItem = (id) => {
    const filteredArray = allCities.filter((city) => city.id !== id);
    setAllCities(filteredArray);
    console.log(filteredArray);
  };

  return (
    <div className={style.card} onClick={() => setCurrentCity(city)}>
      <picture>
        <img src={`${img}`} alt="" className={style.picture} />
      </picture>
      <div className={style.details}>
        <div className={style.placeContainer}>
          <div className={style.cityName}>{city.cityName}</div>
          <div>{city.country}</div>
        </div>
        <button
          className={style.delete}
          onClick={() => removeItem(city.id)}
        ></button>
      </div>
    </div>
  );
};

export default CityCard;
