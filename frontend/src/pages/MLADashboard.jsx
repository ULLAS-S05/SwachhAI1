import AdminHeader from "../components/admin/AdminHeader";
import DashboardCards from "../components/admin/DashboardCards";
import Sidebar from "../components/admin/Sidebar";

export default function MLADashboard() {
  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <AdminHeader />

        <DashboardCards
          total={1}
          pending={0}
          progress={0}
          resolved={1}
          villages={1}
          accuracy={100}
        />

        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl font-black text-green-700">
            MLA Executive Dashboard
          </h2>

          <p className="mt-4 text-gray-600">
            Constituency analytics, panchayat rankings,
            complaint monitoring and AI insights.
          </p>
        </div>

      </div>

    </div>
  );
}