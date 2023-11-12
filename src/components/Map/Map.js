import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function Map(props) {
  const [Lat, setLat] = useState(0);
  const [Long, setLong] = useState(0);


  useEffect(() => {
    fetch(props.url)
      .then((response) => response.json())
      .then((data) => {
        const {
          // cityName,
          // ipAddress,
          latitude,
          longitude,
          // regionName,
          // timeZone,
          // zipCode,
        } = data;
        setLat(latitude);
        setLong(longitude);
        console.log(data, { Lat, Long });
      })
      .catch((error) => console.error("Unable to fetch data"));
  }, [Lat, Long, props.url]);
  return (
    <MapContainer
      center={[Lat, Long]}
      zoom={1}
      scrollWheelZoom={false}
      style={{
        width: 500,
        height: 500,
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[Lat, Long]}
        icon={L.icon({
            iconUrl: process.env.PUBLIC_URL + "/images/icon-location.svg",
        })}
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
