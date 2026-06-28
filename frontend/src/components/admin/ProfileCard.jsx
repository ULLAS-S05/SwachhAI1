export default function ProfileCard() {

  const name =
    localStorage.getItem("name") || "MLA";

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

      <img
        src="/mla.png"
        alt="MLA"
        className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full border-4 border-green-600 object-cover"
      />

      <h2 className="text-2xl md:text-4xl font-bold mt-5">
        {name}
      </h2>

      <p className="text-green-700 font-semibold mt-2">
        Member of Legislative Assembly
      </p>

    </div>
  );
}