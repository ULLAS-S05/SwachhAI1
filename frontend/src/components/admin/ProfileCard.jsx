export default function ProfileCard() {

const name =
localStorage.getItem("name") || "MLA";

const taluk =
localStorage.getItem("taluk") || "Kodagu";

return (


<div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-8 text-center">

  <img
    src="/mla.png"
    alt="MLA"
    className="w-32 h-32 mx-auto rounded-full border-4 border-green-600 object-cover shadow-xl"
  />

  <h2 className="text-3xl font-black mt-5 text-gray-800">
    {name}
  </h2>

  <p className="text-green-700 font-semibold mt-2">
    Member of Legislative Assembly
  </p>

  <div className="mt-6">

    <div className="bg-green-50 rounded-2xl p-4">

      <p className="text-sm text-gray-500">
        Constituency
      </p>

      <h3 className="font-bold text-green-700 mt-1">
        {taluk}
      </h3>

    </div>

  </div>

</div>


);

}
