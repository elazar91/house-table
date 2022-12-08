import style from "./VacationPopup.module.scss";

const VacationPopup = ({ setVacationPopup }) => {
  const addCityVacation = (e) => {
    e.preventDefault();

    console.log({
      city: e.target.elements["city"].value,
      country: e.target.elements["country"].value,
      price: e.target.elements["price"].value,
    });
  };
  const closePopup = (e) => {
    e.stopPropagation();
    setVacationPopup(false);
  };
  return (
    <div className={style.popupContainer}>
      <div className={style.overlay}>
        <button onClick={closePopup} className={style.close}>
          close
        </button>
        <form className={style.popupContent} onSubmit={addCityVacation}>
          <label htmlFor="city">city:</label>
          <input type="text" name="city" id="city" />
          <label htmlFor="country">country:</label>
          <input type="text" name="country" id="country" />
          <label htmlFor="">price:</label>
          <input type="text" name="price" id="price" />
          <button type="submit">Add vacation</button>
        </form>
      </div>
    </div>
  );
};

export default VacationPopup;
