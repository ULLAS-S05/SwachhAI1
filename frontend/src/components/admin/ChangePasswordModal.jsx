import api from "../../services/api";
import { useState } from "react";

export default function ChangePasswordModal({ open, onClose }) {

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  if (!open) return null;

  const handleSave = async () => {

  if (newPassword !== confirmPassword) {

    alert("Passwords do not match");

    return;

  }

  try {

    await api.put("/change-password", {

      current_password: currentPassword,

      new_password: newPassword

    });

    alert("Password changed successfully");

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

    onClose();

  } catch (error) {

    alert(

      error?.response?.data?.detail ||

      "Failed to change password"

    );

  }

};

  return (

    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white rounded-3xl shadow-2xl p-8 w-[450px]">

        <h2 className="text-3xl font-bold mb-6 text-center">
          🔒 Change Password
        </h2>

        <input
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e)=>setCurrentPassword(e.target.value)}
          className="w-full border rounded-xl p-3 mb-4"
        />

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e)=>setNewPassword(e.target.value)}
          className="w-full border rounded-xl p-3 mb-4"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e)=>setConfirmPassword(e.target.value)}
          className="w-full border rounded-xl p-3 mb-6"
        />

        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl bg-gray-300"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-5 py-3 rounded-xl bg-green-600 text-white"
          >
            Save Password
          </button>

        </div>

      </div>

    </div>

  );

}