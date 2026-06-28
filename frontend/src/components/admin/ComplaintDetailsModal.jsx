export default function ComplaintDetailsModal({
  complaint,
  open,
  onClose
}) {

  if (!open || !complaint) return null;

  return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">

      <div className="relative z-[9999] bg-white rounded-3xl shadow-2xl p-8 w-[95vw] max-w-4xl max-h-[90vh] overflow-y-auto">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-4xl font-black">
            Complaint Details
          </h2>

          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl"
          >
            Close
          </button>

        </div>

        <div className="space-y-3 text-xl">

          <p><b>ID:</b> {complaint.complaint_id}</p>
          <p><b>Taluk:</b> {complaint.taluk}</p>
          <p><b>Panchayat:</b> {complaint.panchayat}</p>
          <p><b>Village:</b> {complaint.village}</p>
          <p><b>Status:</b> {complaint.status}</p>

          <div className="mt-6">
            <b>Description:</b>
            <p>{complaint.description}</p>
          </div>

          <div className="mt-6">

            <h3 className="font-bold text-2xl mb-2">
              Before Image
            </h3>

            {complaint.before_image ? (

              <img
                src={`http://127.0.0.1:8000/${complaint.before_image}`}
                alt="Before"
                className="w-full rounded-xl border"
              />

            ) : (

              <div className="bg-yellow-100 p-4 rounded-xl">
                No Before Image Uploaded
              </div>

            )}

          </div>

          <div className="mt-6">

            <h3 className="font-bold text-2xl mb-2">
              After Image
            </h3>

            {complaint.after_image ? (

              <img
                src={`http://127.0.0.1:8000/${complaint.after_image}`}
                alt="After"
                className="w-full rounded-xl border"
              />

            ) : (

              <div className="bg-yellow-100 p-4 rounded-xl">
                No After Image Uploaded
              </div>

            )}

          </div>

        </div>

      </div>

    </div>

  );

}
