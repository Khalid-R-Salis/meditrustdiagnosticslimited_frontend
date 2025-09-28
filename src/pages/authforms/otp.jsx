// import React, { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import bg1 from "../../assets/bg1.png";
// import logo2 from "../../assets/logo2.png";

// const OTPInput = () => {
//   const length = 4;
//   const [otp, setOtp] = useState(new Array(length).fill(""));
//   const [isError, setIsError] = useState(false);
//   const inputsRef = useRef([]);
//   const navigate = useNavigate();

//   const clearOtpInputs = () => {
//     setOtp(new Array(length).fill(""));
//     inputsRef.current[0]?.focus();
//   };

//   const handleChange = (value, index) => {
//     if (/^\d?$/.test(value)) {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);
//       setIsError(false);

//       if (value && index < length - 1) {
//         inputsRef.current[index + 1]?.focus();
//       }
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       inputsRef.current[index - 1]?.focus();
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const finalOTP = otp.join("");
//     const correctOTP = "1234";

//     if (finalOTP === correctOTP) {
//       setIsError(false);
//       clearOtpInputs();
//       navigate("/newpassword");
//     } else {
//       setIsError(true);
//       clearOtpInputs();
//     }
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${bg1})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//       className="flex items-center justify-center min-h-[100dvh] bg-[#f9f9f9] relative"
//     >
//       {/* Logo Header */}
//       <div
//         className="absolute top-0 left-0 w-full flex items-center z-10"
//         style={{
//           borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
//           height: "64px",
//         }}
//       >
//         <a href="/">
//           <img
//             src={logo2}
//             alt="Logo"
//             className="h-[40px] w-[166px] ml-4 sm:ml-[140px] mt-4 mb-4"
//           />
//         </a>
//       </div>

//       {/* Form */}
//       <div className="flex flex-col items-center justify-center w-full h-full px-4 overflow-y-auto">
//         <div className="bg-[#FFF] p-[24px] sm:p-[40px] rounded-[24px] shadow-md w-[90%] sm:w-[440px] max-w-[440px] mt-[80px] mb-[20px]">
//           <div className="mb-[32px]">
//             <div className="mb-8 text-[#383F45] text-[14px] font-inter font-normal leading-[20px]">
//               <a href="/emailreset">← BACK</a>
//             </div>
//             <h1 className="text-black font-inter text-[20px] font-semibold leading-[30px]">
//               Enter your OTP
//             </h1>
//             <p className="text-[#383F45] text-[14px] leading-[20px] font-normal font-inter mt-1">
//               An OTP has been sent to your registered email. Enter the OTP to
//               securely update your login details.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit}>
//             <div className="flex justify-left gap-2 mb-2">
//               {otp.map((digit, index) => (
//                 <input
//                   key={index}
//                   type="text"
//                   maxLength={1}
//                   value={digit}
//                   required
//                   onChange={(e) => handleChange(e.target.value, index)}
//                   onKeyDown={(e) => handleKeyDown(e, index)}
//                   ref={(el) => (inputsRef.current[index] = el)}
//                   className={`w-[40px] h-[40px] text-center text-lg border rounded-[8px] focus:outline-none shadow-sm font-inter
//                     ${
//                       isError
//                         ? "bg-[#FFFBFA] border-[#F34141] shadow-[0_2px_5px_0_rgba(243,65,65,0.08),_0_0_0_2px_rgba(243,65,65,0.40),_0_1px_1px_0_rgba(0,0,0,0.12)]"
//                         : "border-gray-300 focus:ring-2 focus:ring-[#829C15] bg-[#FFF]"
//                     }`}
//                 />
//               ))}
//             </div>

//             {isError && (
//               <p className="text-[#F34141] text-[14px] font-inter font-normal leading-[20px] mb-6">
//                 OTP incorrect, please try again
//               </p>
//             )}

//             <button
//               type="submit"
//               className="w-full bg-[#829C15] text-white py-[10px] px-[18px] rounded-lg font-medium my-6 shadow-sm"
//             >
//               Continue
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OTPInput;

import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import bg1 from "../../assets/bg1.png";
import logo2 from "../../assets/logo2.png";

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
    <div
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 md:px-8 bg-[#f9f9f9] relative"
    >
      {/* Top Navbar */}
      <div className="absolute top-0 left-0 w-full flex items-center border-b border-black/10 h-16 bg-white/70 backdrop-blur-md">
        <a href="/" className="flex items-center">
          <img
            src={logo2}
            alt="Logo"
            className="h-10 w-auto ml-4 sm:ml-10 md:ml-20"
          />
        </a>
      </div>

      {/* OTP Form Box */}
      <div className="bg-white mt-20 sm:mt-24 p-6 sm:p-8 md:p-10 rounded-2xl shadow-md w-full max-w-md">
        <div className="mb-8">
          <div className="mb-6 text-[#383F45] text-sm font-inter">
            <a href="/emailreset">← BACK</a>
          </div>
          <h1 className="text-black font-inter text-xl sm:text-2xl font-semibold leading-snug">
            Enter your OTP
          </h1>
          <p className="text-[#383F45] text-sm leading-relaxed font-inter mt-2">
            An OTP has been sent to your registered email. Enter the OTP to
            securely update your login details.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* OTP Inputs */}
          <div className="flex justify-center gap-3">
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
                className={`w-12 h-12 sm:w-14 sm:h-14 text-center text-lg border rounded-lg focus:outline-none shadow-sm font-inter
                  ${
                    isError
                      ? "bg-[#FFFBFA] border-red-400 shadow-[0_0_0_2px_rgba(243,65,65,0.40)]"
                      : "border-gray-300 focus:ring-2 focus:ring-[#829C15] bg-white"
                  }`}
              />
            ))}
          </div>

          {isError && (
            <p className="text-red-500 text-sm mt-2 text-center">
              OTP incorrect, please try again
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#829C15] text-white py-2 px-4 rounded-lg font-medium shadow-sm hover:bg-[#6c8112] transition"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTPInput;
