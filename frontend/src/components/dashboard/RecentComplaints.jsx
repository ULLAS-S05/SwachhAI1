export default function RecentComplaints({
  complaints = []
}) {

  return (

    <div className="bg-white rounded-3xl shadow-2xl p-8">

      <h2 className="text-3xl font-black mb-6">
        🗂 Recent Complaints
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left p-4">
                ID
              </th>

              <th className="text-left p-4">
                Village
              </th>

              <th className="text-left p-4">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {complaints.map((c) => (

              <tr
                key={c.complaint_id}
                className="border-b hover:bg-slate-50"
              >

                <td className="p-4">
                  {c.complaint_id}
                </td>

                <td className="p-4">
                  {c.village}
                </td>

                <td className="p-4">

                  <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full">

                    {c.status}

                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}