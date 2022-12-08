import { useEffect, useRef, useState } from "react";
import style from "../cityCard/CityCard.module.scss";
import axios from "axios";

const CityCard = ({ city, setCurrentCity }) => {
  const [img, setImg] = useState("");
  useEffect(() => {
    const fetchPicture = async () => {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${city.country}&client_id=b35UEZ1EvhHC_YlchtCRY2q2SVC5RgsfoKXn_60xTfI`
      );
      const data = response.data;
      setImg(data.results[0]?.urls.thumb);
    };

    fetchPicture();
  }, [city]);

  const selectCity = () => {
    setCurrentCity(city);
  };

  return (
    <div className={style.card} onClick={selectCity}>
      <picture>
        <img src={`${img}`} alt="" className={style.picture} />
      </picture>
      <div className={style.details}>
        <div className={style.placeContainer}>
          <div className={style.cityName}>{city.cityName}</div>
          <div>{city.country}</div>
        </div>
        {/* <div className={style.priceContainer}>
          <div>price: </div>
          <div className={style.price}>{city.vacationprice}</div>
        </div> */}
      </div>
    </div>
  );
};

export default CityCard;
