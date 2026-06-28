import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
FaCalendarAlt,
FaClock,
FaKey,
FaSignOutAlt
} from "react-icons/fa";

import ChangePasswordModal from "./ChangePasswordModal";

export default function AdminHeader() {

const navigate = useNavigate();

const [time, setTime] = useState(new Date());

const [openPassword, setOpenPassword] =
useState(false);

const name =
localStorage.getItem("name") || "MLA";

const taluk =
localStorage.getItem("taluk") || "";

useEffect(() => {


const timer = setInterval(() => {
  setTime(new Date());
}, 1000);

return () => clearInterval(timer);


}, []);

const logout = () => {


localStorage.clear();

navigate("/");


};

return (


<>
  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-800 via-green-700 to-emerald-700 shadow-2xl p-8 mb-8 text-white">

    <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

    <div className="relative flex flex-col lg:flex-row justify-between gap-8">

      <div>

        <p className="uppercase tracking-[0.3em] text-green-200">
          Government of Karnataka
        </p>

        <h1 className="text-5xl font-black mt-3">
          Welcome, {name}
        </h1>

        <p className="text-xl mt-4 text-green-100">
          Smart Governance Dashboard
        </p>

        <p className="text-green-200 mt-2">
          {taluk} Constituency • Kodagu District
        </p>

      </div>

      <div className="flex flex-col items-start lg:items-end">

        <div className="flex items-center gap-2">
          <FaCalendarAlt />
          {time.toLocaleDateString("en-IN")}
        </div>

        <div className="flex items-center gap-2 mt-2">
          <FaClock />
          {time.toLocaleTimeString("en-IN", {
            hour12: true
          })}
        </div>

        <div className="flex gap-3 mt-6">

          <button
            onClick={() => setOpenPassword(true)}
            className="bg-white text-green-700 px-5 py-3 rounded-2xl font-bold shadow-xl hover:scale-105 transition-all"
          >
            <FaKey className="inline mr-2" />
            Password
          </button>

          <button
            onClick={logout}
            className="bg-red-500 px-5 py-3 rounded-2xl font-bold shadow-xl hover:scale-105 transition-all"
          >
            <FaSignOutAlt className="inline mr-2" />
            Logout
          </button>

        </div>

      </div>

    </div>

  </div>

  <ChangePasswordModal
    open={openPassword}
    onClose={() => setOpenPassword(false)}
  />
</>


);
}
