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
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-green-100 shadow-lg"
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

          <Link to="/" className="hover:text-green-700">
            Home
          </Link>

          <Link to="/report" className="hover:text-green-700">
            Report
          </Link>

          <Link to="/track" className="hover:text-green-700">
            Track
          </Link>

          <Link to="/" className="hover:text-green-700">
            About
          </Link>

          <button
            onClick={() => navigate("/login")}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full transition"
          >
            Officer Portal
          </button>

          <button
            onClick={() => navigate("/mla")}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2 rounded-full transition"
          >
            🏛 MLA Portal
          </button>

        </div>

      </div>

    </motion.nav>

  );

}
