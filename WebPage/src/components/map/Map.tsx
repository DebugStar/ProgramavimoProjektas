import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const position: [number, number] = [54.903958, 23.9585];

function DisableMapInteractions() {
  const map = useMap();

  useEffect(() => {
    map.touchZoom.disable();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.boxZoom.disable();
    map.keyboard.disable();
    map.dragging.disable();
  }, [map]);

  return null;
}

export default function Map() {
  return (
    <MapContainer
      center={position}
      zoom={17}
      zoomControl={false}
      style={{ height: "500px", width: "100%" }}
    >
      <DisableMapInteractions />

      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}