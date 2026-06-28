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

localStorage.removeItem("token");
localStorage.removeItem("role");
localStorage.removeItem("name");
localStorage.removeItem("phone");
localStorage.removeItem("email");
localStorage.removeItem("taluk");
localStorage.removeItem("panchayat");

navigate("/");

};

return (

<div className="w-72 min-h-screen flex flex-col bg-gradient-to-b from-green-900 via-green-800 to-green-700 text-white shadow-2xl">

  <div className="p-8 border-b border-green-600">

    <h1 className="text-3xl font-black">
      SWACHH AI
    </h1>

    <p className="text-green-200 mt-2">
      Government of Karnataka
    </p>
   <div className="mt-4 bg-green-950/40 rounded-2xl p-4 text-center">

  <img
    src="/developer.jpg"
    alt="Developer"
    className="w-20 h-20 rounded-full mx-auto border-2 border-green-400 object-cover"
  />

  <h3 className="font-bold mt-2">
    Ullas S
  </h3>

  <p className="text-xs text-green-200">
    Python Developer
  </p>

</div>

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

  <div className="mt-auto p-5">

    </div>

);
}
