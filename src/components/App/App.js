import Map from '../Map/Map';
import SearchBar from '../SearchBar/SearchBar';
import { useState } from 'react';
export default function App() {
  const [ipAddress, setIpAddress] = useState("");
  const handleData = (userInput) => {
    setIpAddress(userInput);
  };
  let url = `https://freeipapi.com/api/json/${ipAddress}`;

  return(
    <main>
      <SearchBar handleData = {handleData}/>
      <Map url={url}/>
    </main>
  )
}