import { useState } from "react";
import ReceiptTemplate from "../../../components/receipttemplate";

const RecentPatientsTable = ({ setActiveNav }) => {
  const [showReceipt, setShowReceipt] = useState(false);

  return (
    <div className="flex-1 bg-[#ffffff] px-2 sm:px-4 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[15px] font-normal leading-[24px] text-[#000] font-inter">
          Recent Patient Entries
        </h2>
        <button
          onClick={() => setActiveNav("consultations")}
          className="text-sm font-medium leading-5 text-[#000000] font-inter
            rounded-lg border border-[#E5E7EA] bg-[#FAFAFA]
            flex justify-center items-center
            px-3 py-1.5
            hover:bg-gray-100"
        >
          View all
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto max-h-[500px] scrollbar-thin-green">
        <section className="bg-white scroll-thin-green">
          <table className="min-w-[900px] w-full text-left text-[10px] text-[#676E76] rounded-sm">
            <thead>
              <tr className="border-b font-inter">
                <th className="px-3 py-[7px] font-medium leading-[16px] text-[#676E76] font-inter">
                  Receipt number
                </th>
                <th className="px-3 py-[7px] font-medium leading-[16px] text-[#676E76] font-inter">
                  Patient info
                </th>
                <th className="px-3 py-[7px] font-medium leading-[16px] text-[#676E76] font-inter">
                  Sex
                </th>
                <th className="px-3 py-[7px] font-medium leading-[16px] text-[#676E76] font-inter">
                  Test type
                </th>
                <th className="px-3 py-[7px] font-medium leading-[16px] text-[#676E76] font-inter">
                  Date & Time
                </th>
                <th className="px-3 py-[7px] font-medium leading-[16px] text-[#676E76] font-inter">
                  Amount paid
                </th>
                <th className="px-3 py-[7px] font-medium leading-[16px] text-[#676E76] font-inter"></th>
              </tr>
            </thead>

            <tbody>
              {[...Array(7)].map((_, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="px-3 py-[5px] text-[#000] text-[12px] font-medium leading-[16px] font-inter truncate max-w-[100px]">
                    #3266
                  </td>

                  <td className="px-3 py-[5px]">
                    <div className="flex flex-col space-y-[1px]">
                      <span className="font-medium leading-[16px] text-[#000] font-inter">
                        Khalid Rabiu
                      </span>
                      <span className="font-normal leading-[16px] text-[#676E76] font-inter">
                        09099999999
                      </span>
                    </div>
                  </td>

                  <td className="px-3 py-[5px]">Male</td>

                  <td className="px-3 py-[5px] truncate max-w-[150px]">
                    FOLLICLE STIMULATING HORMONE
                  </td>

                  <td className="px-3 py-[5px]">16, Jun 2025 - 11:00 AM</td>

                  <td className="px-3 py-[5px]">₦50,0000 (transfer)</td>

                  <td className="px-3 py-[5px]">
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
