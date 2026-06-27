import { motion } from "framer-motion";

const cards = [
  {
    title: "Total Complaints",
    value: "1,248",
    icon: "🗑️",
    color: "from-red-500 to-orange-500"
  },
  {
    title: "Resolved",
    value: "1,086",
    icon: "✅",
    color: "from-green-500 to-green-700"
  },
  {
    title: "Villages",
    value: "42",
    icon: "📍",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "AI Accuracy",
    value: "96%",
    icon: "🤖",
    color: "from-purple-500 to-pink-600"
  }
];

export default function HeroDashboard() {

  return (

    <motion.div

      initial={{opacity:0,y:60}}

      animate={{opacity:1,y:0}}

      transition={{delay:1.5}}

      className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"

    >

      {cards.map((card,index)=>(

        <motion.div

          key={index}

          animate={{
            y:[0,-10,0]
          }}

          transition={{
            repeat:Infinity,
            duration:3+index
          }}

          whileHover={{
            scale:1.08,
            y:-15
          }}

          className="
          backdrop-blur-2xl
          bg-white/10
          border
          border-white/20
          rounded-3xl
          p-6
          shadow-2xl
          "

        >

          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${card.color} flex items-center justify-center text-3xl shadow-lg`}>

            {card.icon}

          </div>

          <h3 className="text-4xl font-black text-white mt-6">

            {card.value}

          </h3>

          <p className="text-gray-200 mt-2">

            {card.title}

          </p>

        </motion.div>

      ))}

    </motion.div>

  );

}
