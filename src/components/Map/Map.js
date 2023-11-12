import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function Map(props) {
    let{Lat,Lng} = props;
  return (
    <MapContainer
      center={[Lat, Lng]}
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
        position={[Lat, Lng]}
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
