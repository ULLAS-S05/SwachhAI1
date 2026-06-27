import { motion } from "framer-motion";

const cards = [
  {
    icon: "🌳",
    title: "Protect Nature",
    desc: "Kodagu is known for its forests, rivers, coffee plantations, and biodiversity. Clean surroundings help preserve its natural beauty."
  },
  {
    icon: "🏞️",
    title: "Support Tourism",
    desc: "A cleaner Kodagu creates a better experience for tourists and strengthens the local economy."
  },
  {
    icon: "❤️",
    title: "Healthy Communities",
    desc: "Proper waste management reduces pollution, prevents disease, and improves public health."
  },
  {
    icon: "🤖",
    title: "AI-Powered Governance",
    desc: "SWACHH AI enables citizens and authorities to work together using Artificial Intelligence for faster complaint resolution."
  }
];

export default function WhyCleanKodagu() {

  return (

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-center mb-16"
        >

          <h2 className="text-5xl font-black text-green-700">
            Why Clean Kodagu?
          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg">
            SWACHH AI empowers citizens, Panchayat officers, and district
            authorities to collaborate for a cleaner, healthier, and more
            sustainable Kodagu.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {cards.map((card, index) => (

            <motion.div
              key={index}
              initial={{opacity:0,y:40}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay:index*0.15}}
              whileHover={{y:-10}}
              className="rounded-3xl bg-gradient-to-br from-white to-green-50 shadow-xl p-8"
            >

              <div className="text-5xl mb-5">
                {card.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {card.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {card.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}
