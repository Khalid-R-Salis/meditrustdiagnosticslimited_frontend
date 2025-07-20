import React, { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-[8px] bg-[#f9f9f9]">
      {/* Login Box */}
      <div className="bg-white p-[40px] rounded-2xl shadow-md w-[440px]">
        <div className="mb-[32px]">
          <h1 className="text-black font-[inter] text-[20px] font-semibold leading-[30px]">
            Welcome Back
          </h1>
          <p className="text-[#383F45] text-[14px] leading-[20px] font-normal font-[inter] mt-1">
            Sign in with your assigned credentials to access the MediTrust
            Reception Dashboard.
          </p>
        </div>

        {/* Inputs */}
        <div className="forinput">
          {/* Email Input */}
          <div className="mb-4">
            <h2 className="text-[#454C52] text-[14px] font-[inter] font-normal leading-5 mb-2">
              Email
            </h2>
            <input
              type="email"
              placeholder="aisha@gmail.com"
              className="w-full rounded-[8px] bg-white shadow-custom px-[14px] py-[10px] mb-4 focus:outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="relative mb-2">
            <h2 className="text-[#454C52] text-[14px] font-[inter] font-normal leading-5 mb-2">
              Password
            </h2>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full rounded-[8px] bg-white shadow-custom px-[14px] py-[10px] pr-[40px] focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-6 top-[70%] translate-y-[-50%] cursor-pointer"
              aria-label="Toggle password visibility"
            >
              {showPassword ? (
                // Eye open icon
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
                // Eye off icon
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
          href="#"
          className="text-sm text-[#829C15] font-[inter] text-[12px] font-medium leading-[18px] mb-4"
        >
          {" "}
          Forgot password?
        </a>

        <button className="w-full bg-[#829C15] text-white py-[10px] px-[18px] rounded-lg font-medium my-6 shadow-sm">
          Sign in
        </button>

        <p className="text-[12px] text-[#383F45] font-[500px] text-left font-inter leading-[28px]">
          Need help?{" "}
          <span className="text-[12px] text-[#829C15] font-[500px] cursor-pointer">
            Contact administrator
          </span>
        </p>
      </div>

      {/* Bottom Links */}
      <div className="flex justify-between gap-5 items-center">
        <div className="flex justify-between items-center bg-white p-[20px] rounded-[32px] shadow-sm w-[440px] ">
          <div className="flex items-center content-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                opacity="0.12"
                d="M13 3.83333C13 3.36662 13 3.13327 12.9092 2.95501C12.8293 2.79821 12.7018 2.67072 12.545 2.59083C12.3667 2.5 12.1334 2.5 11.6667 2.5H9.33333C8.86662 2.5 8.63327 2.5 8.45501 2.59083C8.29821 2.67072 8.17072 2.79821 8.09083 2.95501C8 3.13327 8 3.36662 8 3.83333V6.16667C8 6.63338 8 6.86673 7.90917 7.04499C7.82928 7.20179 7.70179 7.32928 7.54499 7.40917C7.36673 7.5 7.13338 7.5 6.66667 7.5H4.33333C3.86662 7.5 3.63327 7.5 3.45501 7.59083C3.29821 7.67072 3.17072 7.79821 3.09083 7.95501C3 8.13327 3 8.36662 3 8.83333V11.1667C3 11.6334 3 11.8667 3.09083 12.045C3.17072 12.2018 3.29821 12.3293 3.45501 12.4092C3.63327 12.5 3.86662 12.5 4.33333 12.5H6.66667C7.13338 12.5 7.36673 12.5 7.54499 12.5908C7.70179 12.6707 7.82928 12.7982 7.90917 12.955C8 13.1333 8 13.3666 8 13.8333V16.1667C8 16.6334 8 16.8667 8.09083 17.045C8.17072 17.2018 8.29821 17.3293 8.45501 17.4092C8.63327 17.5 8.86662 17.5 9.33333 17.5H11.6667C12.1334 17.5 12.3667 17.5 12.545 17.4092C12.7018 17.3293 12.8293 17.2018 12.9092 17.045C13 16.8667 13 16.6334 13 16.1667V13.8333C13 13.3666 13 13.1333 13.0908 12.955C13.1707 12.7982 13.2982 12.6707 13.455 12.5908C13.6333 12.5 13.8666 12.5 14.3333 12.5H16.6667C17.1334 12.5 17.3667 12.5 17.545 12.4092C17.7018 12.3293 17.8293 12.2018 17.9092 12.045C18 11.8667 18 11.6334 18 11.1667V8.83333C18 8.36662 18 8.13327 17.9092 7.95501C17.8293 7.79821 17.7018 7.67072 17.545 7.59083C17.3667 7.5 17.1334 7.5 16.6667 7.5L14.3333 7.5C13.8666 7.5 13.6333 7.5 13.455 7.40917C13.2982 7.32928 13.1707 7.20179 13.0908 7.04499C13 6.86673 13 6.63338 13 6.16667V3.83333Z"
                fill="#383F45"
              />
              <path
                d="M13 3.83333C13 3.36662 13 3.13327 12.9092 2.95501C12.8293 2.79821 12.7018 2.67072 12.545 2.59083C12.3667 2.5 12.1334 2.5 11.6667 2.5H9.33333C8.86662 2.5 8.63327 2.5 8.45501 2.59083C8.29821 2.67072 8.17072 2.79821 8.09083 2.95501C8 3.13327 8 3.36662 8 3.83333V6.16667C8 6.63338 8 6.86673 7.90917 7.04499C7.82928 7.20179 7.70179 7.32928 7.54499 7.40917C7.36673 7.5 7.13338 7.5 6.66667 7.5H4.33333C3.86662 7.5 3.63327 7.5 3.45501 7.59083C3.29821 7.67072 3.17072 7.79821 3.09083 7.95501C3 8.13327 3 8.36662 3 8.83333V11.1667C3 11.6334 3 11.8667 3.09083 12.045C3.17072 12.2018 3.29821 12.3293 3.45501 12.4092C3.63327 12.5 3.86662 12.5 4.33333 12.5H6.66667C7.13338 12.5 7.36673 12.5 7.54499 12.5908C7.70179 12.6707 7.82928 12.7982 7.90917 12.955C8 13.1333 8 13.3666 8 13.8333V16.1667C8 16.6334 8 16.8667 8.09083 17.045C8.17072 17.2018 8.29821 17.3293 8.45501 17.4092C8.63327 17.5 8.86662 17.5 9.33333 17.5H11.6667C12.1334 17.5 12.3667 17.5 12.545 17.4092C12.7018 17.3293 12.8293 17.2018 12.9092 17.045C13 16.8667 13 16.6334 13 16.1667V13.8333C13 13.3666 13 13.1333 13.0908 12.955C13.1707 12.7982 13.2982 12.6707 13.455 12.5908C13.6333 12.5 13.8666 12.5 14.3333 12.5H16.6667C17.1334 12.5 17.3667 12.5 17.545 12.4092C17.7018 12.3293 17.8293 12.2018 17.9092 12.045C18 11.8667 18 11.6334 18 11.1667V8.83333C18 8.36662 18 8.13327 17.9092 7.95501C17.8293 7.79821 17.7018 7.67072 17.545 7.59083C17.3667 7.5 17.1334 7.5 16.6667 7.5L14.3333 7.5C13.8666 7.5 13.6333 7.5 13.455 7.40917C13.2982 7.32928 13.1707 7.20179 13.0908 7.04499C13 6.86673 13 6.63338 13 6.16667V3.83333Z"
                stroke="#383F45"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <a
              href="#"
              className="text-sm font-inter text-[#383F45] text-[14px] font-[400] leading-5 no-underline hover:no-underline hover:text-[#829C15] "
            >
              Lab technician login
            </a>
          </div>

          <div className="flex items-center content-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
            </svg>

            <a
              href="#"
              className="text-sm font-inter text-[#383F45] text-[14px] font-[400] leading-5 no-underline hover:no-underline hover:text-[#829C15] "
            >
              Admin login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
