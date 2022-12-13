import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import style from "./Map.module.scss";

const Map = ({ coordinates }) => {
  coordinates ? <div>Loading...</div> : null;

  return (
    <>
      {}
      <GoogleMap
        zoom={6}
        center={{ lat: coordinates?.lat, lng: coordinates?.lng }}
        mapContainerClassName={style.map}
      >
        <MarkerF position={{ lat: coordinates?.lat, lng: coordinates?.lng }} />
      </GoogleMap>
    </>
  );
};

export default Map;
