export default function QuickStats({
  total,
  pending,
  progress,
  resolved
}) {

  const resolution =
    total > 0
      ? ((resolved / total) * 100).toFixed(1)
      : 0;

  return (

    <div className="bg-white rounded-3xl shadow-2xl p-8">

      <h2 className="text-3xl font-black mb-8">
        📊 Quick Stats
      </h2>

      <div className="space-y-5">

        <div>
          <p>Total Complaints</p>
          <div className="h-4 bg-blue-500 rounded-full mt-2"></div>
          <span>{total}</span>
        </div>

        <div>
          <p>Pending</p>
          <div className="h-4 bg-red-500 rounded-full mt-2"></div>
          <span>{pending}</span>
        </div>

        <div>
          <p>In Progress</p>
          <div className="h-4 bg-yellow-500 rounded-full mt-2"></div>
          <span>{progress}</span>
        </div>

        <div>
          <p>Resolved</p>
          <div className="h-4 bg-green-500 rounded-full mt-2"></div>
          <span>{resolved}</span>
        </div>

        <div className="mt-6 bg-green-50 rounded-2xl p-5">

          <h3 className="font-bold">
            Resolution Rate
          </h3>

          <p className="text-5xl font-black text-green-700 mt-3">
            {resolution}%
          </p>

        </div>

      </div>

    </div>

  );
}