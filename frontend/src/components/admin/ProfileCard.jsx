export default function ProfileCard() {

  const name =
    localStorage.getItem("name") || "MLA";

  return (

    <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="MLA"
        className="w-32 h-32 mx-auto rounded-full border-4 border-green-600"
      />

      <h2 className="text-4xl font-bold mt-5">
        {name}
      </h2>

      <p className="text-green-700 font-semibold mt-2">
        Member of Legislative Assembly
      </p>

    </div>

  );

}