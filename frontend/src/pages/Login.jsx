import { useState } from "react";
import api from "../services/api";
import PremiumButton from "../components/PremiumButton";

export default function Login({ onLogin }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {

    if (
      username === "admin" &&
      password === "admin123"
    ) {

      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      localStorage.setItem(
        "role",
        "admin"
      );

      onLogin();

      return;
    }

    try {

      const res = await api.post(
        "/login",
        {
          username,
          password
        }
      );

      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      localStorage.setItem(
        "role",
        "officer"
      );

      localStorage.setItem(
        "officerName",
        res.data.name
      );

      localStorage.setItem(
        "taluk",
        res.data.taluk
      );

      localStorage.setItem(
        "panchayat",
        res.data.panchayat
      );

      onLogin();

    } catch {

      alert(
        "Invalid Credentials"
      );

    }

  };

  return (

    <div
      className="
      backdrop-blur-xl
      bg-white/40
      border border-white/20
      shadow-2xl
      rounded-3xl
      p-8
      max-w-md
      mx-auto
      "
    >

      <h1
        className="
        text-4xl
        font-extrabold
        mb-6
        text-center
        "
      >
        Officer Login
      </h1>

      <input
        className="
        w-full
        p-3
        mb-3
        rounded-xl
        border
        border-gray-300
        focus:ring-2
        focus:ring-green-500
        outline-none
        "
        placeholder="Username"
        value={username}
        onChange={(e)=>
          setUsername(
            e.target.value
          )
        }
      />

      <input
        type="password"
        className="
        w-full
        p-3
        mb-4
        rounded-xl
        border
        border-gray-300
        focus:ring-2
        focus:ring-green-500
        outline-none
        "
        placeholder="Password"
        value={password}
        onChange={(e)=>
          setPassword(
            e.target.value
          )
        }
      />

      <div className="flex justify-center">

        <PremiumButton
          color="blue"
          onClick={login}
        >
          Login
        </PremiumButton>

      </div>

    </div>

  );

}
