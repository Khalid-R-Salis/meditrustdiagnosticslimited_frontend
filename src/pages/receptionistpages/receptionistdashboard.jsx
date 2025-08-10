import Sidebar from "./component/sidebar";
import OverviewPage from "./component/overview";
import Consultations from "./component/consultations";
import ConsultationForm from "./component/consultationform";
import { useState } from "react";

const DashboardLayout = () => {
  const [activeNav, setActiveNav] = useState("overview");

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
          />
        );
      default:
        return <OverviewPage setActiveNav={setActiveNav} />;
    }
  };

  return (
    <div className="flex justify-between items-start bg-white">
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />
      <div className="flex-1 px-4 py-6">{renderContent()}</div>
    </div>
  );
};

export default DashboardLayout;
