import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

export default function LiveMapCard({ complaints = [] }) {

  return (

    <div className="bg-white rounded-3xl shadow-2xl p-8">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-3xl font-black text-green-700">
          🗺 Live Kodagu Complaint Map
        </h2>

        <span className="bg-green-100 px-4 py-2 rounded-full font-bold text-green-700">
          {complaints.length} Active Complaints
        </span>

      </div>

      <MapContainer
        center={[12.4244,75.7382]}
        zoom={10}
        style={{
          height:"550px",
          width:"100%",
          borderRadius:"25px"
        }}
      >

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {complaints.map((c)=>(

          <Marker
            key={c.complaint_id}
            position={[c.latitude,c.longitude]}
          >

            <Popup>

              <div className="space-y-2">

                <h2 className="font-bold">
                  {c.complaint_id}
                </h2>

                <p>
                  <b>Village:</b> {c.village}
                </p>

                <p>
                  <b>Panchayat:</b> {c.panchayat}
                </p>

                <p>
                  <b>Taluk:</b> {c.taluk}
                </p>

                <p>
                  <b>Status:</b> {c.status}
                </p>

                <p>
                  {c.description}
                </p>

              </div>

            </Popup>

          </Marker>

        ))}

      </MapContainer>

    </div>

  );

}
