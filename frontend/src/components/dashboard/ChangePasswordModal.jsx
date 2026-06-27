import { useState } from "react";
import api from "../../services/api";

export default function ChangePasswordModal({
  open,
  onClose,
}) {

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  if (!open) return null;

  const handleSave = async () => {

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (newPassword.length < 8) {
      alert("Password must contain at least 8 characters");
      return;
    }

    try {

      await api.put("/change-password", {
        current_password: currentPassword,
        new_password: newPassword,
      });

      alert("Password changed successfully");

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

      onClose();

    } catch (err) {

      alert(
        err?.response?.data?.detail ||
        "Failed to change password"
      );

    }

  };

  return (

    <div className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center p-4">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg p-8">

        <h2 className="text-3xl font-bold mb-6">
          🔒 Change Password
        </h2>

        <input
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="w-full border p-3 rounded-xl mb-4"
        />

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full border p-3 rounded-xl mb-4"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full border p-3 rounded-xl mb-6"
        />

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="bg-gray-300 px-5 py-3 rounded-xl"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl"
          >
            Save Password
          </button>

        </div>

      </div>

    </div>

  );

}