import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ReportPage from "./pages/ReportPage";
import TrackPage from "./pages/TrackPage";
import LoginPage from "./pages/LoginPage";
import MLAPage from "./pages/MLAPage";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import MLADashboard from "./pages/MLADashboard";

import ProtectedRoute from "./components/common/ProtectedRoute";

export default function App() {

return (


<BrowserRouter>

  <Routes>

    {/* Home */}
    <Route
      path="/"
      element={<Home />}
    />

    {/* Citizen */}
    <Route
      path="/report"
      element={<ReportPage />}
    />

    <Route
      path="/track"
      element={<TrackPage />}
    />

    {/* Officer Login */}
    <Route
      path="/login"
      element={<LoginPage />}
    />

    <Route
      path="/register"
      element={<Register />}
    />

    {/* Officer Dashboard */}
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />

    {/* MLA Login */}
    <Route
      path="/mla"
      element={<MLAPage />}
    />

    {/* MLA Dashboard */}
    <Route
      path="/mla-dashboard"
      element={
        <ProtectedRoute>
          <MLADashboard />
        </ProtectedRoute>
      }
    />

    {/* Admin Dashboard */}
    <Route
      path="/admin"
      element={
        <ProtectedRoute>
          <AdminDashboard />
        </ProtectedRoute>
      }
    />

  </Routes>

</BrowserRouter>


);

}
