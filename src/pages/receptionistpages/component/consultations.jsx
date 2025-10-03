import { useState } from "react";
import ReceiptTemplate from "../../../components/receipttemplate";

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

const names = [
  "Khalid Rabiu",
  "Fatima Bello",
  "John Doe",
  "Jane Smith",
  "Ahmed Musa",
  "Ngozi Okeke",
  "Ibrahim Lawal",
  "Chinyere Uche",
  "David Johnson",
  "Aisha Abdullahi",
  "Samuel Okoro",
  "Blessing Eze",
  "Peter Obi",
  "Halima Shuaibu",
  "Emeka Nwosu",
  "Grace Ade",
  "Tunde Balogun",
  "Rita Dominic",
  "Bola Ahmed",
  "Adaora Chukwu",
  "Femi Kuti",
  "Zainab Umar",
  "Michael Ajayi",
  "Kemi Bakare",
  "Josephine Ojo",
];

const mockConsultations = Array.from({ length: 25 }, (_, i) => ({
  id: i + 1,
  receiptNumber: `#32${66 + i}`,
  name: names[i],
  phone: `09099999${(100 + i).toString().slice(-3)}`,
  sex: "Male",
  testType: "FOLLICLE STIMULATING HORMONE",
  dateTime: "16, Jun 2025 - 11:00 AM",
  amount: "₦50,0000 (transfer)",
}));

const ITEMS_PER_PAGE = 10;

const ConsultationPage = ({ setSidebarOpen, deviceType }) => {
  const [showReceipt, setShowReceipt] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filterRange, setFilterRange] = useState("today");

  const filteredData = mockConsultations.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.receiptNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="flex-1 relative max-h-screen overflow-y-auto bg-[#ffffff] py-2 lg:py-8 px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 scrollbar-thin-green">
      {/* Top bar */}
      <div className="flex justify-between items-center mb-4 sticky top-0 bg-white z-20 py-3">
        <div className="flex items-center gap-3">
          {(deviceType === "mobile" || deviceType === "tablet") && (
            <button
              className="flex p-2 justify-center items-center rounded-lg border border-gray-300 bg-white shadow"
              onClick={() => setSidebarOpen(true)}
            >
              <HamburgerIcon />
            </button>
          )}

          <h1
            className="text-[24px] font-semibold leading-[32px] text-black font-inter"
            style={{
              color: "var(--Primary-Black, #000)",
              fontFamily: "Inter",
              fontStyle: "normal",
            }}
          >
            Consultations
          </h1>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 max-w-md w-full py-1.5">
          {/* Search box */}
          <div className="flex items-center gap-2 max-w-md w-full px-3 py-1.5 md:px-4 md:py-2 border border-gray-300 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 w-[18px] h-[18px] md:w-[20px] md:h-[20px]"
              viewBox="0 0 18 18"
              fill="none"
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
              className="w-full text-sm md:text-base placeholder:text-[#9EA5AD] outline-none"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          {/* Filter dropdown */}
          <div className="flex items-center px-3 py-[4.5px] md:px-4 md:py-2 rounded-lg border border-[#E5E7EA] bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 shrink-0 w-[18px] h-[18px] md:w-[20px] md:h-[20px]"
              viewBox="0 0 18 18"
              fill="none"
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
              className="bg-transparent outline-none text-sm md:text-base"
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
      </div>

      {/* Table & Pagination */}
      <div className="overflow-x-auto overflow-y-auto max-h-[calc(100vh-320px)] scrollbar-thin-green">
        <section className="bg-white">
          <table className="min-w-full text-left text-[18px] text-[#676E76] rounded-sm">
            <thead>
              <tr className="text-[#676E76] border-b text-[18px] font-medium leading-[18px] font-inter">
                <th className="bg-[#FAFAFA] p-5 rounded-tl-lg">
                  Receipt number
                </th>
                <th className="bg-[#FAFAFA] p-5">Patient info</th>
                <th className="bg-[#FAFAFA] p-5">Sex</th>
                <th className="bg-[#FAFAFA] p-5">Test type</th>
                <th className="bg-[#FAFAFA] p-5">Date & Time</th>
                <th className="bg-[#FAFAFA] p-5">Amount paid</th>
                <th className="bg-[#FAFAFA] p-5 rounded-tr-lg"></th>
              </tr>
            </thead>

            <tbody>
              {paginatedData.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="text-[#000] text-[18px] font-medium leading-[18px] font-inter px-5 py-4 max-w-full">
                    {item.receiptNumber}
                  </td>
                  <td className="flex-col items-start justify-center py-4 max-w-full truncate">
                    {item.name} – {item.phone}
                  </td>
                  <td className="px-5 py-4 max-w-full truncate">{item.sex}</td>
                  <td
                    className="px-5 py-4 max-w-[320px] truncate"
                    title={item.testType}
                  >
                    {item.testType}
                  </td>
                  <td className="px-5 py-4 max-w-full truncate">
                    {item.dateTime}
                  </td>
                  <td className="px-5 py-4 max-w-full truncate">
                    {item.amount}
                  </td>
                  <td className="px-5 py-4">
                    <button
                      className="text-[#829C15]"
                      onClick={() => setShowReceipt(true)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center gap-4 mt-6 text-[#454C52] text-[17px] font-semibold leading-[20px] font-inter">
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
    </div>
  );
};

export default ConsultationPage;
