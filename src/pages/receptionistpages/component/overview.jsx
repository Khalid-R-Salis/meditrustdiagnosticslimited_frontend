import { useState } from "react";
import Sidebar from "./sidebar";
import HeaderStats from "./headerstats";
import ConsultationForm from "./consultationform";
import RecentPatientsTable from "../component/RecentPatientsTable";

const HamburgerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
    <path
      d="M3 12H21M3 6H21M3 18H21"
      stroke="#596066"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const OverviewPage = ({ setActiveNav, setSidebarOpen, deviceType }) => {
  const [showForm, setShowForm] = useState(false);

  const handleConfirmConsultation = (data) => {
    console.log("Confirmed consultation:", data);
    setShowForm(false);
  };

  return (
    <div
      className={`flex-1 w-full overflow-x-auto overflow-y-auto scrollbar-thin-green ${
        showForm ? "overflow-hidden h-screen" : ""
      }`}
    >
      {/* Main content */}
      <div className="flex-1 bg-[#ffffff] lg:py-5 py-4 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
        {/* Top bar */}
        <div className="flex justify-between items-center mb-10 ">
          <div className="flex items-center gap-3">
            {(deviceType === "mobile" || deviceType === "tablet") && (
              <button
                className="flex p-2 justify-center items-center rounded-lg border border-gray-300 bg-white shadow"
                onClick={() => setSidebarOpen(true)}
              >
                <HamburgerIcon />
              </button>
            )}

            <h1
              className="text-[20px] sm:text-[24px] font-semibold leading-[14px] sm:leading-[32px] text-black font-inter mt-1 lg:mt-0"
              style={{
                color: "var(--Primary-Black, #000)",
                fontFamily: "Inter",
                fontStyle: "normal",
              }}
            >
              Overview
            </h1>
          </div>

          <button
            className="text-white text-center font-medium text-[10px] sm:text-[14px] leading-[16px] sm:leading-[20px] font-inter
    flex items-center justify-center gap-2
    px-3 py-[6px] rounded-[8px]
    bg-[#829C15] shadow-[inset_1px_1px_2px_1px_rgba(255,255,255,0.18),inset_-1px_-1px_2px_1px_rgba(255,255,255,0.18)]
    hover:bg-[#6f8612]"
            onClick={() => setActiveNav("new-consultation")}
          >
            + New Consultation
          </button>
        </div>

        <HeaderStats />

        <div className="flex-1 w-full overflow-x-hidden">
          <RecentPatientsTable setActiveNav={setActiveNav} />
        </div>
      </div>

      {/* Modal Form */}
      {showForm && (
        <ConsultationForm
          onClose={() => setShowForm(false)}
          onConfirm={handleConfirmConsultation}
        />
      )}
    </div>
  );
};

export default OverviewPage;
