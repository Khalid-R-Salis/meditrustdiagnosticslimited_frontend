import React, { useState } from "react";

const OverviewIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      opacity="0.12"
      d="M3 10.5651C3 9.9907 3 9.70352 3.07403 9.43905C3.1396 9.20478 3.24737 8.98444 3.39203 8.78886C3.55534 8.56806 3.78202 8.39175 4.23539 8.03912L11.0177 2.764C11.369 2.49075 11.5447 2.35412 11.7387 2.3016C11.9098 2.25526 12.0902 2.25526 12.2613 2.3016C12.4553 2.35412 12.631 2.49075 12.9823 2.764L19.7646 8.03913C20.218 8.39175 20.4447 8.56806 20.608 8.78886C20.7526 8.98444 20.8604 9.20478 20.926 9.43905C21 9.70352 21 9.9907 21 10.5651V17.8C21 18.9201 21 19.4801 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H6.2C5.0799 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4801 3 18.9201 3 17.8V10.5651Z"
      fill="#383F45"
    />
    <path
      d="M8.12602 14C8.57006 15.7252 10.1362 17 12 17C13.8638 17 15.4299 15.7252 15.874 14M11.0177 2.76401L4.23539 8.03914C3.78202 8.39176 3.55534 8.56807 3.39203 8.78887C3.24737 8.98446 3.1396 9.2048 3.07403 9.43907C3 9.70353 3 9.99071 3 10.5651V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V10.5651C21 9.99071 21 9.70353 20.926 9.43907C20.8604 9.2048 20.7526 8.98446 20.608 8.78887C20.4447 8.56807 20.218 8.39176 19.7646 8.03914L12.9823 2.76401C12.631 2.49076 12.4553 2.35413 12.2613 2.30162C12.0902 2.25528 11.9098 2.25528 11.7387 2.30162C11.5447 2.35413 11.369 2.49076 11.0177 2.76401Z"
      stroke="#383F45"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ConsultationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M21 12L9 12M21 6L9 6M21 18L9 18M5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12ZM5 6C5 6.55228 4.55228 7 4 7C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5C4.55228 5 5 5.44772 5 6ZM5 18C5 18.5523 4.55228 19 4 19C3.44772 19 3 18.5523 3 18C3 17.4477 3.44772 17 4 17C4.55228 17 5 17.4477 5 18Z"
      stroke="#383F45"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DotsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M6.75 12C6.75 12.4142 6.41421 12.75 6 12.75C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25C6.41421 11.25 6.75 11.5858 6.75 12Z"
      stroke="#596066"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.75 12C12.75 12.4142 12.4142 12.75 12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25C12.4142 11.25 12.75 11.5858 12.75 12Z"
      stroke="#596066"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.75 12C18.75 12.4142 18.4142 12.75 18 12.75C17.5858 12.75 17.25 12.4142 17.25 12C17.25 11.5858 17.5858 11.25 18 11.25C18.4142 11.25 18.75 11.5858 18.75 12Z"
      stroke="#596066"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Sidebar = ({ onLogout, onUpdatePassword }) => {
  const [activeNav, setActiveNav] = useState("overview");

  const handleSettingsClick = () => {
    window.location.href = "/settings";
  };

  return (
    <>
      <div className="flex flex-col justify-between bg-[#FAFAFA] rounded-[16px] border border-[#E5E7EA] w-[20rem] m-4 pt-[32px] px-[12px] min-h-[calc(100vh-2rem)]">
        <div>
          <div className="ml-6 w-[166px] h-[40px] mb-5">
            <img
              src="/src/assets/logo2.png"
              alt="logo"
              className="w-36 mb-10"
            />
          </div>
          <nav className="flex flex-col justify-center items-start gap-2">
            <button
              className={`self-stretch w-full flex items-center gap-2 font-inter text-[16px] font-[400] rounded-[8px] px-[10px] py-[12px] transition-all duration-200
                ${
                  activeNav === "overview"
                    ? "text-black bg-[#F8FCE9] border border-[#E5E7EA] shadow-[0_2px_6px_0_rgba(211,211,211,0.12)]"
                    : "text-[#596066] hover:text-black hover:bg-gray-100 border border-transparent"
                }`}
              onClick={() => setActiveNav("overview")}
            >
              <OverviewIcon />
              <h2>Overview</h2>
            </button>

            <button
              className={`self-stretch w-full flex items-center gap-2 font-inter text-[16px] font-[400] rounded-[8px] px-[10px] py-[12px] transition-all duration-200
                ${
                  activeNav === "consultations"
                    ? "text-black bg-[#F8FCE9] border border-[#E5E7EA] shadow-[0_2px_6px_0_rgba(211,211,211,0.12)]"
                    : "text-[#596066] hover:text-black hover:bg-gray-100 border border-transparent"
                }`}
              onClick={() => setActiveNav("consultations")}
            >
              <ConsultationIcon />
              <h2>Consultations</h2>
            </button>
          </nav>
        </div>

        <div className="flex flex-col justify-center items-start self-stretch p-[12px] rounded-[8px] border border-[#CED2D6] bg-white mb-6">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-5 min-w-0 w-full">
              <span
                className="flex-1 min-w-0 truncate text-[#596066] text-[16px] sm:text-[15px] font-inter font-[400] leading-[24px] text-left cursor-default"
                title="Nwankwo paschal"
                // the advantage of the title attribute is that it shows the full name on hover
              >
                Nwankwo paschal
              </span>
              <button
                type="button"
                className="p-1 rounded hover:bg-gray-100 transition"
                onClick={handleSettingsClick}
              >
                <span title="Click to open settings" role="button" tabIndex={0}>
                  <DotsIcon />
                </span>
              </button>
            </div>
          </div>
          <span
            className="text-[#9EA5AD] text-[14px] font-inter font-[400] leading-[20px] truncate w-full text-left cursor-default"
            title="nwakwopaschal017@gmail.com"
            // the advantage of the title attribute is that it shows the full email on hover
          >
            nwakwopaschalkwak017@gmail.com
          </span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
