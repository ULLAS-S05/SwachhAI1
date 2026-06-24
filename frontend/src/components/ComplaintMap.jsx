import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const yellowIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const greenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

export default function ComplaintMap({
  complaints
}) {

  const getIcon = (status) => {

    if (status === "PENDING")
      return redIcon;

    if (status === "IN_PROGRESS")
      return yellowIcon;

    return greenIcon;
  };

  return (

    <MapContainer
      center={[12.42, 75.73]}
      zoom={12}
      style={{
        height: "500px",
        width: "100%"
      }}
    >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {complaints.map((c) => (

        <Marker
          key={c.complaint_id}
          position={[
            c.latitude,
            c.longitude
          ]}
          icon={getIcon(c.status)}
        >

          <Popup>

            <b>
              {c.complaint_id}
            </b>

            <br />

            {c.description}

            <br />

            Village:
            {" "}
            {c.village}

            <br />

            Status:
            {" "}
            {c.status}

          </Popup>

        </Marker>

      ))}

    </MapContainer>

  );
}
