import React, { useState } from "react";
import AdminSidebar from "../admin/component/AdminSidebar";
import AdminOverview from "../admin/component/AdminOverview";
import PatientReports from "../admin/component/PatientReports ";
import Pricing from "../admin/component/Pricing ";
import UserManagement from "../admin/component/UserManagement";
import AddTest from "../admin/component/AddTest";
import NewUser from "../admin/component/NewUser";

const AdminDashboard = () => {
  const [activeNav, setActiveNav] = useState("AdminOverview");
  const [sidebarDisabled, setSidebarDisabled] = useState(false);
  const [showNewUser, setShowNewUser] = useState(false);
  const [toast, setToast] = useState(null);

  return (
    <div className="flex">
      <AdminSidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        disabled={sidebarDisabled || activeNav === "AddTest"}
      />
      {toast && (
        <div
          className={`fixed top-4 right-4 flex w-[420px] p-4 items-start gap-4 rounded-lg z-50 transition-all duration-300 transform-gpu ${
            toast.type === "success" ? "bg-[#F6FEF9]" : "bg-[#FEF6F6]"
          }`}
          style={{
            boxShadow:
              toast.type === "success"
                ? "0 0 0 4px rgba(83, 180, 131, 0.16), 0 2px 5px 0 rgba(103, 110, 118, 0.08), 0 0 0 1px rgba(83, 180, 131, 0.16), 0 1px 1px 0 rgba(0, 0, 0, 0.12)"
                : "0 0 0 4px rgba(247, 73, 73, 0.16), 0 2px 5px 0 rgba(103, 110, 118, 0.08), 0 0 0 1px rgba(247, 73, 73, 0.16), 0 1px 1px 0 rgba(0, 0, 0, 0.12)",
          }}
        >
          <div className="flex flex-col gap-1 flex-1">
            <h3
              className={`font-inter text-base font-semibold leading-6 ${
                toast.type === "success" ? "text-[#2F9461]" : "text-[#D92D20]"
              }`}
            >
              {toast.type === "success" ? "Success" : "Error"}
            </h3>
            <p
              className={`font-inter text-base font-semibold leading-6 ${
                toast.type === "success" ? "text-[#2F9461]" : "text-[#D92D20]"
              }`}
            >
              {toast.message}
            </p>
          </div>
          <button
            onClick={() => setToast(null)}
            className={`text-lg font-light ${
              toast.type === "success" ? "text-[#2F9461]" : "text-[#D92D20]"
            }`}
          >
            &times;
          </button>
        </div>
      )}

      <div className="flex-1 p-6 flex">
        {showNewUser ? (
          <NewUser
            onClose={() => {
              setShowNewUser(false);
              setSidebarDisabled(false);
            }}
            onConfirm={(form) => {
              setShowNewUser(false);
              setSidebarDisabled(false);
              setActiveNav("UserManagement");
            }}
            setSidebarDisabled={setSidebarDisabled}
            setActiveNav={setActiveNav}
            setToast={setToast}
          />
        ) : (
          <>
            {activeNav === "AdminOverview" && (
              <AdminOverview setActiveNav={setActiveNav} />
            )}
            {activeNav === "PatientReports" && <PatientReports />}
            {activeNav === "Pricing" && <Pricing setActiveNav={setActiveNav} />}
            {activeNav === "UserManagement" && (
              <UserManagement
                showNewUser={showNewUser}
                setShowNewUser={setShowNewUser}
                sidebarDisabled={sidebarDisabled}
                setSidebarDisabled={setSidebarDisabled}
              />
            )}
            {activeNav === "AddTest" && (
              <AddTest
                onClose={() => setActiveNav("Pricing")}
                onConfirm={() => setActiveNav("Pricing")}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
