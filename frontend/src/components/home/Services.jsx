import { motion } from "framer-motion";

const services = [
{
icon: "📝",
title: "Report Complaint",
desc: "Submit complaints with image upload, geolocation tracking and AI-powered analysis."
},
{
icon: "📍",
title: "Track Complaint",
desc: "Monitor complaint progress from registration to final resolution."
},
{
icon: "👮",
title: "Officer Portal",
desc: "Manage complaints, upload evidence and monitor field operations."
},
{
icon: "🏛️",
title: "MLA Dashboard",
desc: "District-wide analytics, performance insights and governance monitoring."
}
];

export default function Services() {

return (


<section className="relative py-28 bg-gradient-to-b from-green-50 via-white to-green-50 overflow-hidden">

  <div className="absolute top-10 left-10 w-72 h-72 bg-green-400/10 blur-[120px] rounded-full" />
  <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-400/10 blur-[140px] rounded-full" />

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >

      <h2 className="text-5xl md:text-6xl font-black text-green-700">
        Our Services
      </h2>

      <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
        Smart digital services for citizens, Panchayat officers,
        and district administrators powered by Artificial Intelligence.
      </p>

    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {services.map((service, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.15
          }}
          whileHover={{
            y: -12,
            scale: 1.03
          }}
          className="
            group
            bg-white/70
            backdrop-blur-xl
            border border-white/30
            rounded-3xl
            shadow-2xl
            p-8
            text-center
            transition-all
            duration-500
            hover:shadow-green-200
          "
        >

          <div
            className="
              w-24 h-24
              mx-auto
              rounded-full
              bg-gradient-to-r
              from-green-500
              to-emerald-600
              flex
              items-center
              justify-center
              text-5xl
              text-white
              shadow-xl
              group-hover:scale-110
              transition-all
              duration-500
            "
          >
            {service.icon}
          </div>

          <h3 className="mt-8 text-2xl font-black text-green-700">
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
