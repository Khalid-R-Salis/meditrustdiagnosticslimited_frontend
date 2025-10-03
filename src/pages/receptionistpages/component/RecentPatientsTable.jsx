// import { useState } from "react";
// import ReceiptTemplate from "../../../components/receipttemplate";

// const RecentPatientsTable = ({ setActiveNav }) => {
//   const [showReceipt, setShowReceipt] = useState(false);

//   return (
//     <div className="flex-1 bg-[#ffffff] px-2 sm:px-4 relative">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-[16px] sm:text-[20px] font-normal leading-[24px] text-[#000] font-inter">
//           Recent Patient Entries
//         </h2>

//         <button
//           onClick={() => setActiveNav("consultations")}
//           className="text-sm sm:text-[18px] font-medium leading-5 text-[#000000] font-inter
//             rounded-lg border border-[#E5E7EA] bg-[#FAFAFA]
//             flex justify-center items-center
//             px-3 py-1.5
//             md:px-4 md:py-2
//             hover:bg-gray-100"
//         >
//           View all
//         </button>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto max-h-[calc(100vh-370px)] scrollbar-thin-green">
//         <section className="bg-white scroll-thin-green">
//           <table className="min-w-[900px] w-full text-left text-[10px] text-[#676E76] rounded-sm">
//             <thead>
//               <tr className="border-b font-inter text-[18px]">
//                 <th className="px-3 py-[7px] font-medium leading-[16px] text-[#676E76] font-inter">
//                   Receipt number
//                 </th>
//                 <th className="px-3 py-[7px] font-medium leading-[16px] text-[#676E76] font-inter">
//                   Patient info
//                 </th>
//                 <th className="px-3 py-[7px] font-medium leading-[16px] text-[#676E76] font-inter">
//                   Sex
//                 </th>
//                 <th className="px-3 py-[7px] font-medium leading-[16px] text-[#676E76] font-inter">
//                   Test type
//                 </th>
//                 <th className="px-3 py-[7px] font-medium leading-[16px] text-[#676E76] font-inter">
//                   Date & Time
//                 </th>
//                 <th className="px-3 py-[7px] font-medium leading-[16px] text-[#676E76] font-inter">
//                   Amount paid
//                 </th>
//                 <th className="px-3 py-[7px] font-medium leading-[16px] text-[#676E76] font-inter"></th>
//               </tr>
//             </thead>

//             <tbody>
//               {[...Array(7)].map((_, i) => (
//                 <tr key={i} className="border-b hover:bg-gray-50">
//                   <td className="px-3 py-[5px] text-[#000] text-[18px] font-medium leading-[16px] font-inter truncate max-w-[100px]">
//                     #3266
//                   </td>

//                   <td className="px-3 py-[10px] text-[18px]">
//                     <div className="flex flex-col space-y-[1px]">
//                       <span className="font-medium leading-[16px] text-[#000] font-inter">
//                         Khalid Rabiu
//                       </span>
//                       <span className="font-normal leading-[16px] text-[#676E76] font-inter">
//                         09099999999
//                       </span>
//                     </div>
//                   </td>

//                   <td className="px-3 py-[10px] text-[18px]">Male</td>

//                   <td className="px-3 py-[10px] text-[18px] truncate max-w-[150px]">
//                     FOLLICLE STIMULATING HORMONE
//                   </td>

//                   <td className="px-3 py-[10px] text-[18px]">
//                     16, Jun 2025 - 11:00 AM
//                   </td>

//                   <td className="px-3 py-[10px] text-[18px]">
//                     ₦50,0000 (transfer)
//                   </td>

//                   <td className="px-3 py-[10px] text-[18px]">
//                     <button
//                       className="text-[#829C15] font-medium"
//                       onClick={() => setShowReceipt(true)}
//                     >
//                       View
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </section>
//       </div>

//       {/* Receipt Modal */}
//       {showReceipt && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-hidden">
//           <div className="mt-10 bg-white p-6 rounded-lg shadow-lg relative scale-[1.5] sm:scale-[1.8]">
//             <button
//               className="absolute top-2 right-2 text-gray-600 text-sm"
//               onClick={() => setShowReceipt(false)}
//             >
//               ✕
//             </button>
//             <ReceiptTemplate />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RecentPatientsTable;

import { useState } from "react";
import ReceiptTemplate from "../../../components/receipttemplate";

const RecentPatientsTable = ({ setActiveNav }) => {
  const [showReceipt, setShowReceipt] = useState(false);

  //Dummy patient data
  const patients = [
    {
      receipt: "#3266",
      name: "Khalid Rabiu",
      phone: "09099999999",
      sex: "Male",
      test: "FOLLICLE STIMULATING HORMONE",
      datetime: "16, Jun 2025 - 11:00 AM",
      amount: "₦50,000 (transfer)",
    },
    {
      receipt: "#3267",
      name: "Aisha Bello",
      phone: "08012345678",
      sex: "Female",
      test: "LUTEINIZING HORMONE (LH)",
      datetime: "16, Jun 2025 - 12:30 PM",
      amount: "₦35,000 (cash)",
    },
    {
      receipt: "#3268",
      name: "John Doe",
      phone: "07011111111",
      sex: "Male",
      test: "PROLACTIN (PRL)",
      datetime: "17, Jun 2025 - 09:15 AM",
      amount: "₦20,000 (POS)",
    },
    {
      receipt: "#3269",
      name: "Maryam Yusuf",
      phone: "08022223333",
      sex: "Female",
      test: "OTHER TEST1",
      datetime: "17, Jun 2025 - 10:00 AM",
      amount: "₦10,000 (transfer)",
    },
  ];

  return (
    <div className="flex-1 bg-[#ffffff] px-2 sm:px-4 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[16px] sm:text-[20px] font-normal leading-[24px] text-[#000] font-inter">
          Recent Patient Entries
        </h2>

        <button
          onClick={() => setActiveNav("consultations")}
          className="text-sm sm:text-[18px] font-medium leading-5 text-[#000000] font-inter
            rounded-lg border border-[#E5E7EA] bg-[#FAFAFA]
            flex justify-center items-center
            px-3 py-1.5
            md:px-4 md:py-2
            hover:bg-gray-100"
        >
          View all
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto max-h-[calc(100vh-365px)] scrollbar-thin-green">
        <section className="bg-white scroll-thin-green">
          <table className="min-w-[900px] w-full text-left text-[10px] text-[#676E76] rounded-sm">
            <thead>
              <tr className="border-b font-inter text-[18px]">
                <th className="px-3 py-[7px] font-medium">Receipt number</th>
                <th className="px-3 py-[7px] font-medium">Patient info</th>
                <th className="px-3 py-[7px] font-medium">Sex</th>
                <th className="px-3 py-[7px] font-medium">Test type</th>
                <th className="px-3 py-[7px] font-medium">Date & Time</th>
                <th className="px-3 py-[7px] font-medium">Amount paid</th>
                <th className="px-3 py-[7px] font-medium"></th>
              </tr>
            </thead>

            <tbody>
              {patients.map((p, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="px-3 py-[5px] text-[#000] text-[18px] font-medium truncate max-w-[100px]">
                    {p.receipt}
                  </td>

                  <td className="px-3 py-[10px] text-[18px]">
                    <div className="flex flex-col space-y-[1px]">
                      <span className="font-medium text-[#000] font-inter">
                        {p.name}
                      </span>
                      <span className="font-normal text-[#676E76] font-inter">
                        {p.phone}
                      </span>
                    </div>
                  </td>

                  <td className="px-3 py-[10px] text-[18px]">{p.sex}</td>

                  <td className="px-3 py-[10px] text-[18px] truncate max-w-[150px]">
                    {p.test}
                  </td>

                  <td className="px-3 py-[10px] text-[18px]">{p.datetime}</td>

                  <td className="px-3 py-[10px] text-[18px]">{p.amount}</td>

                  <td className="px-3 py-[10px] text-[18px]">
                    <button
                      className="text-[#829C15] font-medium"
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

export default RecentPatientsTable;
