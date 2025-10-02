// import { useState, useEffect } from "react";

// const HeaderStats = () => {
//   const filters = ["Today", "This Week", "This Month"];
//   const data = [
//     {
//       label: "Patients consulted",
//       value: "100",
//       tooltip: "Total number of patients you have consulted",
//       hasFilter: true,
//     },
//     {
//       label: "Cash received",
//       value: "₦200,000",
//       tooltip: "Total amount of cash you have received",
//       hasFilter: true,
//     },
//     {
//       label: "Funds via bank transfer",
//       value: "₦150,000",
//       tooltip: "Total amount patients have transferred",
//       hasFilter: true,
//     },
//   ];

//   const [visibleTooltip, setVisibleTooltip] = useState(null);
//   const [viewMode, setViewMode] = useState("desktop"); // desktop | tablet | mobile

//   // detect screen size in mm (approx)
//   useEffect(() => {
//     const handleResize = () => {
//       const widthMm = window.innerWidth / 3.78;
//       const heightMm = window.innerHeight / 3.78;

//       if (widthMm <= 100) {
//         setViewMode("mobile");
//       } else if (widthMm >= 260 && heightMm >= 170) {
//         setViewMode("desktop");
//       } else {
//         setViewMode("tablet");
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div
//       className={`flex ${
//         viewMode === "mobile" ? "flex-row" : "flex-col md:flex-row"
//       } items-stretch justify-between bg-[#FAFAFA] border border-[#E5E7EA] rounded-[16px] px-4 py-6 shadow mb-6 mt-12`}
//     >
//       {data.map((item, index) => (
//         <div
//           key={index}
//           className={`flex items-center justify-between relative ${
//             viewMode === "mobile" ? "flex-1 px-2" : "md:flex-1 w-full"
//           }`}
//         >
//           {/* Group 3 */}
//           <div
//             className={`flex flex-col gap-[3px] w-full ${
//               viewMode === "tablet" ? "text-sm" : ""
//             }`}
//           >
//             {/* Group 1:  */}
//             <div className="flex items-center justify-between gap-4">
//               <div
//                 className={`font-bold ${
//                   viewMode === "tablet" ? "text-lg" : "text-2xl"
//                 }`}
//               >
//                 {item.value}
//               </div>
//               {item.hasFilter && (
//                 <select
//                   className="px-[8px] py-[8px] text-[14px] font-normal leading-[20px] text-[#596066] bg-white border border-[#E5E7EA] rounded-[8px] shadow-sm focus:outline-none"
//                   onChange={() => {}}
//                 >
//                   {filters.map((f) => (
//                     <option
//                       key={f}
//                       className="bg-white hover:bg-[#F8FCE9] text-[#596066] px-2 py-1"
//                     >
//                       {f}
//                     </option>
//                   ))}
//                 </select>
//               )}
//             </div>

//             {/* Group 2:  */}
//             <div className="flex items-center gap-1 text-sm text-[#596066]">
//               <span>{item.label}</span>
//               <button
//                 onClick={() =>
//                   setVisibleTooltip(visibleTooltip === index ? null : index)
//                 }
//                 className="focus:outline-none"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                 >
//                   <path
//                     d="M7.5 7.5L7.52766 7.48617C7.90974 7.29513 8.33994 7.64023 8.23634 8.05465L7.76366 9.94535C7.66006 10.3598 8.09026 10.7049 8.47234 10.5138L8.5 10.5M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8ZM8 5.5H8.005V5.505H8V5.5Z"
//                     stroke="#596066"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </button>
//             </div>

//             {/* Tooltip */}
//             {visibleTooltip === index && (
//               <div className="absolute top-full z-10 bg-white text-black shadow-[0_5px_15px_rgba(0,0,0,0.12),0_15px_35px_rgba(103,110,118,0.08)] text-[12px] font-medium leading-[18px] px-3 py-2 rounded-md w-max mt-1 flex items-start gap-2">
//                 <span>{item.tooltip}</span>
//                 <button
//                   onClick={() => setVisibleTooltip(null)}
//                   className="text-gray-500 hover:text-black text-xs ml-2"
//                 >
//                   ✕
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Dividers */}
//           {index < data.length - 1 && (
//             <>
//               {viewMode !== "mobile" ? (
//                 // Vertical divider for desktop/tablet
//                 <div className="hidden md:flex mx-[20px] h-full items-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="2"
//                     height="70"
//                     viewBox="0 0 2 70"
//                     fill="none"
//                   >
//                     <path
//                       d="M1 1V69"
//                       stroke="#E5E7EA"
//                       strokeLinecap="round"
//                       strokeWidth="1"
//                     />
//                   </svg>
//                 </div>
//               ) : (
//                 // Horizontal divider for mobile
//                 <div className="w-px h-full bg-[#E5E7EA] mx-2"></div>
//               )}
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HeaderStats;'

import { useState } from "react";

const HeaderStats = () => {
  const filters = ["Today", "This Week", "This Month"];
  const data = [
    {
      label: "Patients consulted",
      value: "100",
      tooltip: "Total number of patients you have consulted",
      hasFilter: true,
    },
    {
      label: "Cash received",
      value: "₦200,000",
      tooltip: "Total amount of cash you have received",
      hasFilter: true,
    },
    {
      label: "Funds via bank transfer",
      value: "₦150,000",
      tooltip: "Total amount patients have transferred",
      hasFilter: true,
    },
  ];

  const [visibleTooltip, setVisibleTooltip] = useState(null);

  return (
    <div className="flex flex-wrap justify-between items-center gap-4 w-full mb-6 mt-12 ">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col bg-[#FAFAFA] border border-[#E5E7EA] rounded-[16px] px-4 py-6 shadow flex-1 min-w-[250px] max-w-sm"
        >
          {/* Group 1: Value + Filter */}
          <div className="flex items-center justify-between gap-4">
            <div className="font-bold text-2xl">{item.value}</div>
            {item.hasFilter && (
              <select
                className="px-[8px] py-[8px] text-[14px] font-normal leading-[20px] text-[#596066] bg-white border border-[#E5E7EA] rounded-[8px] shadow-sm focus:outline-none"
                onChange={() => {}}
              >
                {filters.map((f) => (
                  <option key={f}>{f}</option>
                ))}
              </select>
            )}
          </div>

          {/* Group 2: Label + Tooltip */}
          <div className="flex items-center gap-1 text-sm text-[#596066] relative mt-2">
            <span>{item.label}</span>
            <button
              onClick={() =>
                setVisibleTooltip(visibleTooltip === index ? null : index)
              }
              className="focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.5 7.5L7.52766 7.48617C7.90974 7.29513 8.33994 7.64023 8.23634 8.05465L7.76366 9.94535C7.66006 10.3598 8.09026 10.7049 8.47234 10.5138L8.5 10.5M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8ZM8 5.5H8.005V5.505H8V5.5Z"
                  stroke="#596066"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Tooltip */}
            {visibleTooltip === index && (
              <div className="absolute top-full left-0 z-10 bg-white text-black shadow-[0_5px_15px_rgba(0,0,0,0.12),0_15px_35px_rgba(103,110,118,0.08)] text-[12px] font-medium leading-[18px] px-3 py-2 rounded-md w-max mt-1 flex items-start gap-2">
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
        </div>
      ))}
    </div>
  );
};

export default HeaderStats;
