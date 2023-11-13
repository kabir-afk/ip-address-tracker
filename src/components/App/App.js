import { useState, useEffect } from "react";
import Map from "../Map/Map";
import SearchBar from "../SearchBar/SearchBar";
import Details from "../Details/Details";
import "./App.css";

export default function App() {
  const [Pos, setPos] = useState({
    latitude: "",
    longitude: "",
  });
  const [details, setDetails] = useState({
    cityName: "",
    ipAddress: "",
    regionName: "",
    timeZone: "",
    zipCode: "",
    countryName:""
  });
  const [ipAddress, setIpAddress] = useState("");
  const handleData = (userInput) => {
    setIpAddress(userInput);
  };
  let url = `https://freeipapi.com/api/json/${ipAddress}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const {
          cityName,
          ipAddress,
          latitude,
          longitude,
          regionName,
          timeZone,
          zipCode,
          countryName
        } = data;
        setPos({ latitude, longitude });
        setDetails({
          ipAddress,
          cityName,
          regionName,
          timeZone,
          zipCode,
          countryName
        });
        // console.log(data);
      })
      .catch((error) => console.error("Unable to fetch data"));
  }, [url]);
  return (
    <main>
      <h1>IP Address Tracker</h1>
      <SearchBar handleData={handleData} />
      <Details
        ipAddress={details.ipAddress}
        loc={{ regionName: details.regionName, cityName: details.cityName }}
        timeZone={details.timeZone}
        Zip={details.zipCode}
        countryName = {details.countryName}
      />
      <Map url={url} Lat={Pos.latitude} Lng={Pos.longitude} />
    </main>
  );
}
