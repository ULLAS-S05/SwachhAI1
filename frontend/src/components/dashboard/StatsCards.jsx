import {
  FaClipboardList,
  FaClock,
  FaSpinner,
  FaCheckCircle
} from "react-icons/fa";

export default function StatsCards({
  total = 0,
  pending = 0,
  progress = 0,
  resolved = 0,
}) {

  const cards = [
    {
      title: "Total Complaints",
      value: total,
      icon: <FaClipboardList />,
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "Pending",
      value: pending,
      icon: <FaClock />,
      color: "from-red-600 to-pink-500"
    },
    {
      title: "In Progress",
      value: progress,
      icon: <FaSpinner />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Resolved",
      value: resolved,
      icon: <FaCheckCircle />,
      color: "from-green-600 to-emerald-500"
    }
  ];

  return (

    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

      {cards.map((card) => (

        <div
          key={card.title}
          className={`bg-gradient-to-r ${card.color}
          text-white rounded-3xl p-6 shadow-2xl`}
        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-white/80">
                {card.title}
              </p>

              <h2 className="text-5xl font-black mt-3">
                {card.value}
              </h2>

            </div>

            <div className="text-5xl">
              {card.icon}
            </div>

          </div>

        </div>

      ))}

    </div>

  );

}