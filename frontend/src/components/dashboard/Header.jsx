import { useState } from "react";
import ChangePasswordModal from "./ChangePasswordModal";

import {
  FaUserShield,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaSignOutAlt,
  FaKey
} from "react-icons/fa";

export default function Header() {

  const [openPassword, setOpenPassword] = useState(false);

  const officer =
    localStorage.getItem("name") || "Officer";

  const taluk =
    localStorage.getItem("taluk") || "Kodagu";

  const panchayat =
    localStorage.getItem("panchayat") || "";

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    localStorage.removeItem("phone");
    localStorage.removeItem("email");
    localStorage.removeItem("taluk");
    localStorage.removeItem("panchayat");

    window.location.href = "/login";

  };

  return (

    <>

      <div className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 rounded-3xl shadow-2xl p-8 text-white mb-8">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

          <div>

            <h1 className="text-4xl font-black mb-3">
              Welcome, {officer}
            </h1>

            <div className="flex flex-wrap gap-6 mt-4">

              <div className="flex items-center gap-2">

                <FaMapMarkerAlt />

                <span>
                  {taluk}
                  {panchayat && ` • ${panchayat}`}
                </span>

              </div>

              <div className="flex items-center gap-2">

                <FaCalendarAlt />

                <span>
                  {new Date().toLocaleString()}
                </span>

              </div>

            </div>

          </div>

          <div className="flex gap-4">

            <button className="bg-white/20 px-5 py-3 rounded-xl backdrop-blur-lg flex items-center gap-2">

              <FaUserShield />
              Officer

            </button>

            <button
              onClick={() => setOpenPassword(true)}
              className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-xl flex items-center gap-2 transition"
            >

              <FaKey />
              Change Password

            </button>

            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl flex items-center gap-2 transition"
            >

              <FaSignOutAlt />
              Logout

            </button>

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