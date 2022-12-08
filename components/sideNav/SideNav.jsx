import CityCard from "../cityCard/cityCard";
import style from "../sideNav/SideNav.module.scss";

const SideNav = ({ allCities, setCurrentCity }) => {
  return (
    <div className={style.container}>
      {allCities.map((city) => (
        <CityCard key={city.id} city={city} setCurrentCity={setCurrentCity} />
      ))}
    </div>
  );
};

export default SideNav;
