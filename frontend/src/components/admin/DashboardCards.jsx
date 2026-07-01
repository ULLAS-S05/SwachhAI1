import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export default function DashboardCards({
  total = 0,
  pending = 0,
  progress = 0,
  resolved = 0,
  villages = 0,
  accuracy = 0
}) {

  const cards = [
    {
      title: "Total Complaints",
      value: total,
      icon: "📋",
      color: "from-blue-600 to-cyan-400"
    },
    {
      title: "Pending",
      value: pending,
      icon: "⏰",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "In Progress",
      value: progress,
      icon: "⚙️",
      color: "from-orange-500 to-yellow-400"
    },
    {
      title: "Resolved",
      value: resolved,
      icon: "✅",
      color: "from-green-500 to-emerald-400"
    },
    {
      title: "Resolution %",
      value: accuracy,
      suffix: "%",
      icon: "🎯",
      color: "from-purple-600 to-indigo-500"
    },
    {
      title: "Villages Covered",
      value: villages,
      icon: "🗺️",
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">

      {cards.map((card, index) => (

        <Tilt
          key={card.title}
          glareEnable={true}
          glareMaxOpacity={0.2}
          scale={1.05}
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 50
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: index * 0.1
            }}
            className={`bg-gradient-to-br ${card.color}
            rounded-3xl
            shadow-2xl
            text-white
            p-7
            min-h-[140px]`}
          >

            <div className="flex justify-between">

              <div>

                <p className="text-white/80">
                  {card.title}
                </p>

                <h2 className="text-5xl font-black mt-3">
                  {card.value}
                  {card.suffix || ""}
                </h2>

              </div>

              <div className="text-5xl">
                {card.icon}
              </div>

            </div>

          </motion.div>

        </Tilt>

      ))}

    </div>
  );
}