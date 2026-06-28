import {
  FaHome,
  FaMapMarkedAlt,
  FaClipboardList,
  FaChartBar,
  FaUserShield,
  FaKey,
  FaSignOutAlt,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="w-72 min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-green-700 text-white shadow-2xl">

      <div className="p-8 border-b border-green-600">
        <h1 className="text-3xl font-black">
          SWACHH AI
        </h1>

        <p className="text-green-200 mt-2">
          Government of Karnataka
        </p>
      </div>

      <div className="mt-8 space-y-3 px-5">

        <button className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-green-600 transition">
          <FaHome />
          Dashboard
        </button>

        <button className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-green-600 transition">
          <FaMapMarkedAlt />
          Live Map
        </button>

        <button className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-green-600 transition">
          <FaClipboardList />
          Complaints
        </button>

        <button className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-green-600 transition">
          <FaChartBar />
          Analytics
        </button>

        <button className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-green-600 transition">
          <FaUserShield />
          Profile
        </button>

        <button className="w-full flex items-center gap-4 p-4 rounded-xl hover:bg-green-600 transition">
          <FaKey />
          Change Password
        </button>

      </div>

      <div className="absolute bottom-10 w-72 px-5">

        <button
          onClick={logout}
          className="w-full bg-red-500 hover:bg-red-600 p-4 rounded-xl font-bold flex justify-center items-center gap-3"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </div>
  );
}