import { MapContainer, TileLayer, Marker ,useMap} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import './Map.css';

export default function Map(props) {
    let{Lat,Lng} = props;
    function ChangeView({ center }) {
      const map = useMap();
      map.flyTo(center);
      return null;
  }
  return (
    <MapContainer
      center={[Lat, Lng]}
      zoom={13}
      scrollWheelZoom={false}
      id="map"
    >
      <ChangeView center={[Lat, Lng]} />
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
      </Marker>
    </MapContainer>
  );
}
