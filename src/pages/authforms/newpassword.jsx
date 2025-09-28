import React, { useState } from "react";
import bg1 from "../../assets/bg1.png";
import logo2 from "../../assets/logo2.png";

const Newpassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const clearForm = () => {
    setNewPassword("");
    setConfirmPassword("");
    setPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match!");
      return;
    }

    console.log("New Password set:", newPassword);
    clearForm();
    // Submit to backend here
  };

  const inputBaseClass =
    "w-full rounded-lg bg-white px-4 py-2 focus:outline-none shadow-sm border border-gray-300 focus:ring-2 focus:ring-[#829C15]";
  const errorInputClass =
    "bg-[#FFFBFA] border-[#F34141] shadow-[0_0_0_2px_rgba(243,65,65,0.40)]";

  return (
    <div
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 md:px-8 bg-[#f9f9f9] relative"
    >
      {/* Top Navbar */}
      <div className="absolute top-0 left-0 w-full flex items-center border-b border-black/10 h-16 bg-white/70 backdrop-blur-md z-10">
        <a href="/" className="flex items-center">
          <img
            src={logo2}
            alt="Logo"
            className="h-10 w-auto ml-4 sm:ml-10 md:ml-20"
          />
        </a>
      </div>

      {/* Password Reset Box */}
      <div className="bg-white mt-20 sm:mt-24 p-6 sm:p-8 md:p-10 rounded-2xl shadow-md w-full max-w-md">
        <div className="mb-8">
          <h1 className="text-black font-inter text-xl sm:text-2xl font-semibold leading-snug">
            You’re Almost There
          </h1>
          <p className="text-[#383F45] text-sm sm:text-base leading-relaxed font-inter mt-2">
            Please enter a new password to complete your login reset process.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* New Password */}
          <div>
            <label className="block text-[#454C52] text-sm font-inter mb-2">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
                if (confirmPassword && e.target.value === confirmPassword) {
                  setPasswordError("");
                }
              }}
              className={`${inputBaseClass} ${
                passwordError ? errorInputClass : ""
              }`}
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-[#454C52] text-sm font-inter mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (newPassword && e.target.value === newPassword) {
                  setPasswordError("");
                }
              }}
              className={`${inputBaseClass} ${
                passwordError ? errorInputClass : ""
              }`}
              required
            />
            {passwordError && (
              <p className="text-[#F34141] text-sm font-inter mt-2">
                {passwordError}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#829C15] text-white py-2 px-4 rounded-lg font-medium shadow-sm hover:bg-[#6c8112] transition"
          >
            Reset password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newpassword;
