import ullas from "../assets/ullas.jpg";

export default function About() {
  return (
    <div className="bg-white/60 backdrop-blur-lg p-8 rounded-3xl shadow-xl mb-8">

      <h1 className="text-4xl font-bold text-center mb-6">
        About Kodagu & SwachhAI
      </h1>

      <h2 className="text-2xl font-bold mb-3">
        🌿 About Kodagu (Coorg)
      </h2>

      <p className="mb-4">
        Kodagu, popularly known as the Scotland of India,
        is one of Karnataka's most beautiful districts.
        Located in the Western Ghats, Kodagu is famous
        for coffee plantations, lush green hills,
        waterfalls, forests, wildlife, pleasant climate,
        and rich cultural heritage.
      </p>

      <p className="mb-4">
        Tourist attractions such as Abbey Falls,
        Raja's Seat, Talakaveri, Dubare Elephant Camp,
        Mandalpatti and Nagarhole National Park attract
        thousands of visitors every year.
      </p>

      <h2 className="text-2xl font-bold mb-3">
        ⭐ Specialities of Kodagu
      </h2>

      <ul className="list-disc ml-6 mb-4">
        <li>World-famous coffee plantations</li>
        <li>Rich biodiversity and wildlife</li>
        <li>Origin of River Kaveri</li>
        <li>Beautiful waterfalls and mountains</li>
        <li>Tourism hotspot of Karnataka</li>
        <li>Unique Kodava culture and traditions</li>
        <li>Known for brave soldiers serving India</li>
      </ul>

      <h2 className="text-2xl font-bold mb-3">
        ♻️ Why Should We Keep Kodagu Clean?
      </h2>

      <p className="mb-4">
        Cleanliness is essential to protect Kodagu's
        forests, rivers, wildlife, villages and tourist
        destinations. Improper waste disposal affects
        public health, damages the environment and
        reduces the beauty of our district.
      </p>

      <h2 className="text-2xl font-bold mb-3">
        🧹 How Can We Keep Kodagu Clean?
      </h2>

      <ul className="list-disc ml-6 mb-4">
        <li>Use dustbins properly</li>
        <li>Segregate wet and dry waste</li>
        <li>Avoid littering in public places</li>
        <li>Reduce plastic usage</li>
        <li>Participate in cleaning drives</li>
        <li>Promote recycling practices</li>
        <li>Report garbage issues immediately</li>
        <li>Create awareness among citizens and tourists</li>
      </ul>

      <h2 className="text-2xl font-bold mb-3">
        🤖 About SwachhAI
      </h2>

      <p className="mb-4">
        SwachhAI is an AI-powered waste management and
        complaint monitoring platform developed to help
        maintain cleanliness across Kodagu.
      </p>

      <p className="mb-4">
        Citizens can report garbage complaints,
        Panchayat officers can monitor and resolve
        issues, and administrators can track progress
        through centralized dashboards.
      </p>

      <h2 className="text-2xl font-bold mb-3">
        🎯 Vision
      </h2>

      <p className="text-xl font-semibold text-green-700 mb-8">
        "Clean Kodagu • Smart Kodagu"
      </p>

      <div className="border-t pt-8">

        <h2 className="text-3xl font-bold text-center mb-6">
          👨‍💻 Developer
        </h2>

        <div className="flex flex-col items-center">

          <img
            src={ullas}
            alt="Ullas S"
            className="w-44 h-44 rounded-full object-cover border-4 border-green-600 shadow-xl"
          />

          <h3 className="text-2xl font-bold mt-4">
            Ullas S
          </h3>

          <p className="text-gray-700">
            Artificial Intelligence & Data Science
          </p>

          <p className="text-gray-700">
            Coorg Institute of Technology, Ponnampet
          </p>

          <p className="mt-4 italic text-green-700 font-semibold">
            "Technology for a Cleaner Kodagu"
          </p>

        </div>

      </div>

    </div>
  );
}
