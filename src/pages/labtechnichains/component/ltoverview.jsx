import { useState, useEffect, useRef } from "react";
import HeaderStats from "./ltheaderstats";
import ReceiptTemplate from "../../../components/receipttemplate";
import ResultTemplate from "../../../components/patientreports";

const OverviewPage = ({ setActiveNav, pageType = "overview" }) => {
  const [showReceipt, setShowReceipt] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [menuOpen, setMenuOpen] = useState(null);
  const menuRef = useRef(null);

  const handleViewAll = () => {
    setActiveNav("reportform");
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
      <div className="flex-1 bg-[#ffffff] py-8 px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 relative">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-[24px] font-semibold leading-[32px] text-black font-inter">
            {pageType === "overview" ? "Overview" : "Recent Patient Report"}
          </h1>
        </div>

        {pageType === "overview" && <HeaderStats />}

        <div className="flex justify-between items-center mb-2">
          <h2 className="text-[16px] font-normal leading-6 text-primary-black font-inter">
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

        <section className="bg-white p-4 overflow-auto">
          <table className="w-full text-left text-[12px] text-[#676E76] rounded-sm">
            <thead>
              <tr className="text-[#676E76] border-b text-[12px] font-medium leading-[18px] font-inter">
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
                  <td className="text-[#000] text-[12px] font-medium leading-[18px] font-inter px-5 py-4 max-w-[100px] truncate">
                    {patient.receipt}
                  </td>
                  <td className="px-5 py-4 max-w-[140px] truncate">
                    {patient.name}
                  </td>
                  <td className="px-5 py-4 max-w-[60px] truncate">
                    {patient.sex}
                  </td>
                  <td className="px-5 py-4 max-w-[140px] truncate">
                    {patient.test}
                  </td>
                  <td className="px-5 py-4 max-w-[160px] truncate">
                    {patient.date}
                  </td>
                  <td className="px-5 py-4 max-w-[120px] truncate">
                    {patient.amount}
                  </td>

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
                                setShowResult(true);
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

      {/* Receipt Modal */}
      {showReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-hidden">
          <div className="mt-10 bg-white p-6 rounded-lg shadow-lg relative scale-[1.5] sm:scale-[1.8]">
            <button
              className="absolute top-2 right-2 text-gray-600 text-sm"
              onClick={() => setShowReceipt(false)}
            >
              ✕
            </button>
            <ReceiptTemplate />
          </div>
        </div>
      )}

      {/* Result Modal */}
      {showResult && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-hidden">
          <div className="mt-10 bg-white p-6 rounded-lg shadow-lg relative scale-[1.5] sm:scale-[1.8]">
            <button
              className="absolute top-2 right-2 text-gray-600 text-sm"
              onClick={() => setShowResult(false)}
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

export default OverviewPage;
