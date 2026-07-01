import {
  FaHome,
  FaMapMarkedAlt,
  FaClipboardList,
  FaRobot,
  FaChartBar,
  FaUser
} from "react-icons/fa";

export default function OfficerSidebar() {

  const scrollToSection = (id) => {

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

  };

  return (

    <div className="w-72 min-h-screen sticky top-0 bg-gradient-to-b from-slate-950 via-green-950 to-slate-900 text-white shadow-2xl flex flex-col">

      <div className="p-8 border-b border-white/10">

        <h1 className="text-4xl font-black tracking-wide">
          SWACHH AI
        </h1>

        <p className="text-green-300 mt-2">
          Government of Karnataka
        </p>

      </div>

      <div className="flex-1 p-5 space-y-3">

        <button
          onClick={() => scrollToSection("dashboard")}
          className="w-full bg-green-600 hover:bg-green-500 p-4 rounded-2xl text-left font-semibold transition-all"
        >
          <FaHome className="inline mr-3" />
          Dashboard
        </button>

        <button
          onClick={() => scrollToSection("map")}
          className="w-full p-4 rounded-2xl text-left hover:bg-white/10 transition-all"
        >
          <FaMapMarkedAlt className="inline mr-3" />
          Live Map
        </button>

        <button
          onClick={() => scrollToSection("complaints")}
          className="w-full p-4 rounded-2xl text-left hover:bg-white/10 transition-all"
        >
          <FaClipboardList className="inline mr-3" />
          Complaints
        </button>

        <button
          onClick={() => scrollToSection("ai")}
          className="w-full p-4 rounded-2xl text-left hover:bg-white/10 transition-all"
        >
          <FaRobot className="inline mr-3" />
          AI Insights
        </button>

        <button
          onClick={() => scrollToSection("reports")}
          className="w-full p-4 rounded-2xl text-left hover:bg-white/10 transition-all"
        >
          <FaChartBar className="inline mr-3" />
          Reports
        </button>

        <button
          onClick={() => scrollToSection("profile")}
          className="w-full p-4 rounded-2xl text-left hover:bg-white/10 transition-all"
        >
          <FaUser className="inline mr-3" />
          Profile
        </button>

      </div>

      <div className="p-5 border-t border-white/10">

        <div className="bg-white/5 rounded-2xl p-4 text-center">

          <div className="w-14 h-14 mx-auto rounded-full bg-green-600 flex items-center justify-center text-xl font-bold">
            {localStorage.getItem("name")?.charAt(0) || "O"}
          </div>

          <p className="mt-3 font-semibold">
            {localStorage.getItem("name") || "Officer"}
          </p>

          <p className="text-green-300 text-sm">
            Panchayat Officer
          </p>

        </div>

      </div>

    </div>

  );

}