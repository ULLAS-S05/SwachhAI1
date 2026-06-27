import { useEffect, useState } from "react";
import api from "../services/api";

import Sidebar from "../components/admin/Sidebar";
import AdminHeader from "../components/admin/AdminHeader";
import DashboardCards from "../components/admin/DashboardCards";
import ProfileCard from "../components/admin/ProfileCard";
import LiveMapCard from "../components/admin/LiveMapCard";
import TalukChart from "../components/admin/TalukChart";
import ComplaintTable from "../components/admin/ComplaintTable";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function AdminDashboard() {

  const [complaints, setComplaints] = useState([]);
  const [searchId, setSearchId] = useState("");

  useEffect(() => {

    const loadComplaints = async () => {

      const res = await api.get("/complaints");

      setComplaints(res.data);

    };

    loadComplaints();

  }, []);

  const taluk =
  localStorage.getItem("taluk");

const mlaComplaints =
  complaints.filter(
    c => c.taluk === taluk
  );

const filteredComplaints =
  mlaComplaints.filter(
    c =>
      c.complaint_id
        ?.toLowerCase()
        .includes(
          searchId.toLowerCase()
        )
  );

  const total =
    filteredComplaints.length;

  const pending =
    filteredComplaints.filter(
      c=>c.status==="PENDING"
    ).length;

  const progress =
    filteredComplaints.filter(
      c=>c.status==="IN_PROGRESS"
    ).length;

  const resolved =
    filteredComplaints.filter(
      c=>c.status==="RESOLVED"
    ).length;

  const villages =
    [...new Set(
      filteredComplaints.map(
        c=>c.village
      )
    )].length;

  const accuracy =
    total
      ? ((resolved/total)*100).toFixed(1)
      : 0;

  const exportPDF = () => {

    const doc = new jsPDF();

    doc.setFontSize(20);

    doc.text(
      "SWACHH AI MLA REPORT",
      20,
      20
    );

    autoTable(doc,{

      startY:35,

      head:[[
        "ID",
        "Taluk",
        "Panchayat",
        "Village",
        "Status"
      ]],

      body:

      filteredComplaints.map(c=>[
        c.complaint_id,
        c.taluk,
        c.panchayat,
        c.village,
        c.status
      ])

    });

    doc.save("Kodagu_Report.pdf");

  };


  

  return (

  <div className="flex min-h-screen bg-gray-100">

    <Sidebar />

    <div className="flex-1 p-8 overflow-auto">

      <AdminHeader />

      <div className="flex justify-between items-center mb-6">

        <input
          type="text"
          placeholder="🔍 Search Complaint ID..."
          value={searchId}
          onChange={(e)=>setSearchId(e.target.value)}
          className="w-96 p-4 rounded-2xl border shadow"
        />

        <button
          onClick={exportPDF}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-xl"
        >
          Export Report
        </button>

      </div>

      <DashboardCards
        total={total}
        pending={pending}
        progress={progress}
        resolved={resolved}
        villages={villages}
        accuracy={accuracy}
      />

      <div className="grid grid-cols-3 gap-6 mb-8">

        <ProfileCard />

        <div className="col-span-2">

          <TalukChart
            complaints={filteredComplaints}
          />

        </div>

      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">

        <LiveMapCard
          complaints={filteredComplaints}
        />

        <ComplaintTable
          complaints={filteredComplaints}
        />

      </div>

    </div>

  </div>

);
}