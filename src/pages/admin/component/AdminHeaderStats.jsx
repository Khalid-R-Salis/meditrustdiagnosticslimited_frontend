import { useState } from "react";
import { motion } from "framer-motion";

const AdminHeaderStats = () => {
  const [visibleTooltip, setVisibleTooltip] = useState(null);

  const filters = ["Today", "This Week", "This Month"];

  const data = [
    {
      value: 100,
      label: "Total Revenue",
      tooltip: "Total money received from cash and transfer",
      breakdown: [
        { name: "Cash received", value: 500, color: "#3C480A" },
        { name: "Transfer received", value: 100, color: "#829C15" },
      ],
    },
    {
      value: 10,
      label: "Total consultations booked",
      tooltip: "Total consultations scheduled (completed + pending)",
      breakdown: [
        { name: "Completed", value: 7, color: "#3C480A" },
        { name: "Pending", value: 3, color: "#829C15" },
      ],
    },
  ];

  return (
    <div className="mb-6">
      <div className="border border-[#E5E7EA] rounded-xl overflow-hidden md:grid md:grid-cols-2 md:gap-6">
        {data.map((item, index) => {
          const total = item.breakdown.reduce((sum, b) => sum + b.value, 0);
          const isFirst = index === 0;
          const isLast = index === data.length - 1;

          return (
            <div
              key={index}
              className={`
                bg-[#FAFAFA] p-6 flex flex-col gap-3 relative
                ${
                  isFirst
                    ? "rounded-t-xl md:rounded-t-none md:rounded-l-xl"
                    : ""
                }
                ${
                  isLast ? "rounded-b-xl md:rounded-b-none md:rounded-r-xl" : ""
                }
                ${!isLast ? "border-b border-[#E5E7EA] md:border-b-0" : ""}
              `}
            >
              {/* Top row: value + filter */}
              <div className="flex justify-between items-center">
                <div className="text-[24px] font-medium leading-[32px] text-[#000] font-inter">
                  {item.label === "Total Revenue"
                    ? `₦${item.value}`
                    : item.value}
                </div>

                <select className="px-2 py-1 text-sm border border-[#E5E7EA] rounded-[8px] focus:outline-none">
                  {filters.map((f) => (
                    <option key={f}>{f}</option>
                  ))}
                </select>
              </div>

              {/* Label + tooltip */}
              <div className="flex items-center gap-2 relative">
                <span className="text-[14px] font-normal leading-[20px] text-[#596066] font-inter">
                  {item.label}
                </span>
                <button
                  onClick={() =>
                    setVisibleTooltip(visibleTooltip === index ? null : index)
                  }
                  className="focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M7.5 7.5L7.52766 7.48617C7.90974 7.29513 8.33994 7.64023 8.23634 8.05465L7.76366 9.94535C7.66006 10.3598 8.09026 10.7049 8.47234 10.5138L8.5 10.5M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8ZM8 5.5H8.005V5.505H8V5.5Z"
                      stroke="#596066"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {visibleTooltip === index && (
                  <div className="absolute top-full left-0 mt-2 z-10 bg-white text-black shadow-[0_5px_15px_rgba(0,0,0,0.12),0_15px_35px_rgba(103,110,118,0.08)] text-xs font-medium leading-[18px] px-3 py-2 rounded-md w-max flex items-start gap-2">
                    <span>{item.tooltip}</span>
                    <button
                      onClick={() => setVisibleTooltip(null)}
                      className="text-gray-500 hover:text-black text-xs ml-2"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>

              {/* Breakdown bar */}
              <div className="w-full h-[3px] bg-gray-100 rounded flex overflow-hidden">
                {item.breakdown.map((b, i) => {
                  let percentage = total ? (b.value / total) * 100 : 0;
                  if (total > 0 && b.value === total) percentage = 100;

                  return (
                    <motion.div
                      key={i}
                      className="h-[3px]"
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                      style={{ backgroundColor: b.color }}
                    />
                  );
                })}
              </div>

              {/* Breakdown labels */}
              <div className="flex flex-col gap-1 mt-2">
                {item.breakdown.map((b, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: b.color }}
                    ></span>
                    <span className="text-[12px] font-normal leading-[18px] text-[#596066] font-inter">
                      {b.name}{" "}
                      {item.label === "Total Revenue"
                        ? `(₦${b.value})`
                        : `(${b.value})`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminHeaderStats;
