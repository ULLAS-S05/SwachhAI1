import { useState } from "react";
import api from "../../services/api";
import ComplaintDetailsModal from "./ComplaintDetailsModal";

export default function ComplaintTable({
complaints = []
}) {

const [selectedComplaint, setSelectedComplaint] =
useState(null);

const [openModal, setOpenModal] =
useState(false);

const updateStatus = async (
complaintId,
status
) => {


try {

  await api.put(
    `/complaints/${complaintId}/status?status=${status}`
  );

  window.location.reload();

} catch (err) {

  alert("Failed to update status");

}


};

return (


<>
  <div
    className="
      bg-white/80
      backdrop-blur-xl
      border border-white/30
      rounded-3xl
      shadow-2xl
      p-8
    "
  >

    <div className="flex justify-between items-center mb-6">

      <h2 className="text-3xl font-black text-green-700">
        Recent Complaints
      </h2>

      <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold">
        {complaints.length} Complaints
      </span>

    </div>

    <div className="overflow-x-auto">

      <table className="w-full border-separate border-spacing-y-2">

        <thead className="sticky top-0 bg-gradient-to-r from-green-700 to-emerald-600 text-white">

          <tr>

            <th className="p-4 text-left rounded-l-xl">ID</th>
            <th className="p-4 text-left">Village</th>
            <th className="p-4 text-left">Panchayat</th>
            <th className="p-4 text-left">Taluk</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left rounded-r-xl">Action</th>

          </tr>

        </thead>

        <tbody>

          {complaints.map((c) => (

            <tr
              key={c.complaint_id}
              className="
                bg-white
                hover:bg-green-50
                hover:shadow-lg
                transition-all
                duration-300
              "
            >

              <td className="p-4 font-semibold rounded-l-xl">
                {c.complaint_id}
              </td>

              <td className="p-4">
                {c.village}
              </td>

              <td className="p-4">
                {c.panchayat}
              </td>

              <td className="p-4">
                {c.taluk}
              </td>

              <td className="p-4">

                <span
                  className={
                    c.status === "RESOLVED"
                      ? "bg-green-100 text-green-700 px-4 py-1 rounded-full font-bold"
                      : c.status === "IN_PROGRESS"
                      ? "bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full font-bold"
                      : "bg-red-100 text-red-700 px-4 py-1 rounded-full font-bold"
                  }
                >
                  {c.status}
                </span>

              </td>

              <td className="p-4 flex gap-2 rounded-r-xl">

                <button
                  onClick={() => {
                    setSelectedComplaint(c);
                    setOpenModal(true);
                  }}
                  className="
                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500
                    text-white
                    px-4
                    py-2
                    rounded-xl
                    shadow-lg
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  View
                </button>

                <select
                  value={c.status}
                  onChange={(e) =>
                    updateStatus(
                      c.complaint_id,
                      e.target.value
                    )
                  }
                  className="
                    border
                    border-gray-200
                    rounded-xl
                    px-3
                    py-2
                    bg-white
                    shadow-sm
                    focus:ring-2
                    focus:ring-green-500
                    outline-none
                  "
                >

                  <option value="PENDING">
                    PENDING
                  </option>

                  <option value="IN_PROGRESS">
                    IN_PROGRESS
                  </option>

                  <option value="RESOLVED">
                    RESOLVED
                  </option>

                </select>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </div>

  <ComplaintDetailsModal
    complaint={selectedComplaint}
    open={openModal}
    onClose={() => setOpenModal(false)}
  />
</>


);

}
