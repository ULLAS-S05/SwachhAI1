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
color: "from-blue-600 to-cyan-500"
},
{
title: "Pending",
value: pending,
icon: "⏰",
color: "from-red-600 to-pink-500"
},
{
title: "In Progress",
value: progress,
icon: "🔄",
color: "from-yellow-500 to-orange-500"
},
{
title: "Resolved",
value: resolved,
icon: "✅",
color: "from-green-600 to-emerald-500"
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
color: "from-teal-600 to-green-500"
}
];

return ( <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">

  {cards.map((card) => (

    <div
      key={card.title}
      className={`bg-gradient-to-r ${card.color} rounded-3xl shadow-2xl text-white p-6`}
    >

      <div className="flex justify-between items-center">

        <div>

          <p className="text-white/80">
            {card.title}
          </p>

          <h2 className="text-5xl font-black mt-2">
            {card.value}
            {card.suffix || ""}
          </h2>

        </div>

        <div className="text-4xl">
          {card.icon}
        </div>

      </div>

    </div>

  ))}

</div>

);

}
