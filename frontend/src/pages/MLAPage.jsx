import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import api from "../services/api";

export default function MLAPage() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {

    try {

      const res = await api.post("/login", {
        username,
        password,
      });

      console.log(res.data);

      if (res.data.role !== "mla") {
        alert("This account is not an MLA account.");
        return;
      }

      localStorage.setItem("token", res.data.access_token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("name", res.data.name);
      localStorage.setItem("phone", res.data.phone || "");
      localStorage.setItem("email", res.data.email || "");
      localStorage.setItem("taluk", res.data.taluk || "");
      localStorage.setItem("panchayat", res.data.panchayat || "");

      navigate("/admin");

    } catch (err) {

      console.log(err);

      alert(
        err?.response?.data?.detail ||
        "Invalid MLA Credentials"
      );

    }

  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-yellow-50">

        <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">

          <h1 className="text-4xl font-bold text-center mb-8">
            🏛 MLA Portal
          </h1>

          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="MLA Username"
            className="w-full border p-3 rounded-xl mb-4"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full border p-3 rounded-xl mb-6"
          />

          <button
            onClick={login}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl font-bold"
          >
            Login
          </button>

        </div>

      </div>
    </>
  );
}