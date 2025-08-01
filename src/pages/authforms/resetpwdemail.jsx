import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg1 from "../../assets/bg1.png";
import logo2 from "../../assets/logo2.png";

const Resetpassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "test@gmail.com") {
      setError(true);
      return;
    }
    console.log("Reset link sent to:", email);
    setEmail("");
    setError(false);
    navigate("/otp");
  };

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
            className="h-[40px] w-[166px] ml-[140px] mt-6 mb-6"
          />
        </a>
      </div>
      {/* Reset Password Box */}
      <div className="bg-white p-[40px] rounded-2xl shadow-md w-[440px] mt-[80px]">
        <div className="mb-[32px]">
          <div className="mb-8 text-[#383F45] text-[14px] font-inter font-normal leading-[20px]">
            <a href="/login">← BACK</a>
          </div>
          <h1 className="text-black font-[inter] text-[20px] font-semibold leading-[30px]">
            Having Trouble Signing In?
          </h1>
          <p className="text-[#383F45] text-[14px] leading-[20px] font-normal font-[inter] mt-1">
            Enter your registered email address, and we’ll send you an OTP to
            reset your password securely.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <h2 className="text-[#454C52] text-[14px] font-[inter] font-normal leading-5 mb-2">
              Email
            </h2>
            <input
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError(false);
              }}
              required
              className={`w-full px-[14px] py-[10px] mb-2 focus:outline-none rounded-[8px] ${
                error
                  ? "bg-[#FFFBFA] shadow-[0_2px_5px_0_rgba(243,65,65,0.08),_0_0_0_2px_rgba(243,65,65,0.40),_0_1px_1px_0_rgba(0,0,0,0.12)]"
                  : "bg-white shadow-custom"
              }`}
            />
            {error && (
              <p className="text-[#F34141] text-[14px] font-inter font-normal leading-[20px] mb-8">
                This email address isn't registered with us
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#829C15] text-white py-[10px] px-[18px] rounded-lg font-medium mb-6 shadow-sm"
          >
            Reset Password
          </button>
        </form>

        <p className="text-[12px] text-[#383F45] font-medium text-left font-inter leading-[28px]">
          Need help?{" "}
          <span className="text-[#829C15] cursor-pointer">
            <a href="/contactadmin">Contact administrator</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Resetpassword;
