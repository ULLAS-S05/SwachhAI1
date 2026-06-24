import { useEffect, useState } from "react";
import api from "../services/api";
import ComplaintMap from "../components/ComplaintMap";
import GlassCard from "../components/GlassCard";
import PageWrapper from "../components/PageWrapper";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function AdminDashboard() {

  const [complaints, setComplaints] = useState([]);
  const [searchId, setSearchId] = useState("");

  useEffect(() => {

    const loadData = async () => {

      const res = await api.get("/complaints");
      setComplaints(res.data);

    };

    loadData();

  }, []);


  const timeAgo = (date) => {

    const seconds =
      Math.floor(
        (new Date() - new Date(date)) / 1000
      );

    const minutes =
      Math.floor(seconds / 60);

    const hours =
      Math.floor(minutes / 60);

    const days =
      Math.floor(hours / 24);

    if (days > 0)
      return `${days} day(s) ago`;

    if (hours > 0)
      return `${hours} hour(s) ago`;

    if (minutes > 0)
      return `${minutes} minute(s) ago`;

    return "Just now";
  };


  const filteredComplaints =
    complaints.filter((c) =>
      c.complaint_id
        ?.toLowerCase()
        .includes(
          searchId.toLowerCase()
        )
    );

  const total = filteredComplaints.length;

  const pending =
    filteredComplaints.filter(
      c => c.status === "PENDING"
    ).length;

  const progress =
    filteredComplaints.filter(
      c => c.status === "IN_PROGRESS"
    ).length;

  const resolved =
    filteredComplaints.filter(
      c => c.status === "RESOLVED"
    ).length;

  const active =
    filteredComplaints.filter(
      c => c.status !== "RESOLVED"
    ).length;

  const exportPDF = () => {

    const doc = new jsPDF();

    doc.text(
      "SwachhAI Report",
      20,
      20
    );

    autoTable(doc, {

      startY: 30,

      head: [[
        "ID",
        "Taluk",
        "Panchayat",
        "Status"
      ]],

      body:
        filteredComplaints.map(
          (c) => [
            c.complaint_id,
            c.taluk,
            c.panchayat,
            c.status
          ]
        )

    });

    doc.save(
      "SwachhAI_Report.pdf"
    );
  };

  return (

  <PageWrapper>

    <div>

      <div className="flex justify-between mb-6">

        <h1 className="text-3xl font-bold">
          Kodagu District Admin Dashboard
        </h1>

        <button
          onClick={exportPDF}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Export PDF
        </button>

      </div>

      <input
        type="text"
        placeholder="Search Complaint ID..."
        value={searchId}
        onChange={(e)=>
          setSearchId(e.target.value)
        }
        className="border p-2 rounded w-full mb-4"
      />

      <div className="grid grid-cols-4 gap-4 mb-6">

  <GlassCard
    title="Active"
    value={active}
    color="text-purple-600"
  />

  <GlassCard
    title="Total"
    value={total}
    color="text-blue-600"
  />

  <GlassCard
    title="Pending"
    value={pending}
    color="text-red-600"
  />

  <GlassCard
    title="Progress"
    value={progress}
    color="text-yellow-600"
  />

  <GlassCard
    title="Resolved"
    value={resolved}
    color="text-green-600"
  />

</div>

<ComplaintMap
        complaints={filteredComplaints}
      />

      <div className="mt-8">

        <h2 className="text-2xl font-bold mb-4">
          🔴 Active Complaints
        </h2>

        {filteredComplaints
          .filter(c => c.status !== "RESOLVED")
          .map(c => (

            <div
              key={c.complaint_id}
              className="bg-white p-4 rounded-xl shadow mb-3"
            >

              <p>
                <b>ID:</b> {c.complaint_id}
              </p>

              <p>
                <b>Taluk:</b> {c.taluk}
              </p>

              <p>
                <b>Panchayat:</b> {c.panchayat}
              </p>

              <p>
                <b>Village:</b> {c.village}
              </p>

              <p>
                <b>Status:</b> {c.status}
              </p>

              <p>
                <b>⏱ Created:</b>{" "}
                {timeAgo(c.created_at)}
              </p>

            </div>

          ))}

      </div>

    </div>

  </PageWrapper>

  );
}
