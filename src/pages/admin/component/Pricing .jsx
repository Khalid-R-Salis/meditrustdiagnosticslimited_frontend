import { useState, useEffect, useRef } from "react";

// const ITEMS_PER_PAGE = 10;

const testOptions = [
  { label: "2 Hours Post Prandial (2PP)", price: 3500 },
  { label: "Albumin Serum", price: 3000 },
  { label: "ALPHA FETO PROTEIN", price: 17500 },
  { label: "Amylase Serum", price: 8000 },
  { label: "ASO Titre", price: 8000 },
  { label: "Aspirate Analysis", price: 20000 },
  { label: "AST (SGOT)", price: 3000 },
  { label: "Bence jones protein", price: 1500 },
  { label: "BHCG", price: 11000 },
  { label: "BHCG (Male)", price: 11000 },
  { label: "Bilirubin", price: 4000 },
  { label: "Bilirubin Conjugated", price: 2000 },
  { label: "Bilirubin Total", price: 2000 },
  { label: "Blood culture", price: 17000 },
];

const Pricing = ({ setActiveNav }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRange, setFilterRange] = useState("today");
  const [currentPage, setCurrentPage] = useState(1);
  const [menuOpen, setMenuOpen] = useState(null);
  const menuRef = useRef(null);

  //
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(6);
      } else {
        setItemsPerPage(10);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  //

  const [tests, setTests] = useState(() =>
    testOptions.map((t, i) => ({
      id: i,
      name: t.label,
      price: `₦${t.price.toLocaleString()}`,
    }))
  );

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedTest, setSelectedTest] = useState(null);

  const filteredTests = tests.filter((t) =>
    t.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTests.length / itemsPerPage);
  const paginatedTests = filteredTests.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
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

  const handleDeleteTest = (test) => {
    setSelectedTest(test);
    setShowDeleteConfirm(true);
    setMenuOpen(null);
  };

  const confirmDelete = () => {
    setTests((prev) => prev.filter((t) => t.id !== selectedTest.id));
    setShowDeleteConfirm(false);
    setSelectedTest(null);
  };

  const handleEditTest = (test) => {
    setSelectedTest({ ...test });
    setShowEditModal(true);
    setMenuOpen(null);
  };

  const handleEditConfirm = () => {
    setTests((prev) =>
      prev.map((t) => (t.id === selectedTest.id ? selectedTest : t))
    );
    setShowEditModal(false);
    setSelectedTest(null);
  };

  return (
    <div className="bg-white w-full flex flex-col mt-8 mx-5 sm:py-7 sm:px-[72px] sm:mt-0 sm:mx-0 h-full relative">
      <div class="flex justify-between items-center mb-[30px] sm:border-b sm:pb-[24px] sm:mb-[40px]">
        <h2 className="text-[24px] font-semibold leading-[32px] text-black font-inter">
          Pricing
        </h2>
        <div className="flex justify-center items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveNav("AddTest")}
            className="rounded-lg bg-[#829C15] px-3 py-[6px] text-white text-center text-sm font-medium leading-5 font-inter hover:bg-[#6f8911]"
          >
            + New Test
          </button>
        </div>
      </div>

      <div className="mb-6 flex items-center gap-8 sm:gap-3">
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
            placeholder="Search by test name"
            className="w-full text-sm placeholder:text-[#9EA5AD] outline-none"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        {/* <div className="flex items-center px-3 py-[4.5px] rounded-lg border border-[#E5E7EA] bg-white">
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
        </div> */}
      </div>

      {/* Table */}
      <section className="bg-white p-0 sm:p-4 overflow-auto">
        <table className="w-full text-left text-[12px] text-[#676E76] rounded-sm">
          <thead>
            <tr className="text-[#676E76] border-b text-[12px] font-medium leading-[18px] font-inter">
              <th className="bg-[#FAFAFA] p-5 rounded-tl-lg">S/N</th>
              <th className="bg-[#FAFAFA] p-5">Test Name</th>
              <th className="bg-[#FAFAFA] p-5">Test Price</th>
              <th className="bg-[#FAFAFA] p-5 rounded-tr-lg"></th>
            </tr>
          </thead>

          <tbody>
            {paginatedTests.map((test, i) => (
              <tr key={test.id} className="border-b hover:bg-gray-50 relative">
                <td className="px-5 py-3 text-black text-[12px] font-medium font-inter">
                  {(currentPage - 1) * itemsPerPage + i + 1}
                </td>
                <td className="px-5 py-3 text-[#676E76] text-[12px] font-medium font-inter">
                  {test.name}
                </td>
                <td className="px-5 py-3 text-[#676E76] text-[12px] font-medium font-inter">
                  {test.price}
                </td>

                <td className="px-5 py-3">
                  <div className="flex items-center justify-end relative">
                    <button
                      onClick={() => setMenuOpen(menuOpen === i ? null : i)}
                      className="menu-toggle p-1 hover:bg-gray-100 rounded"
                    >
                      <svg
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="block text-[#676E76]"
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
                          onClick={() => handleEditTest(test)}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-[#596066] text-[14px] font-normal font-inter"
                        >
                          Edit test
                        </button>
                        <button
                          onClick={() => handleDeleteTest(test)}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-[#596066] text-[14px] font-normal font-inter"
                        >
                          Delete test
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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
      </section>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-lg p-20 max-w-[30rem] w-full text-center">
            <p className="text-gray-800 text-base mb-12">
              Are you sure you want to delete this test? <br />
              <b className="uppercase text-red-600">
                This action cannot be undone!
              </b>
            </p>
            <div className="flex justify-center gap-3">
              <button
                type="button"
                onClick={() => setShowDeleteConfirm(false)}
                className="rounded-lg border border-[#E5E7EA] bg-[#FAFAFA] px-3 py-[6px] text-black text-sm font-medium leading-5 text-center hover:bg-gray-100 font-inter"
              >
                NO
              </button>

              <button
                type="button"
                onClick={confirmDelete}
                className="rounded-lg bg-[#829C15] px-3 py-[6px] text-white text-center text-sm font-medium leading-5 font-inter hover:bg-[#6f8911]"
              >
                YES, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Test Modal */}
      {showEditModal && selectedTest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            className="flex flex-col w-[480px] p-10 items-start gap-4 rounded-lg bg-white
                       shadow-[0_2px_5px_0_rgba(103,110,118,0.08),0_0_0_1px_rgba(103,110,118,0.16),0_1px_1px_0_rgba(0,0,0,0.12)] relative"
          >
            <button
              onClick={() => setShowEditModal(false)}
              className="absolute top-3 right-3 w-8 h-8 flex-shrink-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5 15L15 5M5 5L15 15"
                  stroke="#596066"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <h3 className="text-[16px] font-semibold text-[#596066] font-inter leading-6">
              Edit test price
            </h3>

            <p className="text-[#676E76] text-[14px] font-normal font-inter leading-5 mt-2">
              You can edit the price of this test here to ensure it reflects the
              current rate or any recent updates.
            </p>

            <div className="w-full mt-6">
              <label className="block text-[#676E76] text-[14px] font-normal font-inter leading-5 mb-1">
                Test name
              </label>

              <input
                type="text"
                value={selectedTest.name}
                onChange={(e) =>
                  setSelectedTest({ ...selectedTest, name: e.target.value })
                }
                className="w-full flex items-center gap-2 px-[14px] py-[10px] border border-[#E5E7EA] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#829C15]"
              />
            </div>

            <div className="w-full mb-6 mt-4">
              <label className="block text-[#676E76] text-[14px] font-normal font-inter leading-5 mb-1">
                Test price
              </label>
              <input
                type="text"
                value={selectedTest.price}
                onChange={(e) =>
                  setSelectedTest({ ...selectedTest, price: e.target.value })
                }
                className="w-full flex items-center gap-2 px-[14px] py-[10px] border border-[#E5E7EA] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#829C15]"
              />
            </div>

            <div className="flex justify-start gap-3 w-full">
              <button
                type="button"
                onClick={() => setShowEditModal(false)}
                className="flex px-3 py-[6px] flex-col justify-center items-center gap-2 rounded-lg border border-[#E5E7EA] bg-[#FAFAFA] text-black text-center text-[14px] font-medium leading-5 font-inter hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleEditConfirm}
                className="flex px-3 py-[6px] flex-col justify-center items-center gap-2 rounded-lg bg-[#829C15] text-white text-center text-[14px] font-medium leading-5 font-inter shadow-[inset_1px_1px_2px_1px_rgba(255,255,255,0.18),inset_-1px_-1px_2px_1px_rgba(255,255,255,0.18)] hover:bg-[#6f8911]"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;
