import { useState, useEffect, useRef } from "react";
import HeaderStats from "./ltheaderstats";
import ReceiptTemplate from "../../../components/receipttemplate";
import ResultTemplate from "../../../components/testresult";

const OverviewPage = ({ setActiveNav, pageType = "overview" }) => {
  const [showReceipt, setShowReceipt] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [menuOpen, setMenuOpen] = useState(null);
  const menuRef = useRef(null);

  const handleViewAll = () => {
    setActiveNav("patientreport");
  };

  const [patients] = useState(() =>
    [...Array(7)].map((_, i) => ({
      id: i,
      receipt: "#3266",
      name: "Khalid Rabiu – 09099999999",
      sex: "Male",
      test: "FOLLICLE STIMULATING HORMONE",
      date: "16, Jun 2025 - 11:00 AM",
      amount: "₦50,0000 (transfer)",
      status: i % 2 === 0 ? "Awaiting test result" : "Completed",
    }))
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest(".menu-toggle")
      ) {
        setMenuOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`flex w-full ${
        showReceipt || showResult ? "overflow-hidden h-screen" : ""
      }`}
    >
      {/* Main content */}
      <div className=" flex-1 relative bg-white py-8 overflow-x-hidden  pt-0 pb-8 px-6 scrollbar-thin-green">
        <div className="flex justify-between items-center mb-10 ">
          <h1 className="text-[24px] font-semibold leading-[32px] text-black font-inter md: ml-10">
            {pageType === "overview" ? "Overview" : "Recent Patient Report"}
          </h1>
        </div>

        {pageType === "overview" && <HeaderStats />}

        <div className="flex justify-between items-center mb-2">
          <h2 className="text-[18px] font-normal leading-6 text-primary-black font-inter">
            Recent patient reports
          </h2>

          {pageType === "overview" && (
            <button
              className="flex flex-col justify-center items-start gap-2 
                px-3 py-1.5 
                rounded-lg 
                border border-[#E5E7EA] 
                bg-[#FAFAFA] 
                text-[#000] 
                text-sm font-medium leading-5 
                text-center 
                font-inter"
              onClick={handleViewAll}
            >
              View all
            </button>
          )}
        </div>

        <div className="overflow-x-auto overflow-y-auto max-h-[calc(100vh-350px)] w-full scrollbar-thin-green">
          <section className="bg-white">
            <table className="min-w-full text-left text-[16px] text-[#676E76] rounded-sm">
              <thead>
                <tr className="text-[#676E76] border-b text-[14px] font-medium leading-[18px] font-inter">
                  <th className="bg-[#FAFAFA] p-5 rounded-tl-lg">
                    Receipt number
                  </th>
                  <th className="bg-[#FAFAFA] p-5">Patient info</th>
                  <th className="bg-[#FAFAFA] p-5">Sex</th>
                  <th className="bg-[#FAFAFA] p-5">Test type</th>
                  <th className="bg-[#FAFAFA] p-5">Date & Time</th>
                  <th className="bg-[#FAFAFA] p-5">Amount paid</th>
                  <th className="bg-[#FAFAFA] p-5 rounded-tr-lg">Status</th>
                </tr>
              </thead>

              <tbody>
                {patients.map((patient, i) => (
                  <tr
                    key={patient.id}
                    className="border-b hover:bg-gray-50 relative"
                  >
                    <td className="text-[#000] text-[16px] font-medium leading-[18px] font-inter px-5 py-4 max-w-full">
                      {patient.receipt}
                    </td>
                    <td className="px-5 py-4 max-w-full">{patient.name}</td>
                    <td className="px-5 py-4 max-w-full">{patient.sex}</td>
                    <td
                      className="px-5 py-4 max-w-[320px] truncate"
                      title={patient.test}
                    >
                      {patient.test}
                    </td>
                    <td className="px-5 py-4 max-w-full truncate">
                      {patient.date}
                    </td>
                    <td className="px-5 py-4 max-w-full">{patient.amount}</td>

                    <td className="px-5 py-4">
                      <div className="flex items-center justify-between relative">
                        <span
                          className={
                            patient.status === "Completed"
                              ? "text-green-600"
                              : "text-yellow-600"
                          }
                        >
                          {patient.status}
                        </span>
                        <button
                          onClick={() => setMenuOpen(menuOpen === i ? null : i)}
                          className="menu-toggle p-1 hover:bg-gray-100 rounded ml-6"
                        >
                          <svg
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="block"
                          >
                            <circle cx="8" cy="3" r="1.5" />
                            <circle cx="8" cy="8" r="1.5" />
                            <circle cx="8" cy="13" r="1.5" />
                          </svg>
                        </button>

                        {menuOpen === i && (
                          <div
                            ref={menuRef}
                            className="absolute right-0 top-full mt-2 bg-white border rounded shadow-md z-50 w-40"
                          >
                            <button
                              onClick={() => {
                                setShowReceipt(true);
                                setMenuOpen(null);
                              }}
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            >
                              View report
                            </button>

                            {patient.status === "Completed" ? (
                              <button
                                onClick={() => {
                                  setActiveNav("testresult");
                                  setMenuOpen(null);
                                }}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                              >
                                View test result
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  setActiveNav("resultform");
                                  setMenuOpen(null);
                                }}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                              >
                                Upload test result
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>
      {/* Receipt Component */}
      {showReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className="relative mt-10 bg-white p-6 rounded-lg shadow-lg 
                    w-[40%] sm:w-[40%] md:w-[40%] lg:w-[20%]
                    max-h-[100vh] overflow-y-auto"
          >
            <button
              className="absolute top-5 right-3 text-gray-600 text-sm"
              onClick={() => setShowReceipt(false)}
            >
              ✕
            </button>
            <ReceiptTemplate />
          </div>
        </div>
      )}
      {/* Result Component */}
      {showResult && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-hidden">
          <ResultTemplate />
        </div>
      )}
    </div>
  );
};

export default OverviewPage;
