import Sidebar from "./component/ltsidebar";
import OverviewPage from "./component/ltoverview";
import ReportForm from "./component/reportform";
import { useState } from "react";

const DashboardLayout = () => {
  const [activeNav, setActiveNav] = useState("overview");

  const renderContent = () => {
    switch (activeNav) {
      case "overview":
        return <OverviewPage setActiveNav={setActiveNav} />;
      case "reportform":
        return <ReportForm />;
      default:
        return <OverviewPage setActiveNav={setActiveNav} />;
    }
  };

  return (
    <div className="flex justify-between items-start bg-white overflow-hidden">
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />
      <div className="flex-1 px-4 py-6">{renderContent()}</div>
    </div>
  );
};

export default DashboardLayout;
