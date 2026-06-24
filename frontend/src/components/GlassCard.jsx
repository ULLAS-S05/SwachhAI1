import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

export default function GlassCard({
  title,
  value,
  color
}) {

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 20
      }}

      animate={{
        opacity: 1,
        y: 0
      }}

      whileHover={{
        scale: 1.08,
        rotateX: 8,
        rotateY: -8
      }}

      transition={{
        type: "spring",
        stiffness: 300
      }}

      style={{
        transformStyle:
          "preserve-3d"
      }}

      className="
      backdrop-blur-xl
      bg-white/30
      border border-white/20
      rounded-3xl
      shadow-2xl
      p-6
      cursor-pointer
      "

    >

      <h3
        className={`text-lg font-bold ${color}`}
      >
        {title}
      </h3>

      <div
        className="
        text-5xl
        font-extrabold
        mt-4
        text-gray-800
        "
      >
        <AnimatedCounter
          value={value}
        />
      </div>

    </motion.div>

  );

}
