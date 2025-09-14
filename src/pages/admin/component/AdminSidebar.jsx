import { useNavigate } from "react-router-dom";
import React from "react";
import logo2 from "../../../assets/logo2.png";
import Settings from "../../../components/settings";

// ICONS

const OverviewIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
  >
    <path
      d="M6.12602 13C6.57006 14.7252 8.13616 16 10 16C11.8638 16 13.4299 14.7252 13.874 13M9.0177 1.764L2.23539 7.03912C1.78202 7.39175 1.55534 7.56806 1.39203 7.78886C1.24737 7.98444 1.1396 8.20478 1.07403 8.43905C1 8.70352 1 8.9907 1 9.56505V16.8C1 17.9201 1 18.4801 1.21799 18.908C1.40973 19.2843 1.71569 19.5903 2.09202 19.782C2.51984 20 3.07989 20 4.2 20H15.8C16.9201 20 17.4802 20 17.908 19.782C18.2843 19.5903 18.5903 19.2843 18.782 18.908C19 18.4801 19 17.9201 19 16.8V9.56505C19 8.9907 19 8.70352 18.926 8.43905C18.8604 8.20478 18.7526 7.98444 18.608 7.78886C18.4447 7.56806 18.218 7.39175 17.7646 7.03913L10.9823 1.764C10.631 1.49075 10.4553 1.35412 10.2613 1.3016C10.0902 1.25526 9.9098 1.25526 9.73865 1.3016C9.54468 1.35412 9.36902 1.49075 9.0177 1.764Z"
      stroke="#383F45"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ReportIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M21 12L9 12M21 6L9 6M21 18L9 18M5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12ZM5 6C5 6.55228 4.55228 7 4 7C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5C4.55228 5 5 5.44772 5 6ZM5 18C5 18.5523 4.55228 19 4 19C3.44772 19 3 18.5523 3 18C3 17.4477 3.44772 17 4 17C4.55228 17 5 17.4477 5 18Z"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PricingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      opacity="0.12"
      d="M2.93726 11.9373C2.59135 11.5914 2.4184 11.4184 2.29472 11.2166C2.18506 11.0376 2.10425 10.8425 2.05526 10.6385C2 10.4083 2 10.1637 2 9.67451L2 5.2C2 4.07989 2 3.51984 2.21799 3.09202C2.40973 2.7157 2.7157 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2L9.67452 2C10.1637 2 10.4083 2 10.6385 2.05526C10.8425 2.10425 11.0376 2.18506 11.2166 2.29472C11.4184 2.4184 11.5914 2.59135 11.9373 2.93726L19.6059 10.6059C20.7939 11.7939 21.388 12.388 21.6105 13.0729C21.8063 13.6755 21.8063 14.3245 21.6105 14.927C21.388 15.612 20.7939 16.2061 19.6059 17.3941L17.3941 19.6059C16.2061 20.7939 15.612 21.388 14.927 21.6105C14.3245 21.8063 13.6755 21.8063 13.0729 21.6105C12.388 21.388 11.7939 20.7939 10.6059 19.6059L2.93726 11.9373Z"
      fill="#596066"
    />
    <path
      d="M8 8H8.01M2 5.2L2 9.67451C2 10.1637 2 10.4083 2.05526 10.6385C2.10425 10.8425 2.18506 11.0376 2.29472 11.2166C2.4184 11.4184 2.59135 11.5914 2.93726 11.9373L10.6059 19.6059C11.7939 20.7939 12.388 21.388 13.0729 21.6105C13.6755 21.8063 14.3245 21.8063 14.927 21.6105C15.612 21.388 16.2061 20.7939 17.3941 19.6059L19.6059 17.3941C20.7939 16.2061 21.388 15.612 21.6105 14.927C21.8063 14.3245 21.8063 13.6755 21.6105 13.0729C21.388 12.388 20.7939 11.7939 19.6059 10.6059L11.9373 2.93726C11.5914 2.59135 11.4184 2.4184 11.2166 2.29472C11.0376 2.18506 10.8425 2.10425 10.6385 2.05526C10.4083 2 10.1637 2 9.67452 2L5.2 2C4.0799 2 3.51984 2 3.09202 2.21799C2.7157 2.40973 2.40973 2.71569 2.21799 3.09202C2 3.51984 2 4.07989 2 5.2ZM8.5 8C8.5 8.27614 8.27614 8.5 8 8.5C7.72386 8.5 7.5 8.27614 7.5 8C7.5 7.72386 7.72386 7.5 8 7.5C8.27614 7.5 8.5 7.72386 8.5 8Z"
      stroke="#596066"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      opacity="0.12"
      d="M9.5 12C11.9853 12 14 9.98528 14 7.5C14 5.01472 11.9853 3 9.5 3C7.01472 3 5 5.01472 5 7.5C5 9.98528 7.01472 12 9.5 12Z"
      fill="black"
    />
    <path
      d="M16 3.46776C17.4817 4.20411 18.5 5.73314 18.5 7.5C18.5 9.26686 17.4817 10.7959 16 11.5322M18 16.7664C19.5115 17.4503 20.8725 18.565 22 20M2 20C3.94649 17.5226 6.58918 16 9.5 16C12.4108 16 15.0535 17.5226 17 20M14 7.5C14 9.98528 11.9853 12 9.5 12C7.01472 12 5 9.98528 5 7.5C5 5.01472 7.01472 3 9.5 3C11.9853 3 14 5.01472 14 7.5Z"
      stroke="#383F45"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AdminSidebar = ({ activeNav, setActiveNav, disabled }) => {
  const navigate = useNavigate();

  const baseButtonClass =
    "self-stretch w-full flex items-center gap-2 font-inter text-[16px] font-[400] rounded-[8px] px-[10px] py-[12px] transition-all duration-200";

  const getButtonClass = (isActive) => {
    if (disabled) {
      return `${baseButtonClass} text-gray-400`;
    }
    return isActive
      ? `${baseButtonClass} text-black bg-[#F8FCE9] border border-[#E5E7EA] shadow-[0_2px_6px_0_rgba(211,211,211,0.12)]`
      : `${baseButtonClass} text-[#596066] hover:text-black hover:bg-gray-100 border border-transparent`;
  };

  return (
    <div className="flex flex-col justify-between bg-[#FAFAFA] rounded-[16px] border border-[#E5E7EA] w-[20rem] m-4 pt-[32px] px-[12px] mx-[16px] min-h-[calc(100vh-2rem)] relative">
      <div>
        <div className="ml-6 w-[166px] h-[40px] mb-5">
          <img src={logo2} alt="logo" className="w-36 mb-10" />
        </div>

        <nav className="flex flex-col justify-center items-start gap-2">
          {/* Overview */}
          <button
            className={getButtonClass(activeNav === "AdminOverview")}
            onClick={() => !disabled && setActiveNav("AdminOverview")}
            disabled={disabled}
          >
            <OverviewIcon />
            <h2>Overview</h2>
          </button>

          {/* Patient Reports */}
          <button
            className={getButtonClass(activeNav === "PatientReports")}
            onClick={() => !disabled && setActiveNav("PatientReports")}
            disabled={disabled}
          >
            <ReportIcon />
            <h2>Patient reports</h2>
          </button>

          {/* Pricing */}
          <button
            className={getButtonClass(activeNav === "Pricing")}
            onClick={() => !disabled && setActiveNav("Pricing")}
            disabled={disabled}
          >
            <PricingIcon />
            <h2>Pricing</h2>
          </button>

          {/* User Management */}
          <button
            className={getButtonClass(activeNav === "UserManagement")}
            onClick={() => !disabled && setActiveNav("UserManagement")}
            disabled={disabled}
          >
            <UserIcon />
            <h2>User Management</h2>
          </button>
        </nav>
      </div>

      {/* Settings */}
      <div className={disabled ? "pointer-events-none opacity-50" : ""}>
        <Settings />
      </div>
    </div>
  );
};

export default AdminSidebar;
