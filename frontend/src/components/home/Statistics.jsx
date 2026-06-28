import { useEffect, useState } from "react";
import api from "../../services/api";

export default function Statistics() {

  const [stats, setStats] = useState({
    total: 0,
    resolved: 0,
    villages: 0,
    accuracy: 0
  });

  useEffect(() => {

    api.get("/homepage/stats")
      .then((res) => setStats(res.data))
      .catch(console.error);

  }, []);

  const cards = [
    {
      title: "Total Complaints",
      value: stats.total,
      icon: "🗑️"
    },
    {
      title: "Resolved",
      value: stats.resolved,
      icon: "✅"
    },
    {
      title: "Villages Covered",
      value: stats.villages,
      icon: "📍"
    },
    {
      title: "Resolution %",
      value: `${stats.accuracy}%`,
      icon: "🤖"
    }
  ];

  return (

    <section className="py-20 bg-green-50">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-green-700 mb-12">
          Live Statistics
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {cards.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl p-8 text-center"
            >

              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold mt-4">
                {item.value}
              </h3>

              <p className="text-gray-600 mt-2">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}