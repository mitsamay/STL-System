//rafce
import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import Basemap from "../Layer/Basemap";
import CSVFilelocal from "../Layer/CSVFilelocal";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
import AircraftCSV from "../Layer/AircraftCSV";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12.5, 20.5],
});
L.Marker.prototype.options.icon = DefaultIcon;

const Mapcontent = () => {
  // javascript

  return (
    <div>
      {/* HTML */}
      <AircraftCSV />
      <MapContainer
        style={{ width: "100%", height: "100vh" }}
        center={[17.966667, 102.6]}
        zoom={7}
        // scrollWheelZoom={true}
      >
        <Basemap />
        <CSVFilelocal />
      </MapContainer>
    </div>
  );
};

export default Mapcontent;
