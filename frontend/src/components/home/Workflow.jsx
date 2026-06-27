import { motion } from "framer-motion";

const steps = [
  {
    icon: "📱",
    title: "1. Report Complaint",
    desc: "Citizens capture a photo of the garbage, provide details, and submit the complaint with GPS location."
  },
  {
    icon: "📍",
    title: "2. Location Identified",
    desc: "The complaint is automatically linked to the correct Taluk, Panchayat, and Village."
  },
  {
    icon: "🤖",
    title: "3. AI Analysis",
    desc: "SWACHH AI analyzes the uploaded image and classifies the waste for better prioritization."
  },
  {
    icon: "👮",
    title: "4. Officer Assignment",
    desc: "The responsible Panchayat Officer receives the complaint and begins the cleaning process."
  },
  {
    icon: "🧹",
    title: "5. Cleaning Completed",
    desc: "After the garbage is cleared, the officer uploads an 'After' image as proof of completion."
  },
  {
    icon: "✅",
    title: "6. AI Verification",
    desc: "SWACHH AI compares the Before and After images to verify the cleanliness before marking the complaint as resolved."
  }
];

export default function Workflow() {

  return (

    <section className="py-24 bg-gradient-to-b from-green-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-center mb-20"
        >

          <h2 className="text-5xl font-black text-green-700">
            How SWACHH AI Works
          </h2>

          <p className="mt-5 text-gray-600 text-lg max-w-3xl mx-auto">
            A simple and transparent workflow connecting citizens,
            Panchayat officers, Artificial Intelligence, and district
            authorities to ensure efficient waste management.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {steps.map((step, index) => (

            <motion.div
              key={index}
              initial={{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{delay:index*0.1}}
              whileHover={{
                y:-10,
                scale:1.03
              }}
              className="bg-white rounded-3xl shadow-xl p-8 border border-green-100"
            >

              <div className="text-6xl mb-6">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-green-700">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {step.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}
