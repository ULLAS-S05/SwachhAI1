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

    <>

      <div className="bg-gradient-to-r from-green-800 via-green-700 to-green-900 rounded-3xl shadow-2xl text-white p-8 mb-8">

        <div className="flex justify-between items-start">

          <div>

            <p className="text-green-200 uppercase tracking-widest">
              Government of Karnataka
            </p>

            <h1 className="text-5xl font-black mt-3">
              Welcome, {name}
            </h1>

            <p className="text-xl mt-3 text-green-100">
              Member of Legislative Assembly
            </p>

            <p className="text-lg text-green-200">
              {taluk} Constituency • Kodagu • Karnataka
            </p>

          </div>

          <div className="text-right">

            <div className="flex items-center justify-end gap-2">

              <FaCalendarAlt />

              {time.toLocaleDateString("en-IN")}

            </div>

            <div className="flex items-center justify-end gap-2 mt-2">

              <FaClock />

              {time.toLocaleTimeString("en-IN", {
                hour12: true
              })}

            </div>

            <div className="flex gap-3 mt-6">

              <button
                onClick={() => setOpenPassword(true)}
                className="bg-white text-green-700 px-5 py-3 rounded-xl font-bold"
              >
                <FaKey className="inline mr-2" />
                Change Password
              </button>

              <button
                onClick={logout}
                className="bg-red-600 px-5 py-3 rounded-xl font-bold"
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