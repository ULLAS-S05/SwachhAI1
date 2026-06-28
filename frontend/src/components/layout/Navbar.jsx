import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/swachhai-logo.png";

export default function Navbar() {

const navigate = useNavigate();

return (


<motion.nav
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.7 }}
  className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-2xl border-b border-white/20 shadow-xl"
>

  <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

    <Link to="/" className="flex items-center gap-4">

      <img
        src={logo}
        alt="SWACHH AI"
        className="w-14 h-14 rounded-xl"
      />

      <div>

        <h1 className="text-2xl font-black text-green-700">
          SWACHH AI
        </h1>

        <p className="text-xs tracking-widest text-gray-600">
          Government of Karnataka
        </p>

      </div>

    </Link>

    <div className="hidden lg:flex items-center gap-8 text-gray-700 font-semibold">

      <Link
        to="/"
        className="relative hover:text-green-700 transition-all duration-300"
      >
        Home
      </Link>

      <Link
        to="/report"
        className="relative hover:text-green-700 transition-all duration-300"
      >
        Report
      </Link>

      <Link
        to="/track"
        className="relative hover:text-green-700 transition-all duration-300"
      >
        Track
      </Link>

      <Link
        to="/"
        className="relative hover:text-green-700 transition-all duration-300"
      >
        About
      </Link>

      <button
        onClick={() => navigate("/login")}
        className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300"
      >
        Officer Portal
      </button>

      <button
        onClick={() => navigate("/mla")}
        className="bg-gradient-to-r from-yellow-500 to-orange-400 text-black px-6 py-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300"
      >
        🏛 MLA Portal
      </button>

    </div>

  </div>

</motion.nav>


);

}
