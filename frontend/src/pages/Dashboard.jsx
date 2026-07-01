import { useEffect, useState } from "react";
import api from "../services/api";

import Header from "../components/dashboard/Header";
import StatsCards from "../components/dashboard/StatsCards";
import ComplaintMap from "../components/ComplaintMap";
import AIPanel from "../components/dashboard/AIPanel";
import OfficerSidebar from "../components/dashboard/OfficerSidebar";

export default function Dashboard() {

  const [complaints, setComplaints] = useState([]);

  const panchayat =
    localStorage.getItem("panchayat");

  useEffect(() => {
    loadComplaints();
  }, []);

  const loadComplaints = async () => {

    try {

      const res = await api.get("/complaints");

      const filtered = res.data.filter(
        (c) => c.panchayat === panchayat
      );

      setComplaints(filtered);

    } catch (err) {
      console.log(err);
    }

  };

  const total =
    complaints.length;

  const pending =
    complaints.filter(
      (c) => c.status === "PENDING"
    ).length;

  const progress =
    complaints.filter(
      (c) => c.status === "IN_PROGRESS"
    ).length;

  const resolved =
    complaints.filter(
      (c) => c.status === "RESOLVED"
    ).length;

  return (

    <div className="flex min-h-screen bg-slate-100">

      <OfficerSidebar />

      <div className="flex-1 p-8">

        <div id="dashboard">
          <Header />

          <StatsCards
            total={total}
            pending={pending}
            progress={progress}
            resolved={resolved}
          />
        </div>

        <div
          id="map"
          className="bg-white rounded-3xl shadow-2xl p-6 mb-8"
        >

          <div className="flex justify-between items-center mb-5">

            <h2 className="text-4xl font-black text-green-700">
              🗺 Live Complaint Map
            </h2>

            <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-bold">
              {total} Complaints
            </span>

          </div>

          <ComplaintMap complaints={complaints} />

        </div>

        <div
          id="ai"
          className="mb-8"
        >
          <AIPanel complaints={complaints} />
        </div>

        <div
          id="complaints"
          className="bg-white rounded-3xl shadow-2xl p-8"
        >

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-4xl font-black text-green-700">
              📋 Recent Complaints
            </h2>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold">
              {complaints.length} Records
            </span>

          </div>

          <div className="space-y-5">

            {complaints.map((c) => (

              <div
                key={c.complaint_id}
                className="
                bg-gradient-to-r
                from-white
                to-green-50
                border
                border-green-100
                rounded-3xl
                p-6
                shadow-lg
                hover:shadow-2xl
                transition-all
                "
              >

                <div className="flex justify-between items-center">

                  <div>

                    <h3 className="text-xl font-bold">
                      {c.complaint_id}
                    </h3>

                    <p className="text-gray-500">
                      {c.village}
                    </p>

                  </div>

                  <span
                    className={
                      c.status === "RESOLVED"
                        ? "bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold"
                        : c.status === "IN_PROGRESS"
                        ? "bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-bold"
                        : "bg-red-100 text-red-700 px-4 py-2 rounded-full font-bold"
                    }
                  >
                    {c.status}
                  </span>

                </div>

                <p className="mt-4 text-gray-700">
                  {c.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  );

}