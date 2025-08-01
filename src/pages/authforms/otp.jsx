import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const OTPInput = () => {
  const length = 4;
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const [isError, setIsError] = useState(false);
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  const clearOtpInputs = () => {
    setOtp(new Array(length).fill(""));
    inputsRef.current[0]?.focus();
  };

  const handleChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setIsError(false);

      if (value && index < length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalOTP = otp.join("");
    const correctOTP = "1234";

    if (finalOTP === correctOTP) {
      setIsError(false);
      clearOtpInputs();
      navigate("/newpassword");
    } else {
      setIsError(true);
      clearOtpInputs();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-[8px] bg-[#f9f9f9]">
      <div className="bg-white p-[40px] rounded-2xl shadow-md w-[440px]">
        <div className="mb-[32px]">
          <div className="mb-8 text-[#383F45] text-[14px] font-inter font-normal leading-[20px]">
            <a href="/emailreset">← BACK</a>
          </div>
          <h1 className="text-black font-inter text-[20px] font-semibold leading-[30px]">
            Enter your OTP
          </h1>
          <p className="text-[#383F45] text-[14px] leading-[20px] font-normal font-inter mt-1">
            An OTP has been sent to your email. Enter your OTP to securely
            update your login details.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-left gap-2 mb-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                required
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputsRef.current[index] = el)}
                className={`w-[40px] h-[40px] text-center text-lg border rounded-[8px] focus:outline-none shadow-sm font-inter
                  ${
                    isError
                      ? "bg-[#FFFBFA] border-[#F34141] shadow-[0_2px_5px_0_rgba(243,65,65,0.08),_0_0_0_2px_rgba(243,65,65,0.40),_0_1px_1px_0_rgba(0,0,0,0.12)]"
                      : "border-gray-300 focus:ring-2 focus:ring-[#829C15] bg-[#FFF]"
                  }`}
              />
            ))}
          </div>

          {isError && (
            <p className="text-[#F34141] text-[14px] font-inter font-normal leading-[20px] mb-6">
              OTP incorrect, please try again
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#829C15] text-white py-[10px] px-[18px] rounded-lg font-medium my-6 shadow-sm"
          >
            Continue
          </button>
        </form>

        <p className="text-[12px] text-[#383F45] font-[500] text-left font-inter leading-[28px]">
          <p className="text-[12px] text-[#383F45] font-medium text-left font-inter leading-[28px]">
            Need help?{" "}
            <span className="text-[#829C15] cursor-pointer">
              <a href="/contactadmin">Contact administrator</a>
            </span>
          </p>
        </p>
      </div>
    </div>
  );
};

export default OTPInput;
