import { useState } from "react";
import CityCard from "../cityCard/cityCard";
import style from "../sideNav/SideNav.module.scss";
import VacationPopup from "../popup/VacationPopup";

const SideNav = ({ allCities, setCurrentCity, setAllCities }) => {
  const [vacationPopup, setVacationPopup] = useState(false);
  return (
    <div className={style.container}>
      <h1 className={style.header}>#Travel_history</h1>
      {allCities.map((city) => (
        <CityCard
          key={city.id}
          city={city}
          setCurrentCity={setCurrentCity}
          setAllCities={setAllCities}
          allCities={allCities}
        />
      ))}
      <div className={style.wrapBtn}>
        <button
          className={style.addCity}
          type="button"
          onClick={() => setVacationPopup(true)}
        >
          Where've you been?
        </button>
      </div>
      {vacationPopup ? (
        <VacationPopup
          setVacationPopup={setVacationPopup}
          setAllCities={setAllCities}
          allCities={allCities}
        />
      ) : null}
    </div>
  );
};

export default SideNav;
