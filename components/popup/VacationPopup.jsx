import style from "./VacationPopup.module.scss";
import { nanoid } from "nanoid";
import { useState } from "react";

const VacationPopup = ({ setVacationPopup, setAllCities, allCities }) => {
  console.log(allCities);

  const [notCompleted, setNotCompleted] = useState(false);

  const addCityVacation = (e) => {
    e.preventDefault();

    if (
      !e.target.elements["cityName"].value ||
      !e.target.elements["country"].value ||
      !e.target.elements["price"].value
    ) {
      setNotCompleted(true);
      setVacationPopup(true);
      return;
    }

    setAllCities([
      {
        cityName: e.target.elements["cityName"].value,
        country: e.target.elements["country"].value,
        vacationprice: e.target.elements["price"].value,
        id: nanoid(),
      },
      ...allCities,
    ]);
    setVacationPopup(false);
  };
  const closePopup = (e) => {
    e.stopPropagation();
    setVacationPopup(false);
  };
  return (
    <div className={style.overlay}>
      <form className={style.popupContent} onSubmit={addCityVacation}>
        <button onClick={closePopup} className={style.close}>
          close
        </button>
        <div className={style.formInput}>
          <label htmlFor="cityName">city:</label>
          <input type="text" name="cityName" id="cityName" />
          <label htmlFor="country">country:</label>
          <input type="text" name="country" id="country" />
          <label htmlFor="">price:</label>
          <input type="text" name="price" id="price" />
          {notCompleted ? (
            <div className={style.error}>Please fill in all the fields</div>
          ) : null}
          <button type="submit" className={style.submit}>
            Add vacation
          </button>
        </div>
      </form>
    </div>
  );
};

export default VacationPopup;
