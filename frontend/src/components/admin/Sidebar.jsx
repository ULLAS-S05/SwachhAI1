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

const menuItems = [
{ icon: <FaHome />, label: "Dashboard" },
{ icon: <FaMapMarkedAlt />, label: "Live Map" },
{ icon: <FaClipboardList />, label: "Complaints" },
{ icon: <FaChartBar />, label: "Analytics" },
{ icon: <FaUserShield />, label: "Profile" },
{ icon: <FaKey />, label: "Change Password" },
];

return (


<div className="w-72 min-h-screen bg-white border-r border-gray-200 shadow-xl flex flex-col">

  <div className="p-8 border-b border-gray-200">

    <h1 className="text-3xl font-black text-green-700">
      SWACHH AI
    </h1>

    <p className="text-gray-500 mt-2">
      Government of Karnataka
    </p>

  </div>

  <div className="flex-1 mt-6 px-4 space-y-2">

    {menuItems.map((item) => (

      <button
        key={item.label}
        className="
          w-full
          flex
          items-center
          gap-4
          p-4
          rounded-2xl
          text-gray-700
          font-medium
          hover:bg-green-50
          hover:text-green-700
          transition-all
          duration-300
        "
      >

        <span className="text-xl">
          {item.icon}
        </span>

        {item.label}

      </button>

    ))}

  </div>

  <div className="p-5 border-t border-gray-200">

    <button
      onClick={logout}
      className="
        w-full
        bg-gradient-to-r
        from-red-500
        to-pink-500
        text-white
        p-4
        rounded-2xl
        font-bold
        flex
        justify-center
        items-center
        gap-3
        shadow-xl
        hover:scale-105
        transition-all
        duration-300
      "
    >

      <FaSignOutAlt />

      Logout

    </button>

  </div>

</div>

);

}
