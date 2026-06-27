import Navbar from "../components/layout/Navbar";
import Login from "./Login";

export default function LoginPage() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">

      <Navbar />

      <div className="pt-32 pb-20 px-6">

        <div className="max-w-lg mx-auto">

          <h1 className="text-5xl font-black text-green-700 mb-3 text-center">
            Officer Portal
          </h1>

          <p className="text-center text-gray-600 mb-8">
            Login to manage complaints assigned to your Panchayat.
          </p>

          <Login />

        </div>

      </div>

    </div>

  );

}
