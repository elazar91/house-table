import { useState } from "react";
import CityCard from "../cityCard/cityCard";
import style from "../sideNav/SideNav.module.scss";
import VacationPopup from "../popup/VacationPopup";

const SideNav = ({ allCities, setCurrentCity, setAllCities }) => {
  const [vacationPopup, setVacationPopup] = useState(false);
  return (
    <div className={style.container}>
      {allCities.map((city) => (
        <CityCard
          key={city.id}
          city={city}
          setCurrentCity={setCurrentCity}
          setAllCities={setAllCities}
          allCities={allCities}
        />
      ))}
      <button
        className={style.addCity}
        type="button"
        onClick={() => setVacationPopup(true)}
      >
        Add vacation
      </button>
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
