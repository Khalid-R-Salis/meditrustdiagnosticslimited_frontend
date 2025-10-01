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

const ComplaintIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"
    width="24"
    height="24"
    fill="none"
  >
    <path
      d="M280 88C280 57.1 254.9 32 224 32C193.1 32 168 57.1 168 88C168 118.9 193.1 144 224 144C254.9 144 280 118.9 280 88zM304 300.7L341 350.6C353.8 333.1 369.5 317.9 387.3 305.6L331.1 229.9C306 196 266.3 176 224 176C181.7 176 142 196 116.8 229.9L46.3 324.9C35.8 339.1 38.7 359.1 52.9 369.7C67.1 380.3 87.1 377.3 97.7 363.1L144 300.7L144 576C144 593.7 158.3 608 176 608C193.7 608 208 593.7 208 576L208 416C208 407.2 215.2 400 224 400C232.8 400 240 407.2 240 416L240 576C240 593.7 254.3 608 272 608C289.7 608 304 593.7 304 576L304 300.7zM496 608C575.5 608 640 543.5 640 464C640 384.5 575.5 320 496 320C416.5 320 352 384.5 352 464C352 543.5 416.5 608 496 608zM496 508C507 508 516 517 516 528C516 539 507 548 496 548C485 548 476 539 476 528C476 517 485 508 496 508zM496 368C504.8 368 512 375.2 512 384L512 464C512 472.8 504.8 480 496 480C487.2 480 480 472.8 480 464L480 384C480 375.2 487.2 368 496 368z"
      fill="#383F45"
    />
  </svg>
);

const AdminSidebar = ({
  activeNav,
  setActiveNav,
  disabled,
  showCancel,
  onCancel,
}) => {
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
    <div className="p-4 h-[100dvh]  md:h-[100dvh]">
      <div
        className="
      flex flex-col justify-between 
      bg-[#FAFAFA] rounded-[16px] border border-[#E5E7EA] 
      w-full md:w-[20rem] 
      h-[calc(100dvh-2rem)] md:h-full 
      overflow-y-auto 
      px-[12px] pt-[32px]
    "
      >
        <div>
          <div className="flex flex-col px-4 mb-5">
            <div className="flex items-center justify-between px-4 mb-5">
              <img src={logo2} alt="logo" className="h-10 object-contain" />
              {showCancel && (
                <button
                  onClick={onCancel}
                  className="md:hidden flex items-center justify-center p-2 ml-3 rounded-lg border border-[#CED2D6] bg-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    width="20"
                    height="20"
                  >
                    <path
                      d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"
                      fill="#596066"
                    />
                  </svg>
                </button>
              )}
            </div>

            <h3 className="mt-3 text-lg font-semibold text-[#383F45]">
              Admin Dashboard
            </h3>
          </div>

          <nav className="flex flex-col justify-center items-start gap-2">
            <button
              className={getButtonClass(activeNav === "AdminOverview")}
              onClick={() => !disabled && setActiveNav("AdminOverview")}
              disabled={disabled}
            >
              <OverviewIcon />
              <h2>Overview</h2>
            </button>

            <button
              className={getButtonClass(activeNav === "PatientReports")}
              onClick={() => !disabled && setActiveNav("PatientReports")}
              disabled={disabled}
            >
              <ReportIcon />
              <h2>Patient reports</h2>
            </button>

            <button
              className={getButtonClass(activeNav === "Pricing")}
              onClick={() => !disabled && setActiveNav("Pricing")}
              disabled={disabled}
            >
              <PricingIcon />
              <h2>Pricing</h2>
            </button>

            <button
              className={getButtonClass(activeNav === "UserManagement")}
              onClick={() => !disabled && setActiveNav("UserManagement")}
              disabled={disabled}
            >
              <UserIcon />
              <h2>User Management</h2>
            </button>

            <button
              className={getButtonClass(activeNav === "Complaints")}
              onClick={() => !disabled && setActiveNav("Complaints")}
              disabled={disabled}
            >
              <ComplaintIcon />
              <h2>Complaints</h2>
            </button>
          </nav>
        </div>

        <div className={disabled ? "pointer-events-none opacity-50" : ""}>
          <Settings />
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
