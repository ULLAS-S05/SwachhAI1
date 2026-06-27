import Navbar from "../components/layout/Navbar";
import Report from "./Report";

export default function ReportPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <Report />
        </div>
      </div>
    </>
  );
}
