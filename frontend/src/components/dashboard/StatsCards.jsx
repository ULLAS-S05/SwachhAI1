export default function StatsCards({
  total = 0,
  pending = 0,
  progress = 0,
  resolved = 0,
}) {
  const resolution =
    total > 0 ? ((resolved / total) * 100).toFixed(1) : 0;

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">

      <div className="bg-blue-500 text-white p-6 rounded-2xl shadow-lg text-center">
        <h3 className="font-bold">Total</h3>
        <p className="text-3xl font-bold">{total}</p>
      </div>

      <div className="bg-red-500 text-white p-6 rounded-2xl shadow-lg text-center">
        <h3 className="font-bold">Pending</h3>
        <p className="text-3xl font-bold">{pending}</p>
      </div>

      <div className="bg-yellow-500 text-white p-6 rounded-2xl shadow-lg text-center">
        <h3 className="font-bold">In Progress</h3>
        <p className="text-3xl font-bold">{progress}</p>
      </div>

      <div className="bg-green-500 text-white p-6 rounded-2xl shadow-lg text-center">
        <h3 className="font-bold">Resolved</h3>
        <p className="text-3xl font-bold">{resolved}</p>
      </div>

      <div className="bg-purple-500 text-white p-6 rounded-2xl shadow-lg text-center">
        <h3 className="font-bold">Resolution</h3>
        <p className="text-3xl font-bold">{resolution}%</p>
      </div>

    </div>
  );
}