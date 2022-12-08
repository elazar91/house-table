import style from "./VacationPopup.module.scss";

const VacationPopup = ({ setVacationPopup, setAllCities, allCities }) => {
  console.log(allCities);
  const addCityVacation = (e) => {
    e.preventDefault();

    setAllCities([
      {
        cityName: e.target.elements["cityName"].value,
        country: e.target.elements["country"].value,
        vacationprice: e.target.elements["price"].value,
      },
      ...allCities,
    ]);

    // console.log({
    //   city: e.target.elements["city"].value,
    //   country: e.target.elements["country"].value,
    //   price: e.target.elements["price"].value,
    // });
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
          <button type="submit" className={style.submit}>
            Add vacation
          </button>
        </div>
      </form>
    </div>
  );
};

export default VacationPopup;
