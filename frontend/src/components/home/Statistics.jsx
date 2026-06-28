import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Statistics() {

const [stats, setStats] = useState({
total: 0,
resolved: 0,
pending: 0,
in_progress: 0,
villages: 0,
accuracy: 0
});

const [loading, setLoading] = useState(true);

useEffect(() => {


api.get("/homepage/stats")
  .then((res) => {
    setStats(res.data);
    setLoading(false);
  })
  .catch((err) => {
    console.error(err);
    setLoading(false);
  });


}, []);

const cards = [
{
title: "Total Complaints",
value: stats.total,
icon: "🗑️",
color: "from-red-500 to-pink-500"
},
{
title: "Resolved",
value: stats.resolved,
icon: "✅",
color: "from-green-500 to-green-700"
},
{
title: "Pending",
value: stats.pending,
icon: "⏳",
color: "from-yellow-500 to-orange-500"
},
{
title: "In Progress",
value: stats.in_progress,
icon: "🔄",
color: "from-blue-500 to-cyan-500"
},
{
title: "Villages Covered",
value: stats.villages,
icon: "📍",
color: "from-purple-500 to-indigo-500"
},
{
title: "Resolution %",
value: `${stats.accuracy}%`,
icon: "📊",
color: "from-emerald-500 to-teal-600"
}
];

return ( <section className="py-20 bg-green-50">


  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-5xl font-bold text-center text-green-700 mb-4">
      Live Statistics
    </h2>

    <p className="text-center text-gray-600 mb-12">
      Real-time complaint monitoring across Kodagu District
    </p>

    {loading ? (

      <div className="text-center text-xl font-semibold text-green-700">
        Loading statistics...
      </div>

    ) : (

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {cards.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl p-8 text-center hover:scale-105 transition duration-300"
          >

            <div
              className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-4xl text-white shadow-lg`}
            >
              {item.icon}
            </div>

            <h3 className="text-5xl font-black mt-5 text-gray-800">
              {item.value}
            </h3>

            <p className="mt-3 text-gray-600 font-semibold">
              {item.title}
            </p>

          </div>

        ))}

      </div>

    )}

  </div>

</section>


);

}
