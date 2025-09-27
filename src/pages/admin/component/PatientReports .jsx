import { useState, useEffect, useRef } from "react";
import ReceiptTemplate from "../../../components/receipttemplate";
import ResultTemplate from "../../../components/testresult";

const ITEMS_PER_PAGE = 10;

const PatientReports = ({ setActiveNav, pageType = "patientreport" }) => {
  const [showReceipt, setShowReceipt] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [menuOpen, setMenuOpen] = useState(null);
  const menuRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterRange, setFilterRange] = useState("today");
  const [currentPage, setCurrentPage] = useState(1);

  const [patients] = useState(() =>
    [...Array(25)].map((_, i) => ({
      id: i,
      receipt: `#32${66 + i}`,
      name: `Patient ${i + 1} – 09099999${(100 + i).toString().slice(-3)}`,
      sex: i % 2 === 0 ? "Male" : "Female",
      test: "FOLLICLE STIMULATING HORMONE",
      date: "16, Jun 2025 - 11:00 AM",
      amount: "₦50,0000 (transfer)",
      status: i % 2 === 0 ? "Awaiting test result" : "Completed",
    }))
  );

  const filteredPatients = patients.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.receipt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPatients.length / ITEMS_PER_PAGE);
  const paginatedPatients = filteredPatients.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`flex w-full ${
        showReceipt || showResult ? "overflow-hidden h-screen" : ""
      }`}
    >
      {/* Main content */}
      <div className="flex-1 bg-white py-8 px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 relative overflow-x-hidden">
        <div className="flex justify-between items-center mb-10">
          <h1 className="ml-8 sm:ml-0 text-[24px] font-semibold leading-[32px] text-black font-inter">
            {pageType === "overview" ? "Overview" : "Patient reports"}
          </h1>
        </div>

        {/* Filters */}
        <div className="mb-6 flex items-center gap-3">
          {/* Search */}
          <div className="flex items-center gap-2 max-w-md w-full px-3 py-1.5 border border-gray-300 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="shrink-0"
            >
              <path
                d="M15.75 15.75L11.8525 11.8525M11.8525 11.8525C12.8704 10.8346 13.5 9.4283 13.5 7.875C13.5 4.7684 10.9816 2.25 7.875 2.25C4.7684 2.25 2.25 4.7684 2.25 7.875C2.25 10.9816 4.7684 13.5 7.875 13.5C9.4283 13.5 10.8346 12.8704 11.8525 11.8525Z"
                stroke="#9EA5AD"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              type="text"
              placeholder="Search by name or receipt number"
              className="w-full text-sm placeholder:text-[#9EA5AD] outline-none"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          {/* Date filter */}
          <div className="flex items-center px-3 py-[4.5px] rounded-lg border border-[#E5E7EA] bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="mr-2 shrink-0"
            >
              <path
                d="M5.0625 2.25V3.9375M12.9375 2.25V3.9375M2.25 14.0625V5.625C2.25 4.69302 3.00552 3.9375 3.9375 3.9375H14.0625C14.9945 3.9375 15.75 4.69302 15.75 5.625V14.0625M2.25 14.0625C2.25 14.9945 3.00552 15.75 3.9375 15.75H14.0625C14.9945 15.75 15.75 14.9945 15.75 14.0625M2.25 14.0625V8.4375C2.25 7.50552 3.00552 6.75 3.9375 6.75H14.0625C14.9945 6.75 15.75 7.50552 15.75 8.4375"
                stroke="#9EA5AD"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <select
              className="bg-transparent outline-none text-sm"
              value={filterRange}
              onChange={(e) => setFilterRange(e.target.value)}
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="always">Always</option>
            </select>
          </div>
        </div>

        {/* Scrollable table */}
        <div className="overflow-x-auto overflow-y-auto max-h-[500px] scrollbar-thin-green">
          <table className="min-w-[900px] text-left text-[10px] text-[#676E76] rounded-sm">
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
              {paginatedPatients.map((patient, i) => (
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

                          {patient.status === "Completed" && (
                            <button
                              onClick={() => {
                                setShowResult(true);
                                setMenuOpen(null);
                              }}
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            >
                              View test result
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
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center gap-4 mt-6 text-[#454C52] text-sm font-semibold leading-[20px] font-inter">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="px-4 py-1.5 rounded-lg border border-[#E5E7EA] bg-white text-[#454C52] disabled:opacity-50 shadow-sm"
          >
            Previous
          </button>

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-1.5 rounded-lg border border-[#E5E7EA] bg-white text-[#454C52] disabled:opacity-50 shadow-sm"
          >
            Next
          </button>
        </div>
      </div>

      {/* Receipt Modal */}
      {showReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-hidden">
          <div className="mt-16 bg-white p-6 rounded-lg shadow-lg relative scale-[1.5] sm:scale-[1.8]">
            <button
              className="absolute top-2 right-2 text-gray-600 text-sm"
              onClick={() => setShowReceipt(false)}
            >
              ✕
            </button>
            <ReceiptTemplate disablePrint={true} />
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
            <ResultTemplate
              disableUpload={true}
              onClose={() => setShowResult(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientReports;
