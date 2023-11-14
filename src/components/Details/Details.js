import React from "react";
import './Details.css';

export default function Details(props) {
    let{ipAddress,loc,timeZone,Zip,countryName} = props;
  return (
    <div className="details">
      <div className="detail"><p className="heading">IP Address</p>{ipAddress}</div>
      <div className="detail"><p className="heading">Location</p>{loc.cityName},{loc.regionName} <span>{Zip}</span></div>
      <div className="detail"><p className="heading">Timezone</p>UTC {timeZone}</div>
      <div className="detail"><p className="heading">Country</p>{countryName}</div>
    </div>
  );
}
