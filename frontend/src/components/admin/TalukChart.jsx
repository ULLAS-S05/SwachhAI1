import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

export default function TalukChart({ complaints = [] }) {

  const taluks = {};

  complaints.forEach((c) => {
    taluks[c.taluk] = (taluks[c.taluk] || 0) + 1;
  });

  const data = Object.keys(taluks).map((taluk) => ({
    taluk,
    complaints: taluks[taluk]
  }));

  return (

    <div className="bg-white rounded-3xl shadow-2xl p-6 h-[420px]">

      <h2 className="text-2xl font-bold mb-6 text-green-800">
        📊 Taluk-wise Complaint Analytics
      </h2>

      <ResponsiveContainer width="100%" height="90%">

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="taluk" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="complaints"
            radius={[10,10,0,0]}
            fill="#16a34a"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );

}