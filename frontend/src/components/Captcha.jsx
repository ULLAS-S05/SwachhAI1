import { useState, useEffect } from "react";

const chars =
"ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";

export default function Captcha({ onVerify }) {

  const [captcha, setCaptcha] = useState("");
  const [input, setInput] = useState("");

  const generateCaptcha = () => {
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }
    setCaptcha(code);
    setInput("");
    onVerify(false);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  useEffect(() => {
    onVerify(input === captcha);
  }, [input, captcha]);

  return (

    <div className="mt-4">

      <label className="font-semibold">
        Security Verification
      </label>

      <div className="flex items-center gap-3 mt-2">

        <div
          className="
          bg-gradient-to-r
          from-green-700
          to-green-500
          text-white
          px-6
          py-3
          rounded-xl
          font-bold
          text-xl
          tracking-[0.3em]
          select-none
          shadow-lg
          "
        >
          {captcha}
        </div>

        <button
          type="button"
          onClick={generateCaptcha}
          className="
          bg-gray-200
          hover:bg-gray-300
          px-3
          py-2
          rounded-lg
          "
        >
          🔄
        </button>

      </div>

      <input
        className="
        w-full
        mt-3
        p-3
        rounded-xl
        border
        "
        placeholder="Enter CAPTCHA"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
      />

      {input.length > 0 && (

        input === captcha ?

        <p className="text-green-600 mt-2">
          ✅ CAPTCHA Verified
        </p>

        :

        <p className="text-red-600 mt-2">
          ❌ Incorrect CAPTCHA
        </p>

      )}

    </div>

  );

}
