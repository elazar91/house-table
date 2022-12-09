import Head from "next/head";
import SideNav from "../components/sideNav/SideNav";
import VacationCity from "../components/vacationCity/VacationCity";
import styles from "../styles/Home.module.scss";
import { useState } from "react";

export default function Home({ countries }) {
  const [allCities, setAllCities] = useState(countries);
  const [currentCity, setCurrentCity] = useState(countries[0]);
  return (
    <div className={styles.container}>
      <Head>
        <title>travel history</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homePage}>
        <SideNav
          allCities={allCities}
          setCurrentCity={setCurrentCity}
          setAllCities={setAllCities}
        />
        <VacationCity currentCity={currentCity} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://6388b351d94a7e5040a45fdf.mockapi.io/api/vacations"
  );
  const countries = await res.json();
  return {
    props: {
      countries,
    },
  };
}
