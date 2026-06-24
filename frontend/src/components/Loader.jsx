import { motion } from "framer-motion";

export default function Loader() {

  return (

    <div className="fixed inset-0 bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 flex flex-col items-center justify-center z-50">

      <motion.div

        animate={{
          y: [0, -15, 0]
        }}

        transition={{
          repeat: Infinity,
          duration: 2
        }}

        className="text-8xl"

      >
        🗑️
      </motion.div>

      <motion.h1

        initial={{
          opacity: 0
        }}

        animate={{
          opacity: 1
        }}

        transition={{
          duration: 1
        }}

        className="text-5xl font-extrabold mt-6"

      >
        SwachhAI
      </motion.h1>

      <motion.p

        animate={{
          opacity: [0.3, 1, 0.3]
        }}

        transition={{
          repeat: Infinity,
          duration: 1.5
        }}

        className="mt-4 text-xl text-gray-700"

      >
        Analyzing Cleanliness...
      </motion.p>

      <motion.div

        animate={{
          rotate: 360
        }}

        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear"
        }}

        className="text-4xl mt-6"

      >
        ♻️
      </motion.div>

    </div>

  );

}
