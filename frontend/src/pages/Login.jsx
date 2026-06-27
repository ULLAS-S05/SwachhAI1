import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import PremiumButton from "../components/PremiumButton";
import Captcha from "../components/Captcha";

export default function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const login = async () => {

    if (!captchaVerified) {
      alert("Please complete CAPTCHA");
      return;
    }

    try {

      const res = await api.post("/login", {
        username,
        password
      });

      localStorage.setItem(
  "token",
  res.data.access_token
);

localStorage.setItem(
  "role",
  res.data.role
);

localStorage.setItem(
  "name",
  res.data.name
);

localStorage.setItem(
  "phone",
  res.data.phone || ""
);

localStorage.setItem(
  "email",
  res.data.email || ""
);

localStorage.setItem(
  "taluk",
  res.data.taluk || ""
);

localStorage.setItem(
  "panchayat",
  res.data.panchayat || ""
);

if (res.data.role === "mla") {

  navigate("/admin");

} else {

  navigate("/dashboard");

}
    } catch (err) {

      alert("Invalid Credentials");

    }

  };

  return (
    <div className="backdrop-blur-xl bg-white/40 border border-white/20 shadow-2xl rounded-3xl p-8 max-w-md mx-auto">

      <h1 className="text-4xl font-extrabold mb-6 text-center">
        Officer Login
      </h1>

      <input
        className="w-full p-3 mb-3 rounded-xl border"
        placeholder="Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
      />

      <input
        type="password"
        className="w-full p-3 mb-4 rounded-xl border"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <Captcha onVerify={setCaptchaVerified} />

      <div className="flex justify-center mt-4">
        <PremiumButton color="blue" onClick={login}>
          Login
        </PremiumButton>
      </div>

    </div>
  );
}
