import AIPanel from "../components/dashboard/AIPanel";
import { useEffect, useState } from "react";
import api from "../services/api";
import Confetti from "react-confetti";
import ReactCompareImage from "react-compare-image";
import ComplaintMap from "../components/ComplaintMap";
import Header from "../components/dashboard/Header";
import StatsCards from "../components/dashboard/StatsCards";

export default function Dashboard() {
  const [complaints, setComplaints] = useState([]);
  const [files, setFiles] = useState({});
  const [showConfetti, setShowConfetti] = useState(false);
  const [aiResults, setAiResults] = useState({});
  const panchayat = localStorage.getItem("panchayat");
  const loadComplaints = async () => {
    try {
      const res = await api.get("/complaints");

      const filtered = res.data.filter((c) => c.panchayat === panchayat);

      setComplaints(filtered);
    } catch (err) {
      console.log(err);
    }
  };

  const updateStatus = async (id, status) => {
    await api.put(`/complaints/${id}/status?status=${status}`);

    loadComplaints();
  };

  const uploadAfterImage = async (complaintId) => {
    const file = files[complaintId];

    if (!file) {
      alert("Select an image first");

      return;
    }

    const formData = new FormData();

    formData.append("file", file);

    const uploadRes = await api.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const aiRes = await api.put(
      `/complaints/${complaintId}/after-image?image_path=${uploadRes.data.path}`,
    );

    setAiResults((prev) => ({
      ...prev,
      [complaintId]: aiRes.data,
    }));

    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    loadComplaints();

    alert("Complaint Resolved");
  };

  useEffect(() => {
    loadComplaints();
  }, []);

  const totalCount = complaints.length;

  const pendingCount = complaints.filter((c) => c.status === "PENDING").length;

  const progressCount = complaints.filter(
    (c) => c.status === "IN_PROGRESS",
  ).length;

  const resolvedCount = complaints.filter(
    (c) => c.status === "RESOLVED",
  ).length;

  return (
    <>
      {showConfetti && <Confetti />}

      <div>
        <Header />

        <StatsCards
          total={totalCount}
          pending={pendingCount}
          progress={progressCount}
          resolved={resolvedCount}
        />

        <div
          className="
  bg-white
  rounded-3xl
  shadow-2xl
  p-6
  mb-8
  border
  border-green-100
  "
        >
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-3xl font-black text-green-700">
                🗺 Live Complaint Map
              </h2>

              <p className="text-gray-500 mt-1">
                Real-time complaint locations in your Panchayat
              </p>
            </div>

            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
              {complaints.length} Complaints
            </div>
          </div>

          <ComplaintMap complaints={complaints} />
</div>

<AIPanel complaints={complaints} />

<div className="mt-6">
          {complaints.map((c) => (
            
            <div
              key={c.complaint_id}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 p-6 mb-8"            >
              <h3 className="font-bold">{c.complaint_id}</h3>

              <p>{c.description}</p>
              <p>Village: {c.village}</p>

              <p>
                Status:
                <b> {c.status}</b>
              </p>

              {c.after_image && (
                <div className="mt-4">
                  <p className="font-bold mb-2">🎚️ Before / After Comparison</p>

                  <div className="w-full max-w-3xl mx-auto">
                    <ReactCompareImage
                      leftImage={`https://swachhai1-1.onrender.com/${c.before_image}`}
                      rightImage={`https://swachhai1-1.onrender.com/${c.after_image}`}
                    />
                  </div>
                </div>
              )}

              {aiResults[c.complaint_id] && (
                <div className="mt-2 p-2 bg-blue-100 rounded-lg">
                  <p>
                    🤖 AI Status:
                    <b> {aiResults[c.complaint_id].ai_status}</b>
                  </p>
                  <p>
                    AI Score:
                    <b> {aiResults[c.complaint_id].ai_score}%</b>
                  </p>
                </div>
              )}

              {c.status !== "RESOLVED" && (
                <>
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 mr-2 rounded"
                    onClick={() => updateStatus(c.complaint_id, "IN_PROGRESS")}
                  >
                    Start Work
                  </button>

                  <br />
                  <br />

                  <input
                    type="file"
                    onChange={(e) =>
                      setFiles({
                        ...files,
                        [c.complaint_id]: e.target.files[0],
                      })
                    }
                  />

                  <button
                    className="bg-green-600 text-white px-3 py-1 ml-2 rounded"
                    onClick={() => uploadAfterImage(c.complaint_id)}
                  >
                    Upload After Image
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
