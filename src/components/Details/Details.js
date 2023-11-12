import React from "react";

export default function Details(props) {
    let{ipAddress,loc,timeZone,Zip} = props;
  return (
    <div className="details">
      <div className="detail"><p className="heading">IP Address</p>{ipAddress}</div>
      <div className="detail"><p className="heading">Location</p>{loc.regionName} {loc.cityName}</div>
      <div className="detail"><p className="heading">Timezone</p>UTC {timeZone}</div>
      <div className="detail"><p className="heading">ZIP</p>{Zip}</div>
    </div>
  );
}
