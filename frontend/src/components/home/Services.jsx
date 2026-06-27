import { motion } from "framer-motion";

const services = [
  {
    icon: "📝",
    title: "Report Complaint",
    desc: "Report garbage with image upload, GPS location and AI analysis."
  },
  {
    icon: "📍",
    title: "Track Complaint",
    desc: "Monitor complaint status from submission to final resolution."
  },
  {
    icon: "👮",
    title: "Officer Portal",
    desc: "Secure portal for Panchayat officers to manage assigned complaints."
  },
  {
    icon: "🏛️",
    title: "MLA Dashboard",
    desc: "District-wide analytics, performance insights and monitoring."
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-green-700">
            Our Services
          </h2>

          <p className="mt-5 text-gray-600 text-lg">
            Smart digital services for citizens, officers and administrators.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service,index)=>(

            <motion.div

              key={index}

              initial={{opacity:0,y:50}}

              whileInView={{opacity:1,y:0}}

              viewport={{once:true}}

              transition={{delay:index*0.15}}

              whileHover={{
                y:-12,
                scale:1.04
              }}

              className="
              rounded-3xl
              bg-white
              shadow-xl
              border
              border-green-100
              p-8
              text-center
              cursor-pointer
              transition-all
              duration-500
              hover:shadow-2xl
              "

            >

              <div className="text-6xl mb-6">

                {service.icon}

              </div>

              <h3 className="text-2xl font-bold text-green-700">

                {service.title}

              </h3>

              <p className="mt-4 text-gray-600 leading-7">

                {service.desc}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
