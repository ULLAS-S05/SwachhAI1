import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import WhyCleanKodagu from "../components/home/WhyCleanKodagu";
import Workflow from "../components/home/Workflow";
import Services from "../components/home/Services";
import WaveDivider from "../components/common/WaveDivider";

export default function LandingPage() {
  return (
    <div className="bg-white overflow-x-hidden">

      <Navbar />

      <Hero />

      <WhyCleanKodagu />

      <WaveDivider color="#ffffff" flip />

      <Workflow />

      <WaveDivider color="#f0fdf4" />

      <Services />

      <div className="bg-green-50 py-16 px-6">

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8">

          <div className="flex flex-col md:flex-row items-center gap-8">

            <img
              src="/developer.jpg"
              alt="Ullas S"
              className="w-36 h-36 rounded-full object-cover border-4 border-green-600"
            />

            <div>

              <h2 className="text-4xl font-bold text-green-700">
                About the Developer
              </h2>

              <h3 className="text-2xl font-semibold mt-3">
                Ullas S
              </h3>

              <p className="text-gray-600 mt-3">
                Python Developer • AI & Data Science Engineer
              </p>

              <p className="mt-4 text-gray-700">
                Creator of SwachhAI — an AI-powered complaint management
                platform designed to improve cleanliness monitoring,
                governance transparency and citizen engagement.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}