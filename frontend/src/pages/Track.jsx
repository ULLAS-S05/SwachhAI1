import { useState } from "react";
import api from "../services/api";

export default function Track() {

  const [complaintId, setComplaintId] = useState("");
  const [complaint, setComplaint] = useState(null);

  const trackComplaint = async () => {

    try {

      const res = await api.get(
        `/track/${complaintId}`
      );

      setComplaint(res.data);

    } catch {

      alert("Complaint Not Found");

    }
  };

  return (
    <div>

      <h1 className="text-2xl font-bold mb-4">
        Track Complaint
      </h1>

      <input
        className="border p-2 mr-2"
        placeholder="Complaint ID"
        value={complaintId}
        onChange={(e) =>
          setComplaintId(e.target.value)
        }
      />

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={trackComplaint}
      >
        Search
      </button>

      {complaint && (

        <div className="mt-6 border p-4 rounded bg-white">

          <h2 className="text-xl font-bold mb-3">
            Complaint Details
          </h2>

          <p><b>ID:</b> {complaint.complaint_id}</p>
          <p><b>Description:</b> {complaint.description}</p>
          
<p className="mt-2">

<b>Status:</b>{" "}

<span className={
complaint.status==="RESOLVED"
?"bg-green-100 text-green-700 px-3 py-1 rounded-full"

:complaint.status==="PENDING"

?"bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full"

:"bg-blue-100 text-blue-700 px-3 py-1 rounded-full"

}>

{complaint.status}

</span>

</p>

          <p><b>Latitude:</b> {complaint.latitude}</p>
          <p><b>Longitude:</b> {complaint.longitude}</p>

          {complaint.before_image && (
            <>
              <h3 className="mt-4 font-bold">
                Before Image
              </h3>

              <img
                src={`https://swachhai1-1.onrender.com/${complaint.before_image}`}
                alt="Before"
                className="mt-2 w-64 rounded border"
              />
            </>
          )}

          {complaint.after_image && (
            <>
              <h3 className="mt-4 font-bold">
                After Image
              </h3>

              <img
                src={`https://swachhai1-1.onrender.com/${complaint.after_image}`}
                alt="After"
                className="mt-2 w-64 rounded border"
              />
            </>
          )}

        </div>

      )}

    </div>
  );
}
