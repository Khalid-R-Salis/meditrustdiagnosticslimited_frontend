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
    "w-full rounded-[8px] bg-white px-[14px] py-[10px] pr-[40px] focus:outline-none";
  const errorInputClass =
    "bg-[#FFFBFA] shadow-[0_2px_5px_0_rgba(243,65,65,0.08),_0_0_0_2px_rgba(243,65,65,0.40),_0_1px_1px_0_rgba(0,0,0,0.12)]";

  return (
    <div
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex flex-col items-center justify-center min-h-screen gap-[8px] bg-[#f9f9f9] relative"
    >
      <div
        className="absolute top-0 left-0 w-full flex items-center"
        style={{
          borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
          height: "64px",
        }}
      >
        <a href="/">
          <img
            src={logo2}
            alt="Logo"
            className="h-[40px] w-[166px] ml-4 sm:ml-[140px] mt-6 mb-6"
          />
        </a>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-[8px] w-full"
      >
        <div className="bg-[#FFF] p-[24px] sm:p-[40px] rounded-[24px] shadow-md w-[90%] sm:w-[440px] max-w-[440px]">
          <div className="mb-[32px]">
            <h1 className="text-black font-inter text-[20px] font-semibold leading-[30px]">
              You’re Almost There
            </h1>
            <p className="text-[#383F45] text-[14px] leading-[20px] font-normal font-inter mt-1">
              Please enter a new password to complete your login reset process.
            </p>
          </div>

          {/* New Password */}
          <div className="mb-5">
            <h2 className="text-[#454C52] text-[14px] font-inter font-normal leading-5 mb-2">
              New Password
            </h2>
            <input
              type="text"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
                if (confirmPassword && e.target.value === confirmPassword) {
                  setPasswordError("");
                }
              }}
              className={`${inputBaseClass} shadow-custom ${
                passwordError ? errorInputClass : "shadow-custom"
              }`}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <h2 className="text-[#454C52] text-[14px] font-inter font-normal leading-5 mb-2">
              Confirm Password
            </h2>
            <input
              type="text"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (newPassword && e.target.value === newPassword) {
                  setPasswordError("");
                }
              }}
              className={`${inputBaseClass} shadow-custom ${
                passwordError ? errorInputClass : "shadow-custom"
              }`}
              required
            />

            {passwordError && (
              <p className="text-[#F34141] text-[14px] font-inter font-normal leading-[20px] mt-2">
                {passwordError}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#829C15] text-white py-[10px] px-[18px] rounded-lg font-medium my-6 shadow-sm"
          >
            Reset password
          </button>

          <p className="text-[12px] text-[#383F45] font-medium text-left font-inter leading-[28px]">
            Need help?{" "}
            <span className="text-[#829C15] cursor-pointer">
              <a href="/contactadmin">Contact administrator</a>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Newpassword;
