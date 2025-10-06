import { useState } from "react";
import Sidebar from "./component/ltsidebar";
import OverviewPage from "./component/ltoverview";
import TestResult from "../../components/testresult";
import ResultForm from "./component/resultform";
import PatientReport from "./component/patientreport";

const DashboardLayout = () => {
  const [activeNav, setActiveNav] = useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isNavigationDisabled =
    activeNav === "resultform" || activeNav === "testresult";

  const renderContent = () => {
    switch (activeNav) {
      case "overview":
        return <OverviewPage setActiveNav={setActiveNav} />;
      case "patientreport":
        return <PatientReport setActiveNav={setActiveNav} />;
      case "testresult":
        return <TestResult from="technician" />;
      case "resultform":
        return <ResultForm setActiveNav={setActiveNav} />;
      default:
        return <OverviewPage setActiveNav={setActiveNav} />;
    }
  };

  return (
    <div className="flex bg-white overflow-hidden h-screen relative">
      {/* Sidebar (Desktop) */}
      <div className="hidden md:block w-[20rem] ">
        <Sidebar
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          disableNav={isNavigationDisabled}
        />
      </div>

      {!isNavigationDisabled && (
        <button
          className="absolute top-4 left-4 md:hidden z-40 p-2 rounded-md bg-white border border-gray-300 shadow"
          onClick={() => setIsSidebarOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}

      {isSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-30"
            onClick={() => setIsSidebarOpen(false)}
          ></div>

          {/* Sidebar */}
          <div
            className="fixed top-0 left-0 z-40 h-full
                    w-[90%] max-w-[22rem] md:hidden"
          >
            <Sidebar
              activeNav={activeNav}
              setActiveNav={(nav) => {
                setActiveNav(nav);
                setIsSidebarOpen(false);
              }}
              disableNav={isNavigationDisabled}
              onClose={() => setIsSidebarOpen(false)}
            />
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="flex-1 h-screen overflow-y-auto px-4 py-6 relative scrollbar-thin-green">
        {renderContent()}
      </div>
    </div>
  );
};

export default DashboardLayout;
