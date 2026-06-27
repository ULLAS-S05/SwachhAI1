import { useState, useEffect } from "react";

import Report from "./pages/Report";
import Track from "./pages/Track";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import About from "./pages/About";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";

import PremiumButton from "./components/PremiumButton";
import logo from "./assets/swachhai-logo.png";
import Loader from "./components/Loader";
import BackgroundParticles from "./components/BackgroundParticles";
import HeroSection from "./components/HeroSection";

function App() {

const [loading, setLoading] = useState(true);

const [loggedIn, setLoggedIn] = useState(
localStorage.getItem("isLoggedIn") === "true"
);

const [showRegister, setShowRegister] =
useState(false);
const [showTrack, setShowTrack] =
  useState(false);

const [showAbout, setShowAbout] =
  useState(false);

const role =
localStorage.getItem("role");

useEffect(() => {

const timer = setTimeout(() => {

  setLoading(false);

}, 3000);

return () => clearTimeout(timer);

}, []);

const logout = () => {

localStorage.clear();

setLoggedIn(false);

};

if (loading) {

return <Loader />;

}

return (


<div className="min-h-screen bg-transparent ">

  <BackgroundParticles />

<video autoPlay muted loop playsInline className="fixed top-0 left-0 w-full h-full object-cover opacity-30 -z-20">
  <source src="/kodagu.mp4" type="video/mp4" />
</video>

  <HeroSection />

  <nav
    className="
    backdrop-blur-xl
    bg-white/30
    border-b border-white/20
    shadow-xl
    px-4 md:px-8 py-4
    flex flex-col md:flex-row justify-between items-center gap-4
    "
  >

    <div className="flex items-center gap-5">

      <img
        src={logo}
        alt="SwachhAI"
        className="h-16 w-16 md:h-24 md:w-24 rounded-2xl shadow-xl"
      />

      <div>

        <h1
          className="
          text-3xl md:text-5xl
          font-black
          bg-gradient-to-r
          from-green-700
          via-green-500
          to-emerald-300
          bg-clip-text
          text-transparent
          "
        >
          SWACHH AI
        </h1>

        <p
          className="
          text-sm
          font-semibold
          tracking-[0.25em]
          text-gray-700
          "
        >
          CLEAN KODAGU • SMART KODAGU
        </p>

      </div>

    </div>

    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">

      <span className="font-semibold hover:text-green-700 cursor-pointer">
        Report
      </span>

      <span className="font-semibold hover:text-green-700 cursor-pointer" onClick={() => setShowTrack(!showTrack)}>Track</span>

      <span
        className="font-semibold hover:text-green-700 cursor-pointer"
        onClick={() => setShowAbout(!showAbout)}
      >
        About
      </span>

      {loggedIn && (

        <PremiumButton
          color="red"
          onClick={logout}
        >
          Logout
        </PremiumButton>

      )}

    </div>

  </nav>

  <div className="max-w-6xl mx-auto p-6">

    {!loggedIn ? (

      <>

        <div className="bg-white/60 backdrop-blur-lg p-6 rounded-3xl shadow-xl mb-6">
          <Report />
        </div>

        {showTrack && ( <div className="bg-white/60 backdrop-blur-lg p-6 rounded-3xl shadow-xl mb-6"><Track /></div> )}

        {showAbout && (
          <div className="bg-white/60 backdrop-blur-lg p-6 rounded-3xl shadow-xl mb-6">
            <About />
          </div>
        )}

        <div className="bg-white/60 backdrop-blur-lg p-6 rounded-3xl shadow-xl">

          {!showRegister ? (

            <>

              <Login
                onLogin={() =>
                  setLoggedIn(true)
                }
              />

              <button
                className="
                mt-4
                bg-green-600
                hover:bg-green-700
                text-white
                px-4 py-2
                rounded-xl
                transition
                "
                onClick={() =>
                  setShowRegister(true)
                }
              >
                New Officer? Register
              </button>

            </>

          ) : (

            <>

              <Register />

              <button
                className="
                mt-4
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-4 py-2
                rounded-xl
                transition
                "
                onClick={() =>
                  setShowRegister(false)
                }
              >
                Back To Login
              </button>

            </>

          )}

        </div>

      </>

    ) : (

      role === "admin"
        ? <AdminDashboard />
        : <Dashboard />

    )}

  </div>

</div>

);

}

export default App;

{/* Footer */}
<footer className="mt-12 text-center text-gray-700 py-6 border-t border-white/20">
  <p>© 2026 SwachhAI. All Rights Reserved.</p>
  <p className="font-semibold">Developed by Ullas S</p>
</footer>

