import React, { useState, useEffect, useMemo } from "react";

const MainUserActivities = ({ isOpen, onClose }) => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 10;

  // (replace with API call when fahad is done)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // simulate API call
        const mockData = Array.from({ length: 20 }, (_, i) => ({
          id: i + 1,
          user:
            i % 2 === 0
              ? "Nwankwo paschal (Receptionist)"
              : "Nwankwo paschal (Lab Technician)",
          action:
            i % 2 === 0
              ? [
                  { type: "text", value: "Generated a receipt of " },
                  { type: "highlight", value: "₦4,000 (Cash)" },
                  { type: "text", value: " for " },
                  {
                    type: "highlight",
                    value: "FOLLICLE STIMULATING HORMONE (FSH)",
                  },
                ]
              : [
                  { type: "text", value: "uploaded a test result for " },
                  {
                    type: "highlight",
                    value: "FOLLICLE STIMULATING HORMONE (FSH)",
                  },
                ],
          date: "16, Jun 2025 • 11:00 AM",
        }));

        // simulate network delay
        setTimeout(() => {
          setActivities(mockData);
          setLoading(false);
        }, 600);
      } catch (err) {
        setError("Failed to load activities.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredActivities = useMemo(() => {
    return activities.filter((item) =>
      item.user.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, activities]);

  const totalPages = Math.ceil(filteredActivities.length / perPage) || 1;
  const paginated = filteredActivities.slice(
    (page - 1) * perPage,
    page * perPage
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div
        className="flex flex-col w-[1000px] rounded-lg bg-white shadow-md"
        style={{
          padding: "16px",
          gap: "16px",
          boxShadow:
            "0 2px 5px 0 rgba(103, 110, 118, 0.08), 0 0 0 1px rgba(103, 110, 118, 0.16), 0 1px 1px 0 rgba(0, 0, 0, 0.12)",
        }}
      >
        <div className="flex justify-between items-center">
          <h2
            className="text-[#000]"
            style={{
              fontFamily: "Inter",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "24px",
            }}
          >
            User activities
          </h2>
          <button onClick={onClose} className="pl-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5 15.0098L15 5.00977M5 5.00977L15 15.0098"
                stroke="#596066"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="flex">
          <input
            type="text"
            placeholder="Search a name"
            value={search}
            onChange={(e) => {
              setPage(1);
              setSearch(e.target.value);
            }}
            className="px-3 py-1.5 border rounded-lg text-md focus:outline-gray-300"
            style={{
              display: "flex",
              width: "258px",
              padding: "6px 12px 6px 8px",
              alignItems: "center",
              gap: "8px",
              borderRadius: "8px",
              border: "1px solid #829C15",
              background: "#FFF",
            }}
          />
        </div>

        <div className="flex-1 overflow-y-auto">
          {loading ? (
            <p className="text-gray-500 text-center">Loading activities...</p>
          ) : error ? (
            <p className="text-red-500 text-center">{error}</p>
          ) : paginated.length === 0 ? (
            <p className="text-gray-500 text-center">No activities found.</p>
          ) : (
            <ul className="space-y-4">
              {paginated.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-start text-sm"
                >
                  <div className="flex items-start gap-3">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                            <path opacity="0.12" d="M2 4.8C2 4.05 2 3.68 2.15 3.39c.12-.25.32-.45.58-.58.28-.15.65-.15 1.4-.15h7.73c.75 0 1.12 0 1.41.15.25.13.45.33.58.58.15.29.15.66.15 1.41v5.87h-3.56c-.16 0-.24 0-.32.02a.64.64 0 0 0-.19.08c-.07.05-.12.1-.24.22l-.04.04c-.11.11-.16.17-.23.21-.06.04-.13.07-.2.09-.07.02-.15.02-.31.02H7.11c-.16 0-.24 0-.31-.02a.64.64 0 0 1-.2-.09c-.07-.04-.12-.1-.23-.21l-.04-.04c-.11-.11-.16-.17-.23-.22a.64.64 0 0 0-.19-.08c-.08-.02-.16-.02-.32-.02H2V4.8Z" fill="#829C15"/>
                            <path d="M2 10.67V4.8c0-.75 0-1.12.15-1.41.13-.25.33-.45.58-.58.28-.15.65-.15 1.4-.15h7.74c.74 0 1.11 0 1.4.15.25.13.45.33.58.58.15.29.15.66.15 1.41v5.87h-3.56c-.16 0-.24 0-.32.02a.64.64 0 0 0-.19.08c-.07.05-.12.1-.24.22l-.04.04c-.11.11-.16.17-.23.21-.06.04-.13.07-.2.09-.07.02-.15.02-.31.02H7.11c-.16 0-.24 0-.31-.02a.64.64 0 0 1-.2-.09c-.07-.04-.12-.1-.23-.21l-.04-.04c-.11-.11-.16-.17-.23-.22a.64.64 0 0 0-.19-.08c-.08-.02-.16-.02-.32-.02H2Zm0 0c-.37 0-.67.3-.67.67v.22c0 .41 0 .62.05.79a1.33 1.33 0 0 0 .99.99c.17.05.38.05.8.05h9.78c.41 0 .62 0 .79-.05.46-.12.85-.51.98-.99.05-.17.05-.38.05-.8 0-.2 0-.3-.02-.38a.67.67 0 0 0-.47-.47c-.09-.02-.19-.02-.4-.02H13.33" stroke="#829C15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>`,
                      }}
                    />
                    <p className="text-[16px] font-inter leading-6 text-[#000]">
                      <span className="font-medium">{item.user}</span>{" "}
                      {item.action.map((part, idx) =>
                        part.type === "highlight" ? (
                          <span key={idx} className="font-medium text-[#000]">
                            {part.value}
                          </span>
                        ) : (
                          <span key={idx} className="text-[#676E76]">
                            {part.value}
                          </span>
                        )
                      )}
                    </p>
                  </div>

                  <span className="text-[14px] text-[#676E76] font-inter whitespace-nowrap ml-[20px]">
                    {item.date}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center pt-4">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            className={`flex items-center justify-center rounded-lg border font-extrabold ${
              page === 1
                ? "text-gray-400 border-gray-200 cursor-not-allowed"
                : "border-[#E5E7EA] hover:bg-gray-100"
            }`}
            style={{
              display: "flex",
              padding: "6px",
              height: "40px",
              width: "40px",
              fontSize: "28px",
            }}
          >
            &larr;
          </button>

          <span
            style={{
              color: "#454C52",
              textAlign: "center",
              fontFamily: "Inter",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "20px",
            }}
          >
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            className={`flex items-center justify-center rounded-lg border font-extrabold ${
              page === totalPages
                ? "text-gray-400 border-gray-200 cursor-not-allowed"
                : "border-[#E5E7EA] hover:bg-gray-100"
            }`}
            style={{
              display: "flex",
              padding: "6px",
              height: "40px",
              width: "40px",
              fontSize: "28px",
            }}
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainUserActivities;
