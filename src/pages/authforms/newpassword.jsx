// import React, { useState } from "react";
// import bg1 from "../../assets/bg1.png";
// import logo2 from "../../assets/logo2.png";

// const Newpassword = () => {
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const clearForm = () => {
//     setNewPassword("");
//     setConfirmPassword("");
//     setPasswordError("");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (newPassword !== confirmPassword) {
//       setPasswordError("Passwords do not match!");
//       return;
//     }

//     console.log("New Password set:", newPassword);
//     clearForm();
//     // Submit to backend here
//   };

//   const inputBaseClass =
//     "w-full rounded-[8px] bg-white px-[14px] py-[10px] pr-[40px] focus:outline-none";
//   const errorInputClass =
//     "bg-[#FFFBFA] shadow-[0_2px_5px_0_rgba(243,65,65,0.08),_0_0_0_2px_rgba(243,65,65,0.40),_0_1px_1px_0_rgba(0,0,0,0.12)]";

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${bg1})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//       className="flex items-center justify-center min-h-[100dvh] bg-[#f9f9f9] relative"
//     >
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

//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col items-center justify-center w-full h-full px-4 overflow-y-auto"
//       >
//         <div className="bg-[#FFF] p-[24px] sm:p-[40px] rounded-[24px] shadow-md w-[90%] sm:w-[440px] max-w-[440px] mt-[80px] mb-[20px]">
//           <div className="mb-[32px]">
//             <h1 className="text-black font-inter text-[20px] font-semibold leading-[30px]">
//               You’re Almost There
//             </h1>
//             <p className="text-[#383F45] text-[14px] leading-[20px] font-normal font-inter mt-1">
//               Please enter a new password to complete your login reset process.
//             </p>
//           </div>

//           {/* New Password */}
//           <div className="mb-5">
//             <h2 className="text-[#454C52] text-[14px] font-inter font-normal leading-5 mb-2">
//               New Password
//             </h2>
//             <input
//               type="text"
//               placeholder="Enter new password"
//               value={newPassword}
//               onChange={(e) => {
//                 setNewPassword(e.target.value);
//                 if (confirmPassword && e.target.value === confirmPassword) {
//                   setPasswordError("");
//                 }
//               }}
//               className={`${inputBaseClass} shadow-custom ${
//                 passwordError ? errorInputClass : "shadow-custom"
//               }`}
//               required
//             />
//           </div>

//           {/* Confirm Password */}
//           <div className="mb-4">
//             <h2 className="text-[#454C52] text-[14px] font-inter font-normal leading-5 mb-2">
//               Confirm Password
//             </h2>
//             <input
//               type="text"
//               placeholder="Confirm new password"
//               value={confirmPassword}
//               onChange={(e) => {
//                 setConfirmPassword(e.target.value);
//                 if (newPassword && e.target.value === newPassword) {
//                   setPasswordError("");
//                 }
//               }}
//               className={`${inputBaseClass} shadow-custom ${
//                 passwordError ? errorInputClass : "shadow-custom"
//               }`}
//               required
//             />

//             {passwordError && (
//               <p className="text-[#F34141] text-[14px] font-inter font-normal leading-[20px] mt-2">
//                 {passwordError}
//               </p>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#829C15] text-white py-[10px] px-[18px] rounded-lg font-medium my-6 shadow-sm"
//           >
//             Reset password
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Newpassword;

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
