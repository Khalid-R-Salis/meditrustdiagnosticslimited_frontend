// import React, { useState } from "react";
// import AdminSidebar from "../admin/component/AdminSidebar";
// import AdminOverview from "../admin/component/AdminOverview";
// import PatientReports from "../admin/component/PatientReports ";
// import Pricing from "../admin/component/Pricing ";
// import UserManagement from "../admin/component/UserManagement";
// import Complaints from "../admin/component/Complaints";

// import AddTest from "../admin/component/AddTest";
// import NewUser from "../admin/component/NewUser";

// const HamburgerIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
//     <path
//       d="M3 12H21M3 6H21M3 18H21"
//       stroke="#596066"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const CancelIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 640 640"
//     width="20"
//     height="20"
//   >
//     <path
//       d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"
//       fill="#596066"
//     />
//   </svg>
// );

// const AdminDashboard = () => {
//   const [activeNav, setActiveNav] = useState("AdminOverview");
//   const [sidebarDisabled, setSidebarDisabled] = useState(false);
//   const [showNewUser, setShowNewUser] = useState(false);
//   const [toast, setToast] = useState(null);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [sidebarAnim, setSidebarAnim] = useState("slideIn");

//   const openSidebar = () => {
//     setSidebarAnim("slideIn");
//     setSidebarOpen(true);
//   };

//   const closeSidebar = () => {
//     setSidebarAnim("slideOut");
//     setTimeout(() => setSidebarOpen(false), 300);
//   };

//   const handleNavChange = (nav) => {
//     setActiveNav(nav);
//     if (sidebarOpen) {
//       setSidebarAnim("slideOut");
//       setTimeout(() => setSidebarOpen(false), 300);
//     }
//   };

//   return (
//     <>
//       {/* Hamburger for mobile */}
//       {!showNewUser && activeNav !== "AddTest" && (
//         <div className="md:hidden fixed top-3 left-3 z-50">
//           {!sidebarOpen && (
//             <button
//               onClick={openSidebar}
//               style={{
//                 display: "flex",
//                 padding: "8px",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 gap: "8px",
//                 borderRadius: "8px",
//                 border: "1px solid #CED2D6",
//                 background: "#fff",
//               }}
//             >
//               <HamburgerIcon />
//             </button>
//           )}
//         </div>
//       )}

//       <div className="flex min-h-screen">
//         <div>
//           {/* Desktop sidebar */}
//           <div className="hidden md:block">
//             <AdminSidebar
//               activeNav={activeNav}
//               setActiveNav={setActiveNav}
//               disabled={sidebarDisabled || activeNav === "AddTest"}
//             />
//           </div>

//           {/* Mobile sidebar (animated overlay) */}
//           {sidebarOpen && (
//             <div className="fixed inset-0 z-40 flex items-start">
//               {/* Dimmed overlay */}
//               <div
//                 className="absolute inset-0 bg-black bg-opacity-40 z-30"
//                 onClick={closeSidebar}
//                 style={{ cursor: "not-allowed" }}
//               />

//               <div className={`relative z-40 animate-${sidebarAnim}`}>
//                 <AdminSidebar
//                   activeNav={activeNav}
//                   setActiveNav={handleNavChange}
//                   disabled={sidebarDisabled || activeNav === "AddTest"}
//                   showCancel={true}
//                   onCancel={closeSidebar}
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//         {toast && (
//           <div
//             className={`fixed top-4 right-4 flex w-[420px] p-4 items-start gap-4 rounded-lg z-50 transition-all duration-300 transform-gpu ${
//               toast.type === "success" ? "bg-[#F6FEF9]" : "bg-[#FEF6F6]"
//             }`}
//             style={{
//               boxShadow:
//                 toast.type === "success"
//                   ? "0 0 0 4px rgba(83, 180, 131, 0.16), 0 2px 5px 0 rgba(103, 110, 118, 0.08), 0 0 0 1px rgba(83, 180, 131, 0.16), 0 1px 1px 0 rgba(0, 0, 0, 0.12)"
//                   : "0 0 0 4px rgba(247, 73, 73, 0.16), 0 2px 5px 0 rgba(103, 110, 118, 0.08), 0 0 0 1px rgba(247, 73, 73, 0.16), 0 1px 1px 0 rgba(0, 0, 0, 0.12)",
//             }}
//           >
//             <div className="flex flex-col gap-1 flex-1">
//               <h3
//                 className={`font-inter text-base font-semibold leading-6 ${
//                   toast.type === "success" ? "text-[#2F9461]" : "text-[#D92D20]"
//                 }`}
//               >
//                 {toast.type === "success" ? "Success" : "Error"}
//               </h3>
//               <p
//                 className={`font-inter text-base font-semibold leading-6 ${
//                   toast.type === "success" ? "text-[#2F9461]" : "text-[#D92D20]"
//                 }`}
//               >
//                 {toast.message}
//               </p>
//             </div>
//             <button
//               onClick={() => setToast(null)}
//               className={`text-lg font-light ${
//                 toast.type === "success" ? "text-[#2F9461]" : "text-[#D92D20]"
//               }`}
//             >
//               &times;
//             </button>
//           </div>
//         )}

//         <div className="flex-1 min-h-screen overflow-y-auto overflow-x-auto py-0 px-0 sm:px-6 flex scrollbar-thin-green">
//           {showNewUser ? (
//             <NewUser
//               onClose={() => {
//                 setShowNewUser(false);
//                 setSidebarDisabled(false);
//               }}
//               onConfirm={(form) => {
//                 setShowNewUser(false);
//                 setSidebarDisabled(false);
//                 setActiveNav("UserManagement");
//               }}
//               setSidebarDisabled={setSidebarDisabled}
//               setActiveNav={setActiveNav}
//               setToast={setToast}
//             />
//           ) : (
//             <>
//               {activeNav === "AdminOverview" && (
//                 <AdminOverview setActiveNav={setActiveNav} />
//               )}
//               {activeNav === "PatientReports" && <PatientReports />}
//               {activeNav === "Pricing" && (
//                 <Pricing setActiveNav={setActiveNav} />
//               )}
//               {activeNav === "UserManagement" && (
//                 <UserManagement
//                   showNewUser={showNewUser}
//                   setShowNewUser={setShowNewUser}
//                   sidebarDisabled={sidebarDisabled}
//                   setSidebarDisabled={setSidebarDisabled}
//                 />
//               )}

//               {activeNav === "Complaints" && (
//                 <Complaints
//                   sidebarDisabled={sidebarDisabled}
//                   setSidebarDisabled={setSidebarDisabled}
//                   setToast={setToast}
//                 />
//               )}

//               {activeNav === "AddTest" && (
//                 <AddTest
//                   onClose={() => setActiveNav("Pricing")}
//                   onConfirm={() => setActiveNav("Pricing")}
//                 />
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminDashboard;

// import React, { useState } from "react";
// import AdminSidebar from "../admin/component/AdminSidebar";
// import AdminOverview from "../admin/component/AdminOverview";
// import PatientReports from "../admin/component/PatientReports ";
// import Pricing from "../admin/component/Pricing ";
// import UserManagement from "../admin/component/UserManagement";
// import Complaints from "../admin/component/Complaints";

// import AddTest from "../admin/component/AddTest";
// import NewUser from "../admin/component/NewUser";

// const HamburgerIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
//     <path
//       d="M3 12H21M3 6H21M3 18H21"
//       stroke="#596066"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const CancelIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 640 640"
//     width="20"
//     height="20"
//   >
//     <path
//       d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"
//       fill="#596066"
//     />
//   </svg>
// );

// const AdminDashboard = () => {
//   const [activeNav, setActiveNav] = useState("AdminOverview");
//   const [sidebarDisabled, setSidebarDisabled] = useState(false);
//   const [showNewUser, setShowNewUser] = useState(false);
//   const [toast, setToast] = useState(null);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [sidebarAnim, setSidebarAnim] = useState("slideIn");

//   const openSidebar = () => {
//     setSidebarAnim("slideIn");
//     setSidebarOpen(true);
//   };

//   const closeSidebar = () => {
//     setSidebarAnim("slideOut");
//     setTimeout(() => setSidebarOpen(false), 300);
//   };

//   const handleNavChange = (nav) => {
//     setActiveNav(nav);
//     if (sidebarOpen) {
//       setSidebarAnim("slideOut");
//       setTimeout(() => setSidebarOpen(false), 300);
//     }
//   };

//   return (
//     <>
//       {/* Mobile hamburger + Overview text with full white background */}
//       {!showNewUser && activeNav !== "AddTest" && (
//         <div className="md:hidden fixed top-0 left-0 z-40 w-full bg-white">
//           <div className="flex items-center gap-4 px-3 py-3">
//             {/* Hamburger button */}
//             {!sidebarOpen && (
//               <button
//                 onClick={openSidebar}
//                 className="flex justify-center items-center p-2 rounded-lg border border-[#CED2D6] bg-white"
//               >
//                 <HamburgerIcon />
//               </button>
//             )}

//             {/* Overview text only on Overview page */}
//             {activeNav === "AdminOverview" && (
//               <h1 className="text-[24px] font-semibold leading-[32px] text-black font-inter">
//                 Overview
//               </h1>
//             )}
//           </div>
//         </div>
//       )}

//       <div className="flex min-h-screen">
//         <div>
//           {/* Desktop sidebar */}
//           <div className="hidden md:block">
//             <AdminSidebar
//               activeNav={activeNav}
//               setActiveNav={setActiveNav}
//               disabled={sidebarDisabled || activeNav === "AddTest"}
//             />
//           </div>

//           {/* Mobile sidebar (animated overlay) */}
//           {sidebarOpen && (
//             <div className="fixed inset-0 z-40 flex items-start">
//               {/* Dimmed overlay */}
//               <div
//                 className="absolute inset-0 bg-black bg-opacity-40 z-30"
//                 onClick={closeSidebar}
//                 style={{ cursor: "not-allowed" }}
//               />

//               <div className={`relative z-40 animate-${sidebarAnim}`}>
//                 <AdminSidebar
//                   activeNav={activeNav}
//                   setActiveNav={handleNavChange}
//                   disabled={sidebarDisabled || activeNav === "AddTest"}
//                   showCancel={true}
//                   onCancel={closeSidebar}
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//         {toast && (
//           <div
//             className={`fixed top-4 right-4 flex w-[420px] p-4 items-start gap-4 rounded-lg z-50 transition-all duration-300 transform-gpu ${
//               toast.type === "success" ? "bg-[#F6FEF9]" : "bg-[#FEF6F6]"
//             }`}
//             style={{
//               boxShadow:
//                 toast.type === "success"
//                   ? "0 0 0 4px rgba(83, 180, 131, 0.16), 0 2px 5px 0 rgba(103, 110, 118, 0.08), 0 0 0 1px rgba(83, 180, 131, 0.16), 0 1px 1px 0 rgba(0, 0, 0, 0.12)"
//                   : "0 0 0 4px rgba(247, 73, 73, 0.16), 0 2px 5px 0 rgba(103, 110, 118, 0.08), 0 0 0 1px rgba(247, 73, 73, 0.16), 0 1px 1px 0 rgba(0, 0, 0, 0.12)",
//             }}
//           >
//             <div className="flex flex-col gap-1 flex-1">
//               <h3
//                 className={`font-inter text-base font-semibold leading-6 ${
//                   toast.type === "success" ? "text-[#2F9461]" : "text-[#D92D20]"
//                 }`}
//               >
//                 {toast.type === "success" ? "Success" : "Error"}
//               </h3>
//               <p
//                 className={`font-inter text-base font-semibold leading-6 ${
//                   toast.type === "success" ? "text-[#2F9461]" : "text-[#D92D20]"
//                 }`}
//               >
//                 {toast.message}
//               </p>
//             </div>
//             <button
//               onClick={() => setToast(null)}
//               className={`text-lg font-light ${
//                 toast.type === "success" ? "text-[#2F9461]" : "text-[#D92D20]"
//               }`}
//             >
//               &times;
//             </button>
//           </div>
//         )}

//         <div className="flex-1 min-h-screen overflow-y-auto overflow-x-auto py-0 px-0 sm:px-6 flex scrollbar-thin-green">
//           {showNewUser ? (
//             <NewUser
//               onClose={() => {
//                 setShowNewUser(false);
//                 setSidebarDisabled(false);
//               }}
//               onConfirm={(form) => {
//                 setShowNewUser(false);
//                 setSidebarDisabled(false);
//                 setActiveNav("UserManagement");
//               }}
//               setSidebarDisabled={setSidebarDisabled}
//               setActiveNav={setActiveNav}
//               setToast={setToast}
//             />
//           ) : (
//             <>
//               {activeNav === "AdminOverview" && (
//                 <AdminOverview setActiveNav={setActiveNav} />
//               )}
//               {activeNav === "PatientReports" && <PatientReports />}
//               {activeNav === "Pricing" && (
//                 <Pricing setActiveNav={setActiveNav} />
//               )}
//               {activeNav === "UserManagement" && (
//                 <UserManagement
//                   showNewUser={showNewUser}
//                   setShowNewUser={setShowNewUser}
//                   sidebarDisabled={sidebarDisabled}
//                   setSidebarDisabled={setSidebarDisabled}
//                 />
//               )}

//               {activeNav === "Complaints" && (
//                 <Complaints
//                   sidebarDisabled={sidebarDisabled}
//                   setSidebarDisabled={setSidebarDisabled}
//                   setToast={setToast}
//                 />
//               )}

//               {activeNav === "AddTest" && (
//                 <AddTest
//                   onClose={() => setActiveNav("Pricing")}
//                   onConfirm={() => setActiveNav("Pricing")}
//                 />
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminDashboard;

import React, { useState } from "react";
import AdminSidebar from "../admin/component/AdminSidebar";
import AdminOverview from "../admin/component/AdminOverview";
import PatientReports from "../admin/component/PatientReports ";
import Pricing from "../admin/component/Pricing ";
import UserManagement from "../admin/component/UserManagement";
import Complaints from "../admin/component/Complaints";

import AddTest from "../admin/component/AddTest";
import NewUser from "../admin/component/NewUser";

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

const AdminDashboard = () => {
  const [activeNav, setActiveNav] = useState("AdminOverview");
  const [sidebarDisabled, setSidebarDisabled] = useState(false);
  const [showNewUser, setShowNewUser] = useState(false);
  const [toast, setToast] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarAnim, setSidebarAnim] = useState("slideIn");

  const openSidebar = () => {
    setSidebarAnim("slideIn");
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarAnim("slideOut");
    setTimeout(() => setSidebarOpen(false), 300);
  };

  const handleNavChange = (nav) => {
    setActiveNav(nav);
    if (sidebarOpen) {
      setSidebarAnim("slideOut");
      setTimeout(() => setSidebarOpen(false), 300);
    }
  };

  return (
    <>
      {/* Mobile hamburger */}
      {!showNewUser && activeNav !== "AddTest" && (
        <div className="md:hidden fixed left-0 z-30 w-full bg-white">
          <div className="flex items-center gap-4 px-3 py-3">
            {/* Hamburger button */}
            {!sidebarOpen && (
              <button
                onClick={openSidebar}
                className="flex justify-center items-center p-2 rounded-lg border border-[#CED2D6] bg-white"
              >
                <HamburgerIcon />
              </button>
            )}

            {/* Dynamic page title */}
            {activeNav === "AdminOverview" && (
              <h1 className="text-[24px] font-semibold leading-[32px] text-black font-inter">
                Overview
              </h1>
            )}
            {activeNav === "PatientReports" && (
              <h1 className="text-[24px] font-semibold leading-[32px] text-black font-inter">
                Patient Reports
              </h1>
            )}
            {activeNav === "Pricing" && (
              <h1 className="text-[24px] font-semibold leading-[32px] text-black font-inter">
                Pricing
              </h1>
            )}
            {activeNav === "UserManagement" && (
              <h1 className="text-[24px] font-semibold leading-[32px] text-black font-inter">
                User Management
              </h1>
            )}
            {activeNav === "Complaints" && (
              <h1 className="text-[24px] font-semibold leading-[32px] text-black font-inter">
                Complaints
              </h1>
            )}
          </div>
        </div>
      )}

      <div className="flex min-h-screen">
        <div>
          {/* Desktop sidebar */}
          <div className="hidden md:block">
            <AdminSidebar
              activeNav={activeNav}
              setActiveNav={setActiveNav}
              disabled={sidebarDisabled || activeNav === "AddTest"}
            />
          </div>

          {/* Mobile sidebar (animated overlay) */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-40 flex items-start">
              {/* Dimmed overlay */}
              <div
                className="absolute inset-0 bg-black bg-opacity-40 z-30"
                onClick={closeSidebar}
                style={{ cursor: "not-allowed" }}
              />

              <div className={`relative z-40 animate-${sidebarAnim}`}>
                <AdminSidebar
                  activeNav={activeNav}
                  setActiveNav={handleNavChange}
                  disabled={sidebarDisabled || activeNav === "AddTest"}
                  showCancel={true}
                  onCancel={closeSidebar}
                />
              </div>
            </div>
          )}
        </div>
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

        <div className="flex-1 min-h-screen overflow-y-auto overflow-x-auto py-0 px-0 sm:px-6 flex scrollbar-thin-green">
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
              {activeNav === "Pricing" && (
                <Pricing setActiveNav={setActiveNav} />
              )}
              {activeNav === "UserManagement" && (
                <UserManagement
                  showNewUser={showNewUser}
                  setShowNewUser={setShowNewUser}
                  sidebarDisabled={sidebarDisabled}
                  setSidebarDisabled={setSidebarDisabled}
                />
              )}

              {activeNav === "Complaints" && (
                <Complaints
                  sidebarDisabled={sidebarDisabled}
                  setSidebarDisabled={setSidebarDisabled}
                  setToast={setToast}
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
    </>
  );
};

export default AdminDashboard;
