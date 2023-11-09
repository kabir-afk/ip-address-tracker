import { useEffect } from "react";
import './App.css';
function App() {
  const ipAddress = "103.164.25.251";
  const url = `https://freeipapi.com/api/json/${ipAddress}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  });
  return (
    <>
      <div className="App">Hello world </div>
      <div id="map"></div>
    </>
  );
}

export default App;
