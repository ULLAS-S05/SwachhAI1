import { motion } from "framer-motion";

const stats = [
  {
    title: "Total Complaints",
    value: "1,248",
    icon: "🗑️",
    color: "from-green-500 to-green-700"
  },
  {
    title: "Resolved",
    value: "1,086",
    icon: "✅",
    color: "from-blue-500 to-blue-700"
  },
  {
    title: "Villages Covered",
    value: "42",
    icon: "📍",
    color: "from-purple-500 to-purple-700"
  },
  {
    title: "AI Accuracy",
    value: "96%",
    icon: "🤖",
    color: "from-yellow-500 to-orange-500"
  }
];

export default function Statistics() {

  return (

    <section
      id="statistics"
      className="py-24 bg-gradient-to-b from-white to-green-50"
    >

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:.7}}
          className="text-center mb-16"
        >

          <h2 className="text-5xl font-black text-green-700">

            Live Statistics

          </h2>

          <p className="mt-4 text-gray-600 text-lg">

            Real-time monitoring of cleanliness across Kodagu District

          </p>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item,index)=>(

            <motion.div

              key={index}

              initial={{opacity:0,y:60}}

              whileInView={{opacity:1,y:0}}

              viewport={{once:true}}

              transition={{delay:index*0.15}}

              whileHover={{
                y:-12,
                scale:1.04
              }}

              className="rounded-3xl bg-white shadow-xl p-8 text-center"

            >

              <div
                className={`mx-auto w-20 h-20 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-4xl text-white shadow-lg`}
              >

                {item.icon}

              </div>

              <h3 className="mt-6 text-4xl font-black text-gray-800">

                {item.value}

              </h3>

              <p className="mt-2 text-gray-600 font-medium">

                {item.title}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}
