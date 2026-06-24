import { motion } from "framer-motion";

export default function SwachhAILogo() {

  return (

    <div className="flex items-center gap-3">

      <motion.div
        animate={{
          rotate: 360
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear"
        }}
        className="text-4xl"
      >
        ♻️
      </motion.div>

      <motion.h1
        animate={{
          y: [0, -3, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 2
        }}
        className="text-3xl font-extrabold"
      >
        SwachhAI
      </motion.h1>

    </div>

  );

}
