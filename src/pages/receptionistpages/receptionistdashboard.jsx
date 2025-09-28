import Sidebar from "./component/sidebar";
import OverviewPage from "./component/overview";
import Consultations from "./component/consultations";
import ConsultationForm from "./component/consultationform";
import { useState } from "react";

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

const CancelIcon = () => (
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
);

const DashboardLayout = () => {
  const [activeNav, setActiveNav] = useState("overview");
  const [sidebarDisabled, setSidebarDisabled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeNav) {
      case "overview":
        return <OverviewPage setActiveNav={setActiveNav} />;
      case "consultations":
        return <Consultations />;
      case "new-consultation":
        return (
          <ConsultationForm
            onClose={() => setActiveNav("overview")}
            onConfirm={(formData) => {
              console.log("Confirmed consultation:", formData);
              setActiveNav("overview");
            }}
            setSidebarDisabled={setSidebarDisabled}
          />
        );
      default:
        return <OverviewPage setActiveNav={setActiveNav} />;
    }
  };

  return (
    <div className="flex bg-white">
      {/* Hamburger toggle for tablet & mobile */}
      <div className="lg:hidden fixed top-[29px] left-5 z-30">
        <button
          onClick={() => setSidebarOpen(true)}
          className="flex p-2 justify-center items-center rounded-lg border border-gray-300 bg-white shadow"
        >
          <HamburgerIcon />
        </button>
      </div>

      {/* Sidebar (desktop) */}
      <div className="hidden lg:block">
        <Sidebar
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          sidebarDisabled={sidebarDisabled}
          // no onClose for desktop
        />
      </div>

      {/* Sidebar (mobile/tablet overlay) */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div
            className="absolute inset-0 bg-black bg-opacity-40"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="relative z-50">
            <Sidebar
              activeNav={activeNav}
              setActiveNav={(nav) => {
                setActiveNav(nav);
                setSidebarOpen(false);
              }}
              sidebarDisabled={sidebarDisabled}
              onClose={() => setSidebarOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-24 py-2 md:py-6 overflow-x-auto overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default DashboardLayout;
