import React, { useState } from "react";
import bg1 from "../../assets/bg1.png";
import logo2 from "../../assets/logo2.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState("Receptionist");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getDashboardText = (type) => {
    switch (type) {
      case "Admin":
        return "Sign in with your assigned credentials to access the MediTrust Admin Dashboard.";
      case "Lab Technician":
        return "Sign in with your assigned credentials to access the MediTrust Lab Technician Dashboard.";
      default:
        return "Sign in with your assigned credentials to access the MediTrust Reception Dashboard.";
    }
  };

  // All user types for switching
  const userTypes = ["Receptionist", "Admin", "Lab Technician"];
  const otherUserTypes = userTypes.filter((type) => type !== userType);

  // Clear form fields
  const clearForm = () => {
    setEmail("");
    setPassword("");
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    clearForm();
    //  submit logic
  };

  // Handle user type switch
  const handleUserTypeSwitch = (type) => {
    setUserType(type);
    clearForm();
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex flex-col items-center justify-center min-h-screen gap-[8px] bg-[#f9f9f9]"
    >
      <div
        className="absolute top-0 left-0 w-full flex items-center"
        style={{
          borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
          height: "64px",
        }}
      >
        <a href="/">
          {" "}
          <img
            src={logo2}
            alt="Logo"
            className="h-[40px] w-[166px] ml-[140px] mt-6 mb-6"
          />
        </a>
      </div>

      {/* Login Box */}
      <div className="bg-[#FFF] p-[40px] rounded-[24px] shadow-md w-[440px]">
        <div className="mb-[32px]">
          <h1 className="text-black font-[inter] text-[20px] font-semibold leading-[30px]">
            {/* {userType} Login */}
            Welcome Back
          </h1>
          <p className="text-[#383F45] text-[14px] leading-[20px] font-normal font-[inter] mt-1">
            {getDashboardText(userType)}
          </p>
        </div>

        {/* Inputs */}
        <div className="forinput">
          <div className="mb-4">
            <h2 className="text-[#454C52] text-[14px] font-[inter] font-normal leading-5 mb-2">
              Email
            </h2>
            <input
              type="email"
              placeholder="you@gmail.com"
              className="w-full rounded-[8px] bg-white shadow-custom px-[14px] py-[10px] mb-4 focus:outline-none"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative mb-2">
            <h2 className="text-[#454C52] text-[14px] font-[inter] font-normal leading-5 mb-2">
              Password
            </h2>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full rounded-[8px] bg-white shadow-custom px-[14px] py-[10px] pr-[40px] focus:outline-none"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-6 top-[70%] translate-y-[-50%] cursor-pointer"
              aria-label="Toggle password visibility"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a17.58 17.58 0 0 1 5.29-5.29" />
                  <path d="M1 1l22 22" />
                  <path d="M9.53 9.53A3 3 0 0 0 12 15a3 3 0 0 0 2.47-5.47" />
                  <path d="M21 21a17.58 17.58 0 0 0-5.29-5.29" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <a
          href="/emailreset"
          className="text-sm text-[#829C15] font-[inter] text-[12px] font-medium leading-[18px] mb-4"
        >
          Forgot password?
        </a>

        <button className="w-full bg-[#829C15] text-white py-[10px] px-[18px] rounded-lg font-medium my-6 shadow-sm">
          Sign in
        </button>

        <p className="text-[12px] text-[#383F45] font-[500px] text-left font-inter leading-[28px]">
          Need help?{" "}
          <span className="text-[12px] text-[#829C15] font-[500px] cursor-pointer">
            <a href="/contactadmin">Contact administrator</a>
          </span>
        </p>
      </div>

      {/* Bottom Links (Only show other roles) */}
      <div className="flex justify-between gap-5 items-center">
        <div className="flex justify-between items-center bg-white p-[20px] rounded-[32px] shadow-sm w-[440px]">
          {otherUserTypes.map((type) => (
            <div
              key={type}
              className="flex items-center content-center gap-2 cursor-pointer"
              onClick={() => handleUserTypeSwitch(type)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  opacity="0.12"
                  d="M2.5 6.00016C2.5 5.06674 2.5 4.60003 2.68166 4.24351C2.84144 3.92991 3.09641 3.67494 3.41002 3.51515C3.76654 3.3335 4.23325 3.3335 5.16667 3.3335H14.8333C15.7668 3.3335 16.2335 3.3335 16.59 3.51515C16.9036 3.67494 17.1586 3.92991 17.3183 4.24351C17.5 4.60003 17.5 5.06674 17.5 6.00016V13.3335H13.0523C12.8485 13.3335 12.7465 13.3335 12.6506 13.3565C12.5656 13.3769 12.4843 13.4106 12.4098 13.4563C12.3257 13.5078 12.2536 13.5799 12.1095 13.724L12.0572 13.7763C11.9131 13.9204 11.841 13.9925 11.7569 14.044C11.6823 14.0897 11.6011 14.1234 11.516 14.1438C11.4201 14.1668 11.3182 14.1668 11.1144 14.1668H8.88562C8.68179 14.1668 8.57988 14.1668 8.48397 14.1438C8.39894 14.1234 8.31766 14.0897 8.2431 14.044C8.159 13.9925 8.08694 13.9204 7.94281 13.7763L7.89052 13.724C7.7464 13.5799 7.67433 13.5078 7.59024 13.4563C7.51568 13.4106 7.43439 13.3769 7.34936 13.3565C7.25345 13.3335 7.15154 13.3335 6.94772 13.3335H2.5V6.00016Z"
                  fill="#383F45"
                />
                <path
                  d="M2.50002 13.3335V6.00016C2.50002 5.06674 2.50002 4.60003 2.68168 4.24351C2.84147 3.92991 3.09643 3.67494 3.41004 3.51515C3.76656 3.3335 4.23327 3.3335 5.16669 3.3335H14.8334C15.7668 3.3335 16.2335 3.3335 16.59 3.51515C16.9036 3.67494 17.1586 3.92991 17.3184 4.24351C17.5 4.60003 17.5 5.06674 17.5 6.00016V13.3335H13.0523C12.8485 13.3335 12.7466 13.3335 12.6507 13.3565C12.5656 13.3769 12.4843 13.4106 12.4098 13.4563C12.3257 13.5078 12.2536 13.5799 12.1095 13.724L12.0572 13.7763C11.9131 13.9204 11.841 13.9925 11.7569 14.044C11.6824 14.0897 11.6011 14.1234 11.516 14.1438C11.4201 14.1668 11.3182 14.1668 11.1144 14.1668H8.88564C8.68181 14.1668 8.5799 14.1668 8.48399 14.1438C8.39896 14.1234 8.31768 14.0897 8.24312 14.044C8.15902 13.9925 8.08696 13.9204 7.94283 13.7763L7.89054 13.724C7.74642 13.5799 7.67436 13.5078 7.59026 13.4563C7.5157 13.4106 7.43441 13.3769 7.34938 13.3565C7.25347 13.3335 7.15156 13.3335 6.94774 13.3335H2.50002ZM2.50002 13.3335C2.03978 13.3335 1.66669 13.7066 1.66669 14.1668V14.4446C1.66669 14.9613 1.66669 15.2196 1.72348 15.4315C1.87759 16.0067 2.32684 16.4559 2.90199 16.61C3.11393 16.6668 3.37226 16.6668 3.88891 16.6668H16.1111C16.6278 16.6668 16.8861 16.6668 17.0981 16.61C17.6732 16.4559 18.1225 16.0067 18.2766 15.4315C18.3334 15.2196 18.3334 14.9613 18.3334 14.4446C18.3334 14.1863 18.3334 14.0571 18.305 13.9511C18.2279 13.6636 18.0033 13.4389 17.7157 13.3619C17.6097 13.3335 17.4806 13.3335 17.2222 13.3335H16.6667"
                  stroke="#383F45"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm font-inter text-[#383F45] text-[15px] font-[500] leading-5 hover:text-[#829C15]">
                {type} login
              </span>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};

export default Login;
