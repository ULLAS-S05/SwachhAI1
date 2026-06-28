import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {

  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 md:pt-32 pt-36 md:pt-40 flex items-center justify-center overflow-hidden"
    >

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/kodagu.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-green-900/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        <motion.p
          initial={{opacity:0,y:-30}}
          animate={{opacity:1,y:0}}
          transition={{duration:.8}}
          className="uppercase tracking-[0.35em] text-green-300"
        >
          Government of Karnataka
        </motion.p>

        <motion.h2
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:.3}}
          className="text-white text-xl mt-5"
        >
          Rural Development & Panchayat Raj Department
        </motion.h2>

        <motion.h1
          initial={{opacity:0,scale:.8}}
          animate={{opacity:1,scale:1}}
          transition={{delay:.5}}
          className="text-7xl md:text-8xl mt-10 tracking-[0.15em] bg-gradient-to-r from-green-300 via-white to-green-300 bg-clip-text text-transparent drop-shadow-2xl"
          style={{fontFamily:"Cinzel"}}
        >
          SWACHH AI
        </motion.h1>

        <motion.h3
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:.8}}
          className="text-3xl text-white mt-6"
        >
          Clean Kodagu • Smart Kodagu
        </motion.h3>

        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1}}
          className="max-w-4xl mx-auto mt-6 text-lg text-gray-200 leading-9"
        >
          An AI-powered smart waste management platform that enables
          citizens to report waste, empowers Panchayat officers to
          resolve complaints efficiently, and provides district
          authorities with real-time monitoring and analytics.
        </motion.p>

        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{delay:1.2}}
          className="flex flex-wrap justify-center gap-5 mt-10"
        >

          

        </motion.div>

        <motion.div
          animate={{y:[0,15,0]}}
          transition={{repeat:Infinity,duration:2}}
          className="text-white text-5xl mt-10"
        >
          ↓
        </motion.div>

        <div className="-mt-16">
</div>

      </div>

    </section>
  );
}
