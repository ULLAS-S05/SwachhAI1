import { useEffect, useState } from "react";
import api from "../services/api";

import Sidebar from "../components/admin/Sidebar";
import AdminHeader from "../components/admin/AdminHeader";
import DashboardCards from "../components/admin/DashboardCards";
import ProfileCard from "../components/admin/ProfileCard";
import LiveMapCard from "../components/admin/LiveMapCard";
import TalukChart from "../components/admin/TalukChart";
import ComplaintTable from "../components/admin/ComplaintTable";

export default function MLADashboard() {
  const [complaints, setComplaints] = useState([]);

  const taluk = localStorage.getItem("taluk");

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await api.get("/complaints");

        const filtered = res.data.filter(
          (c) => c.taluk === taluk
        );

        setComplaints(filtered);
      } catch (err) {
        console.log(err);
      }
    };

    loadData();
  }, [taluk]);

  const total = complaints.length;

  const pending = complaints.filter(
    (c) => c.status === "PENDING"
  ).length;

  const progress = complaints.filter(
    (c) => c.status === "IN_PROGRESS"
  ).length;

  const resolved = complaints.filter(
    (c) => c.status === "RESOLVED"
  ).length;

  const villages = [
    ...new Set(complaints.map((c) => c.village))
  ].length;

  const accuracy =
    total > 0
      ? ((resolved / total) * 100).toFixed(1)
      : 0;

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <AdminHeader />

        <DashboardCards
          total={total}
          pending={pending}
          progress={progress}
          resolved={resolved}
          villages={villages}
          accuracy={accuracy}
        />

        <div className="grid lg:grid-cols-3 gap-6 mb-8">

          <ProfileCard />

          <div className="lg:col-span-2">
            <TalukChart complaints={complaints} />
          </div>

        </div>

        <div className="grid xl:grid-cols-2 gap-6">

          <LiveMapCard complaints={complaints} />

          <ComplaintTable complaints={complaints} />

        </div>

      </div>

    </div>
  );
}