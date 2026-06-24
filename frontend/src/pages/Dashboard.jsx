import { useEffect, useState } from "react";
import api from "../services/api";
import Confetti from "react-confetti";
import ReactCompareImage from "react-compare-image";
import ComplaintMap from "../components/ComplaintMap";

export default function Dashboard() {

  const [complaints, setComplaints] = useState([]);
  const [files, setFiles] = useState({});
  const [showConfetti, setShowConfetti] = useState(false);
  const [aiResults, setAiResults] = useState({});

  const officerName =
    localStorage.getItem("officerName");

  const taluk =
    localStorage.getItem("taluk");

  const panchayat =
    localStorage.getItem("panchayat");

  const currentDateTime =
    new Date().toLocaleString();

  const loadComplaints = async () => {

    try {

      const res = await api.get(
        "/complaints"
      );

      const filtered =
        res.data.filter(
          (c) =>
            c.panchayat === panchayat
        );

      setComplaints(filtered);

    } catch (err) {

      console.log(err);

    }

  };

  const updateStatus = async (
    id,
    status
  ) => {

    await api.put(
      `/complaints/${id}/status?status=${status}`
    );

    loadComplaints();

  };

  const uploadAfterImage = async (
    complaintId
  ) => {

    const file =
      files[complaintId];

    if (!file) {

      alert(
        "Select an image first"
      );

      return;
    }

    const formData =
      new FormData();

    formData.append(
      "file",
      file
    );

    const uploadRes =
      await api.post(
        "/upload",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data"
          }
        }
      );

    const aiRes =
      await api.put(
        `/complaints/${complaintId}/after-image?image_path=${uploadRes.data.path}`
      );

    setAiResults((prev) => ({
      ...prev,
      [complaintId]: aiRes.data
    }));

    setShowConfetti(true);

    setTimeout(() => {

      setShowConfetti(false);

    }, 5000);

    loadComplaints();

    alert(
      "Complaint Resolved"
    );

  };

  useEffect(() => {

    loadComplaints();

  }, []);

  const totalCount =
    complaints.length;

  const pendingCount =
    complaints.filter(
      (c) =>
        c.status === "PENDING"
    ).length;

  const progressCount =
    complaints.filter(
      (c) =>
        c.status === "IN_PROGRESS"
    ).length;

  const resolvedCount =
    complaints.filter(
      (c) =>
        c.status === "RESOLVED"
    ).length;

  const resolutionRate =
    totalCount > 0
      ? (
          (resolvedCount /
            totalCount) *
          100
        ).toFixed(1)
      : 0;

  return (

    <>

      {showConfetti && (
        <Confetti />
      )}

      <div>

        <div className="bg-green-100 p-4 rounded-lg mb-6">

          <h1 className="text-3xl font-bold">
            Welcome, {officerName}
          </h1>

          <p>
            Taluk: {taluk}
          </p>

          <p>
            Panchayat: {panchayat}
          </p>

          <p>
            {currentDateTime}
          </p>

        </div>

        <div className="grid grid-cols-5 gap-4 mb-6">

          <div className="bg-blue-100 p-4 rounded-lg text-center">
            <h2 className="font-bold">Total</h2>
            <p className="text-3xl font-bold">
              {totalCount}
            </p>
          </div>

          <div className="bg-red-100 p-4 rounded-lg text-center">
            <h2 className="font-bold">Pending</h2>
            <p className="text-3xl font-bold">
              {pendingCount}
            </p>
          </div>

          <div className="bg-yellow-100 p-4 rounded-lg text-center">
            <h2 className="font-bold">In Progress</h2>
            <p className="text-3xl font-bold">
              {progressCount}
            </p>
          </div>

          <div className="bg-green-100 p-4 rounded-lg text-center">
            <h2 className="font-bold">Resolved</h2>
            <p className="text-3xl font-bold">
              {resolvedCount}
            </p>
          </div>

          <div className="bg-purple-100 p-4 rounded-lg text-center">
            <h2 className="font-bold">
              Resolution             </h2>
            <p className="text-3xl font-bold">
              {resolutionRate}            </p>
          </div>

        </div>

        <ComplaintMap
          complaints={complaints}
        />

        <div className="mt-6">

          {complaints.map((c) => (

            <div
              key={c.complaint_id}
              className="border p-4 rounded-lg mb-3 bg-white"
            >

              <h3 className="font-bold">
                {c.complaint_id}
              </h3>

              <p>
                {c.description}
              </p>

              <p>
                Village: {c.village}
              </p>

              <p>
                Status:
                <b> {c.status}</b>
              </p>

              
{c.after_image && (
  <div className="mt-4">
    <p className="font-bold mb-2">
      🎚️ Before / After Comparison
    </p>

    <div className="w-full max-w-3xl mx-auto">
      <ReactCompareImage
        leftImage={`http://127.0.0.1:8000/${c.before_image}`}
        rightImage={`http://127.0.0.1:8000/${c.after_image}`}
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

              {c.status !==
                "RESOLVED" && (

                <>

                  <button
                    className="bg-yellow-500 text-white px-3 py-1 mr-2 rounded"
                    onClick={() =>
                      updateStatus(
                        c.complaint_id,
                        "IN_PROGRESS"
                      )
                    }
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
                        [c.complaint_id]:
                          e.target.files[0]
                      })
                    }
                  />

                  <button
                    className="bg-green-600 text-white px-3 py-1 ml-2 rounded"
                    onClick={() =>
                      uploadAfterImage(
                        c.complaint_id
                      )
                    }
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