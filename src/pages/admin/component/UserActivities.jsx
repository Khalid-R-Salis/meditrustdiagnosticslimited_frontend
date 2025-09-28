const activities = [
  {
    id: 1,
    user: "Nwankwo paschal (Receptionist)",
    action: [
      { type: "text", value: "Generated a receipt of " },
      { type: "highlight", value: "₦4,000 (Cash)" },
      { type: "text", value: " for " },
      { type: "highlight", value: "FOLLICLE STIMULATING HORMONE (FSH)" },
    ],
    date: "16, Jun 2025 • 11:00 AM",
  },
  {
    id: 2,
    user: "Nwankwo paschal (Lab Technician)",
    action: [
      { type: "text", value: "uploaded a test result for " },
      { type: "highlight", value: "FOLLICLE STIMULATING HORMONE (FSH)" },
    ],
    date: "16, Jun 2025 • 11:00 AM",
  },
  {
    id: 3,
    user: "Nwankwo paschal (Lab Technician)",
    action: [
      { type: "text", value: "uploaded a test result for " },
      { type: "highlight", value: "FOLLICLE STIMULATING HORMONE (FSH)" },
    ],
    date: "16, Jun 2025 • 11:00 AM",
  },
];

const UserActivities = ({ setActiveNav }) => {
  return (
    <div className="mt-8 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[15px] font-normal leading-[24px] text-[#000] font-inter">
          User activities
        </h2>
        <button
          onClick={() => setActiveNav("UserManagement")}
          className="
          text-sm font-medium leading-5 text-[#000000] font-inter
          rounded-lg border border-[#E5E7EA] bg-[#FAFAFA]
          flex justify-center items-center
          px-3 py-1.5
          hover:bg-gray-100
        "
        >
          View all
        </button>
      </div>

      <div className="overflow-y-auto max-h-[50px] pr-2">
        <ul className="space-y-4">
          {activities.map((item) => (
            <li key={item.id} className="flex justify-between items-start">
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: `
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                    <path opacity="0.12" d="M2 4.8C2 4.05 2 3.68 2.15 3.39c.12-.25.32-.45.58-.58.28-.15.65-.15 1.4-.15h7.73c.75 0 1.12 0 1.41.15.25.13.45.33.58.58.15.29.15.66.15 1.41v5.87h-3.56c-.16 0-.24 0-.32.02a.64.64 0 0 0-.19.08c-.07.05-.12.1-.24.22l-.04.04c-.11.11-.16.17-.23.21-.06.04-.13.07-.2.09-.07.02-.15.02-.31.02H7.11c-.16 0-.24 0-.31-.02a.64.64 0 0 1-.2-.09c-.07-.04-.12-.1-.23-.21l-.04-.04c-.11-.11-.16-.17-.23-.22a.64.64 0 0 0-.19-.08c-.08-.02-.16-.02-.32-.02H2V4.8Z" fill="#829C15"/>
                    <path d="M2 10.67V4.8c0-.75 0-1.12.15-1.41.13-.25.33-.45.58-.58.28-.15.65-.15 1.4-.15h7.74c.74 0 1.11 0 1.4.15.25.13.45.33.58.58.15.29.15.66.15 1.41v5.87h-3.56c-.16 0-.24 0-.32.02a.64.64 0 0 0-.19.08c-.07.05-.12.1-.24.22l-.04.04c-.11.11-.16.17-.23.21-.06.04-.13.07-.2.09-.07.02-.15.02-.31.02H7.11c-.16 0-.24 0-.31-.02a.64.64 0 0 1-.2-.09c-.07-.04-.12-.1-.23-.21l-.04-.04c-.11-.11-.16-.17-.23-.22a.64.64 0 0 0-.19-.08c-.08-.02-.16-.02-.32-.02H2Zm0 0c-.37 0-.67.3-.67.67v.22c0 .41 0 .62.05.79a1.33 1.33 0 0 0 .99.99c.17.05.38.05.8.05h9.78c.41 0 .62 0 .79-.05.46-.12.85-.51.98-.99.05-.17.05-.38.05-.8 0-.2 0-.3-.02-.38a.67.67 0 0 0-.47-.47c-.09-.02-.19-.02-.4-.02H13.33" stroke="#829C15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                `,
                  }}
                />

                <p className="text-[10px] font-inter leading-[18px] overflow-hidden text-ellipsis">
                  <span className="font-medium text-[#000]">{item.user}</span>{" "}
                  {item.action.map((part, idx) =>
                    part.type === "highlight" ? (
                      <span
                        key={idx}
                        className="font-medium text-[#000] overflow-hidden text-ellipsis"
                      >
                        {part.value}
                      </span>
                    ) : (
                      <span
                        key={idx}
                        className="text-[#676E76] overflow-hidden text-ellipsis"
                      >
                        {part.value}
                      </span>
                    )
                  )}
                </p>
              </div>

              <span className="text-[10px] text-[#676E76] font-inter whitespace-nowrap">
                {item.date}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserActivities;
