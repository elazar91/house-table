import Image from "next/image";
import style from "../cityCard/CityCard.module.scss";

const CityCard = ({ city, setCurrentCity }) => {
  const selectCity = () => {
    setCurrentCity(city);
  };

  return (
    <div className={style.card} onClick={selectCity}>
      <div className={style.placeContainer}>
        <div className={style.cityName}>{city.cityName}</div>
        <div>{city.country}</div>
      </div>
      <div className={style.priceContainer}>
        <div>price: </div>
        <div className={style.price}>{city.vacationprice}</div>
      </div>
    </div>
  );
};

export default CityCard;
