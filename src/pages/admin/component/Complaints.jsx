import React, { useState, useRef, useEffect } from "react";

const ROW_HEIGHT = 56;

const Complaints = ({ sidebarDisabled, setSidebarDisabled, setToast }) => {
  const [menuOpen, setMenuOpen] = useState(null);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [filterRange, setFilterRange] = useState("today");
  const menuRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const [complaints, setComplaints] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Doctor",
      phone: "08012345678",
      email: "john@example.com",
      complain: "Payment not reflected after transfer .",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Doctor",
      phone: "09098765432",
      email: "jane@example.com",
      complain: "Unable to access patient history.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "Lab Technician",
      phone: "07044455566",
      email: "mike.lab@example.com",
      complain: "Lab system not syncing results properly.",
    },
    {
      id: 4,
      name: "Alice Brown",
      role: "Receptionist",
      phone: "08122233344",
      email: "alice.recep@example.com",
      complain: "Patients complain of long wait times.",
    },
    {
      id: 5,
      name: "Samuel Green",
      role: "Cleaner",
      phone: "08077788899",
      email: "sam.cleaner@example.com",
      complain: "Cleaning supplies not available.",
    },
    {
      id: 6,
      name: "Dr. Angela White",
      role: "Doctor",
      phone: "08199900011",
      email: "angela.white@example.com",
      complain: "System logout issue during consultation.",
    },
    {
      id: 7,
      name: "Robert Taylor",
      role: "Manager",
      phone: "09033344455",
      email: "robert.manager@example.com",
      complain: "Budget reports not showing correct totals.",
    },
    {
      id: 8,
      name: "Emily Davis",
      role: "Nurse",
      phone: "07055566677",
      email: "emily.nurse@example.com",
      complain:
        "Emergency shift schedules not updating correctly in the system.",
    },
    {
      id: 9,
      name: "David Wilson",
      role: "Doctor",
      phone: "08111122233",
      email: "david.wilson@example.com",
      complain:
        "Long text complaint: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
    },
    {
      id: 10,
      name: "Sophia Martin",
      role: "Lab Technician",
      phone: "08022233344",
      email: "sophia.lab@example.com",
      complain: "Issue with test sample labeling.",
    },
    {
      id: 11,
      name: "Henry Adams",
      role: "Cleaner",
      phone: "07099911122",
      email: "henry.cleaner@example.com",
      complain: "Bins not being emptied regularly.",
    },
  ]);

  // Dynamically calculate itemsPerPage based on screen height
  useEffect(() => {
    function updateItemsPerPage() {
      const availableHeight = window.innerHeight - 280;
      const rows = Math.floor(availableHeight / ROW_HEIGHT);
      setItemsPerPage(rows > 0 ? rows : 1);
    }
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

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

  const showToast = (msg) => {
    setToast({ type: "success", message: msg });
    setTimeout(() => setToast(null), 2000);
  };

  const handleResolve = (id) => {
    setComplaints((prev) => prev.filter((c) => c.id !== id));
    showToast("Complaint removed successfully!");
    setSelectedComplaint(null);
  };

  // Pagination using dynamic itemsPerPage
  const totalPages = Math.ceil(complaints.length / itemsPerPage);
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentComplaints = complaints.slice(indexOfFirst, indexOfLast);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  return (
    <div className="flex w-full">
      <div className="flex-1 bg-white py-8 px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 relative overflow-x-hidden">
        <div className="flex flex-col sm:flex-row justify-start items-center mt-[5px] sm:mt-0 mb-10 gap-2">
          <h1 className="text-[15px] sm:text-[24px] font-semibold leading-[20px] sm:leading-[32px] text-black font-inter">
            Manage staff complaints
          </h1>
          {/* Dropdown */}
          <div className="ml-0 sm:ml-[15px] flex items-center px-3 py-[4.5px] rounded-lg border border-[#E5E7EA] bg-white">
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

        {/* Complaints Table */}
        <div className="overflow-x-auto overflow-y-auto max-h-[calc(100vh-310px)] scrollbar-thin-green">
          <section className="bg-white">
            <table className="min-w-[900px] text-left text-[10px] text-[#676E76] rounded-sm">
              <thead>
                <tr className="text-[#676E76] border-b text-[12px] font-medium leading-[18px] font-inter">
                  <th className="bg-[#FAFAFA] p-5 rounded-tl-lg">NAME</th>
                  <th className="bg-[#FAFAFA] p-5">ROLE</th>
                  <th className="bg-[#FAFAFA] p-5">PHONE NUMBER</th>
                  <th className="bg-[#FAFAFA] p-5">EMAIL</th>
                  <th className="bg-[#FAFAFA] p-5">COMPLAIN</th>
                  <th className="bg-[#FAFAFA] p-5 rounded-tr-lg"></th>
                </tr>
              </thead>
              <tbody>
                {currentComplaints.map((c, i) => (
                  <tr
                    key={c.id}
                    className="border-b hover:bg-gray-50 relative text-black"
                  >
                    <td className="px-5 py-4 font-medium truncate max-w-[150px]">
                      {c.name}
                    </td>
                    <td className="px-5 py-4 truncate max-w-[120px]">
                      {c.role}
                    </td>
                    <td className="px-5 py-4 truncate max-w-[130px]">
                      {c.phone}
                    </td>
                    <td className="px-5 py-4 truncate max-w-[150px]">
                      {c.email}
                    </td>
                    <td className="px-5 py-4 truncate max-w-[200px]">
                      {c.complain}
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-between relative">
                        <button
                          onClick={() => setMenuOpen(menuOpen === i ? null : i)}
                          className="menu-toggle p-1 hover:bg-gray-100 rounded"
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
                                setSelectedComplaint(c);
                                setMenuOpen(null);
                              }}
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            >
                              View complain
                            </button>
                            <button
                              onClick={() => {
                                handleResolve(c.id);
                                setMenuOpen(null);
                              }}
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            >
                              Resolve complain
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
                {currentComplaints.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center py-6 text-gray-500 italic"
                    >
                      No complaints found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
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
      {/* Complaint Modal */}
      {selectedComplaint && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-hidden">
          <div className="bg-white p-8 rounded-[6px] shadow-lg relative w-[90%] max-w-lg max-h-[80vh] overflow-y-auto">
            <button
              className="absolute top-2 right-4 text-gray-600 text-lg font-bold"
              onClick={() => setSelectedComplaint(null)}
            >
              ✕
            </button>
            <h2 className="text-lg font-semibold mb-4">Staff Complain</h2>
            <p className="mb-2">
              <b>Name:</b> {selectedComplaint.name}
            </p>
            <p className="mb-2">
              <b>Role:</b> {selectedComplaint.role}
            </p>
            <p className="mb-2">
              <b>Phone:</b> {selectedComplaint.phone}
            </p>
            <p className="mb-2">
              <b>Email:</b> {selectedComplaint.email}
            </p>
            <p className="mb-4 whitespace-pre-line">
              <b>Complain:</b> {selectedComplaint.complain}
            </p>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setSelectedComplaint(null)}
                className="text-black text-sm font-medium leading-5 font-inter 
                     px-3 py-1.5 rounded-lg border border-[#E5E7EA] 
                     bg-[#FAFAFA] hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => handleResolve(selectedComplaint.id)}
                className="text-white text-sm font-medium leading-5 font-inter 
                     px-3 py-1.5 rounded-lg bg-[#829C15] 
                     shadow-[1px_1px_2px_1px_rgba(255,255,255,0.18)_inset,
                              -1px_-1px_2px_1px_rgba(255,255,255,0.18)_inset]
                     hover:bg-[#6f8512]"
                disabled={sidebarDisabled}
              >
                Resolve
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Complaints;
