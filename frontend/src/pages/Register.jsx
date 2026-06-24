import { useState } from "react";
import { kodagu } from "../data/kodagu";
import api from "../services/api";
import PremiumButton from "../components/PremiumButton";
import ReCAPTCHA from "react-google-recaptcha";

export default function Register() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [govtId, setGovtId] = useState("");

  const [taluk, setTaluk] = useState("");
  const [panchayat, setPanchayat] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState(false);

  const registerOfficer = async () => {

    if (!captcha) {
      alert("Please complete reCAPTCHA");
      return;
    }

    if (
      !name ||
      !phone ||
      !email ||
      !govtId ||
      !taluk ||
      !panchayat ||
      !username ||
      !password
    ) {
      alert("All fields are required");
      return;
    }

    try {

      await api.post("/register", {
        name,
        phone,
        email,
        govt_id: govtId,
        taluk,
        panchayat,
        username,
        password
      });

      alert(
        "Officer Registered Successfully"
      );

      setName("");
      setPhone("");
      setEmail("");
      setGovtId("");
      setTaluk("");
      setPanchayat("");
      setUsername("");
      setPassword("");

    } catch (err) {

      alert(
        err.response?.data?.detail ||
        "Registration Failed"
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
      max-w-2xl
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
        Officer Registration
      </h1>

      <div className="grid grid-cols-1 gap-4">

        <input
          className="w-full p-3 rounded-xl border border-gray-300"
          placeholder="Full Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          className="w-full p-3 rounded-xl border border-gray-300"
          placeholder="Phone Number"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
        />

        <input
          className="w-full p-3 rounded-xl border border-gray-300"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          className="w-full p-3 rounded-xl border border-gray-300"
          placeholder="Government ID"
          value={govtId}
          onChange={(e)=>setGovtId(e.target.value)}
        />

        <select
          className="w-full p-3 rounded-xl border border-gray-300"
          value={taluk}
          onChange={(e)=>{
            setTaluk(e.target.value);
            setPanchayat("");
          }}
        >
          <option value="">
            Select Taluk
          </option>

          {Object.keys(kodagu).map((t)=>(
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <select
          className="w-full p-3 rounded-xl border border-gray-300"
          value={panchayat}
          onChange={(e)=>
            setPanchayat(e.target.value)
          }
        >
          <option value="">
            Select Panchayat
          </option>

          {taluk &&
            Object.keys(
              kodagu[taluk]
            ).map((p)=>(
              <option
                key={p}
                value={p}
              >
                {p}
              </option>
            ))
          }

        </select>

        <input
          className="w-full p-3 rounded-xl border border-gray-300"
          placeholder="Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 rounded-xl border border-gray-300"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

      </div>

      
      <div className="flex justify-center mt-6 mb-4">
        <ReCAPTCHA
          sitekey="6Le9ljEtAAAAALEtt6SsQbve8P2g2fzaKhpbQQe7"
          onChange={() => setCaptcha(true)}
        />
      </div>

      <div className="flex justify-center mt-2">

        <PremiumButton
          color="green"
          onClick={registerOfficer}
        >
          Register
        </PremiumButton>

      </div>

      <p className="mt-6 text-sm text-gray-700 bg-yellow-50 border border-yellow-300 p-4 rounded-xl">
        📌 <b>Registration Rules</b>
        <br /><br />
        Username must start with the selected Panchayat name.
        <br />
        Example: ballamavati_admin
        <br /><br />
        Password must contain:
        <br />
        ✓ Minimum 8 characters
        <br />
        ✓ 1 Uppercase letter
        <br />
        ✓ 1 Lowercase letter
        <br />
        ✓ 1 Number
        <br />
        ✓ 1 Special character
        <br /><br />
        Example: Kodagu@123
      </p>


    </div>

  );

}
