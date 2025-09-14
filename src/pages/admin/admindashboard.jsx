import React, { useState } from "react";
import AdminSidebar from "../admin/component/AdminSidebar";
import AdminOverview from "../admin/component/AdminOverview";
import PatientReports from "../admin/component/PatientReports ";
import Pricing from "../admin/component/Pricing ";
import UserManagement from "../admin/component/UserManagement";
import AddTest from "../admin/component/AddTest";

const AdminDashboard = () => {
  const [activeNav, setActiveNav] = useState("AdminOverview");

  return (
    <div className="flex">
      <AdminSidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        disabled={activeNav === "AddTest"}
      />

      <div className="flex-1 p-6">
        {activeNav === "AdminOverview" && (
          <AdminOverview setActiveNav={setActiveNav} />
        )}
        {activeNav === "PatientReports" && <PatientReports />}
        {activeNav === "Pricing" && <Pricing setActiveNav={setActiveNav} />}
        {activeNav === "UserManagement" && <UserManagement />}

        {activeNav === "AddTest" && (
          <AddTest
            onClose={() => setActiveNav("Pricing")}
            onConfirm={() => setActiveNav("Pricing")}
          />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
