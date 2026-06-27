import Navbar from "../components/layout/Navbar";
import Track from "./Track";

export default function TrackPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <Navbar />

      <div className="pt-32 pb-20 px-6">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl font-black text-green-700 mb-3">
            Track Complaint
          </h1>

          <p className="text-gray-600 mb-10">
            Enter your Complaint ID to check the latest status.
          </p>

          <Track />

        </div>

      </div>

    </div>
  );
}
