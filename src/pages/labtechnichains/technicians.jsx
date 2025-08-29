import { useState } from "react";
import Sidebar from "./component/ltsidebar";
import OverviewPage from "./component/ltoverview";
import TestResult from "../../components/testresult";
import ResultForm from "./component/resultform";
import PatientReport from "./component/patientreport";

const DashboardLayout = () => {
  const [activeNav, setActiveNav] = useState("overview");
  const [showResultTemplate, setShowResultTemplate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploading test result...");
    onClose();
  };

  const renderContent = () => {
    switch (activeNav) {
      case "overview":
        return (
          <OverviewPage
            setActiveNav={setActiveNav}
            setShowResultTemplate={setShowResultTemplate}
          />
        );
      case "patientreport":
        return <PatientReport setActiveNav={setActiveNav} />;

      case "testresult":
        // return <TestResult />;
        return <TestResult onClose={() => setShowResultTemplate(false)} />;

      case "resultform":
        return <ResultForm setActiveNav={setActiveNav} />;
      default:
        return <OverviewPage setActiveNav={setActiveNav} />;
    }
  };

  return (
    <div className="flex justify-between items-start bg-white overflow-hidden">
      <Sidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        disableNav={activeNav === "resultform"}
      />

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
            <ReportForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
