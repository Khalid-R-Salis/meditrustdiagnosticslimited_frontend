import Sidebar from "./component/sidebar";
import OverviewPage from "./component/overview";
import Consultations from "./component/consultations";
import ConsultationForm from "./component/consultationform";
import React, { useState, useEffect } from "react";

const DashboardLayout = () => {
  const [activeNav, setActiveNav] = useState("overview");
  const [sidebarDisabled, setSidebarDisabled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [deviceType, setDeviceType] = useState("mobile");

  useEffect(() => {
    const checkDeviceType = () => {
      const widthPx = window.screen.width;
      const heightPx = window.screen.height;
      const dpi = 96 * window.devicePixelRatio;
      const widthMm = (widthPx / dpi) * 25.4;
      const heightMm = (heightPx / dpi) * 25.4;

      let type = "mobile";

      if (widthMm >= 260 && heightMm >= 170) {
        type = "desktop";
      } else if (widthMm <= 100) {
        type = "mobile";
      } else {
        type = "tablet";
      }

      setDeviceType(type);
    };

    checkDeviceType();
    window.addEventListener("resize", checkDeviceType);
    return () => window.removeEventListener("resize", checkDeviceType);
  }, []);

  const renderContent = () => {
    switch (activeNav) {
      case "overview":
        return (
          <OverviewPage
            setActiveNav={setActiveNav}
            setSidebarOpen={setSidebarOpen}
            deviceType={deviceType}
          />
        );
      case "consultations":
        return (
          <Consultations
            setSidebarOpen={setSidebarOpen}
            deviceType={deviceType}
          />
        );
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
        return (
          <OverviewPage
            setActiveNav={setActiveNav}
            setSidebarOpen={setSidebarOpen}
            deviceType={deviceType}
          />
        );
    }
  };

  return (
    <div className="flex bg-white">
      {deviceType === "desktop" && (
        <Sidebar
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          sidebarDisabled={sidebarDisabled}
        />
      )}

      {sidebarOpen && (deviceType === "mobile" || deviceType === "tablet") && (
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

      <div className="flex-1 px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-24 py-2 md:py-6 overflow-x-auto overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default DashboardLayout;
