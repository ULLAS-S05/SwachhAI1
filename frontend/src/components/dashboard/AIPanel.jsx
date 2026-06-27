import { FaRobot, FaExclamationTriangle } from "react-icons/fa";

export default function AIPanel({ complaints = [] }) {

  const pending = complaints.filter(
    c => c.status === "PENDING"
  );

  return (

    <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl shadow-2xl text-white p-6 mb-8">

      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-3xl font-black flex items-center gap-3">
            <FaRobot />
            AI Recommendation
          </h2>

          <p className="mt-2 text-indigo-100">
            Prioritize pending complaints for faster cleaning.
          </p>

        </div>

        <div className="text-center">

          <FaExclamationTriangle className="text-5xl mx-auto text-yellow-300" />

          <p className="mt-2 text-lg font-bold">
            {pending.length} Pending
          </p>

        </div>

      </div>

    </div>

  );

}
