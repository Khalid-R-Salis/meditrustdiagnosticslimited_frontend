import { useState } from "react";
import Sidebar from "./component/ltsidebar";
import OverviewPage from "./component/ltoverview";
import ReportForm from "../../components/patientreports";
import ResultForm from "./component/resultform";

const DashboardLayout = () => {
  const [activeNav, setActiveNav] = useState("overview");
  const [showResultTemplate, setShowResultTemplate] = useState(false);

  const renderContent = () => {
    switch (activeNav) {
      case "overview":
        return (
          <OverviewPage
            setActiveNav={setActiveNav}
            setShowResultTemplate={setShowResultTemplate}
          />
        );
      case "reportform":
        return <ReportForm />;
      case "resultform":
        return <ResultForm />;
      default:
        return <OverviewPage setActiveNav={setActiveNav} />;
    }
  };

  return (
    <div className="flex justify-between items-start bg-white overflow-hidden">
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

      <div className="flex-1 px-4 py-6 relative">{renderContent()}</div>

      {/* Result modal */}
      {showResultTemplate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-hidden">
          <div className="mt-10 bg-white p-6 rounded-lg shadow-lg relative scale-[1.5] sm:scale-[1.8]">
            <button
              className="absolute top-2 right-2 text-gray-600 text-sm"
              onClick={() => setShowResultTemplate(false)}
            >
              ✕
            </button>
            <ResultTemplate />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
