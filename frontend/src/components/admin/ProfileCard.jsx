import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export default function ProfileCard() {

  const name =
    localStorage.getItem("name") || "MLA";

  const taluk =
    localStorage.getItem("taluk") || "Kodagu";

  return (

    <Tilt scale={1.05}>

      <motion.div
        initial={{
          opacity: 0,
          x: -50
        }}
        animate={{
          opacity: 1,
          x: 0
        }}
        className="
        bg-white
        rounded-3xl
        shadow-2xl
        p-8
        text-center
        relative
        overflow-hidden
      "
      >

        <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-100 rounded-full blur-3xl" />

        <img
          src="/mla.png"
          alt="MLA"
          className="
          w-36 h-36
          mx-auto
          rounded-full
          border-4 border-green-600
          shadow-2xl
        "
        />

        <h2 className="text-4xl font-black mt-5">
          {name}
        </h2>

        <p className="text-green-700 font-bold mt-2">
          Member of Legislative Assembly
        </p>

        <div className="mt-6 bg-green-50 p-4 rounded-2xl">

          <p className="text-gray-500">
            Constituency
          </p>

          <h3 className="text-2xl font-bold text-green-700">
            {taluk}
          </h3>

        </div>

      </motion.div>

    </Tilt>
  );
}