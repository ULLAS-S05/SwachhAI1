import { motion } from "framer-motion";

export default function HeroSection() {

  return (

    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/kodagu.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <motion.p
          initial={{ opacity:0,y:-20 }}
          animate={{ opacity:1,y:0 }}
          transition={{ duration:0.8 }}
          className="uppercase tracking-[0.35em] text-green-300 text-sm"
        >
          Government of Karnataka
        </motion.p>

        <motion.h2
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:0.3 }}
          className="text-white text-xl mt-4"
        >
          Rural Development & Panchayat Raj Department
        </motion.h2>

        <motion.h1
          initial={{ opacity:0, scale:.8 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ delay:0.6 }}
          className="text-7xl md:text-8xl font-black mt-10 bg-gradient-to-r from-green-300 via-white to-green-300 bg-clip-text text-transparent"
        >
          SWACHH AI
        </motion.h1>

        <motion.h3
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:0.9 }}
          className="text-3xl text-white mt-6"
        >
          Clean Kodagu • Smart Kodagu
        </motion.h3>

        <motion.p
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:1.2 }}
          className="max-w-3xl mx-auto mt-8 text-gray-200 text-lg leading-8"
        >
          An AI-powered waste management platform that empowers citizens,
          Panchayat officers, and district authorities to report, monitor,
          verify, and resolve waste-related issues across Kodagu.
        </motion.p>

        <motion.div
          initial={{ opacity:0,y:40 }}
          animate={{ opacity:1,y:0 }}
          transition={{ delay:1.5 }}
          className="flex flex-wrap justify-center gap-5 mt-12"
        >

          <a
            href="#report"
            className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-full text-white font-bold transition duration-300 hover:scale-105 shadow-xl"
          >
            📝 Report Complaint
          </a>

          <a
            href="#track"
            className="px-8 py-4 bg-white text-gray-800 rounded-full font-bold transition duration-300 hover:scale-105 shadow-xl"
          >
            🔍 Track Complaint
          </a>

          <a
            href="#mla"
            className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 rounded-full font-bold transition duration-300 hover:scale-105 shadow-xl"
          >
            🏛 MLA Portal
          </a>

        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y:[0,15,0] }}
        transition={{ repeat:Infinity, duration:1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-5xl"
      >
        ↓
      </motion.div>

    </section>

  );

}
