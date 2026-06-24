import { motion } from "framer-motion";

export default function PremiumButton({
  children,
  onClick,
  color = "green"
}) {

  const colors = {
    green:
      "from-green-500 to-emerald-600",
    blue:
      "from-blue-500 to-cyan-600",
    red:
      "from-red-500 to-pink-600"
  };

  return (

    <motion.button

      whileHover={{
        scale: 1.08
      }}

      whileTap={{
        scale: 0.95
      }}

      onClick={onClick}

      className={`
        bg-gradient-to-r
        ${colors[color]}
        text-white
        px-5
        py-3
        rounded-2xl
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-300
        font-semibold
      `}
    >

      {children}

    </motion.button>

  );

}
