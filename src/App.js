import { useEffect, useState } from "react";
import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function App() {
  const [Lat, setLat] = useState(28);
  const [Long, setLong] = useState(77);

  const [ipAddress, setIpAddress] = useState("27.62.208.19");
  const handleData = (e) => {
    setIpAddress(e.target.value);
  };
  let url = `https://freeipapi.com/api/json/${ipAddress}`;

  useEffect(() => {
    fetch(url)
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
        console.log(data,{Lat},{Long});
      }, [])
      .catch((error) => console.error("Unable to fetch data"));
  });
  return (
    <>
      <input type="text" id="ipAddress-input" onChange={handleData} />
      <MapContainer
        center={[Lat, Long]}
        zoom={10}
        scrollWheelZoom={false}
        style={{
          width: 500,
          height: 500
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[Lat, Long]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default App;
