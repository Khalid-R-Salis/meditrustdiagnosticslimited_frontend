import React, { useState } from "react";
import AdminSidebar from "../admin/component/AdminSidebar";
import AdminOverview from "../admin/component/AdminOverview";
import PatientReports from "../admin/component/PatientReports ";
import Pricing from "../admin/component/Pricing ";
import UserManagement from "../admin/component/UserManagement";

const AdminDashboard = () => {
  const [activeNav, setActiveNav] = useState("AdminOverview");

  return (
    <div className="flex">
      <AdminSidebar activeNav={activeNav} setActiveNav={setActiveNav} />
      <div className="flex-1 p-6">
        {activeNav === "AdminOverview" && <AdminOverview />}
        {activeNav === "PatientReports" && <PatientReports />}
        {activeNav === "Pricing" && <Pricing />}
        {activeNav === "UserManagement" && <UserManagement />}
      </div>
    </div>
  );
};

export default AdminDashboard;
