import logo from "../assets/swachhai-logo.png";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-green-100 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        <div className="flex items-center gap-4">

          <img
            src={logo}
            alt="SWACHH AI"
            className="w-14 h-14 rounded-xl"
          />

          <div>

            <h1 className="font-black text-2xl text-green-700">
              SWACHH AI
            </h1>

            <p className="text-xs tracking-widest text-gray-600">
              Government of Karnataka
            </p>

          </div>

        </div>

        <div className="hidden md:flex items-center gap-8 font-semibold">

          <a href="#home" className="hover:text-green-700 transition">
            Home
          </a>

          <a href="#report" className="hover:text-green-700 transition">
            Report
          </a>

          <a href="#track" className="hover:text-green-700 transition">
            Track
          </a>

          <a href="#about" className="hover:text-green-700 transition">
            About
          </a>

          <button
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full transition"
          >
            🏛 MLA Portal
          </button>

        </div>

      </div>
    </motion.nav>
  );
}
