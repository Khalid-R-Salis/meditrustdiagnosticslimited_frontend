import { useState } from "react";
import HeaderStats from "./ltheaderstats";
import ReceiptTemplate from "../../../components/receipttemplate";

const OverviewPage = () => {
  const [showReceipt, setShowReceipt] = useState(false);

  return (
    <div
      className={`flex w-full ${showReceipt ? "overflow-hidden h-screen" : ""}`}
    >
      {/* Main content */}
      <div className="flex-1 bg-[#ffffff] py-8 px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 relative ">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-[24px] font-semibold leading-[32px] text-black font-inter">
            Overview
          </h1>
        </div>

        <HeaderStats />

        <div className="flex justify-between items-center mb-2">
          <h2 className="text-[16px] font-normal leading-6 text-primary-black font-inter">
            Recent Patient Entries
          </h2>
        </div>

        <section className="bg-white p-4 overflow-auto">
          <table className="w-full text-left text-[12px] text-[#676E76] rounded-sm">
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
                <th className="bg-[#FAFAFA] p-5 rounded-tr-lg"></th>
              </tr>
            </thead>

            <tbody>
              {[...Array(7)].map((_, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="text-[#000] text-[12px] font-medium leading-[18px] font-inter px-5 py-4 max-w-[100px] truncate">
                    #3266
                  </td>

                  <td className="flex-col items-start justify-center py-4 max-w-[140px] truncate">
                    Khalid Rabiu – 09099999999
                  </td>

                  <td className="px-5 py-4 max-w-[60px] truncate">Male</td>

                  <td className="px-5 py-4 max-w-[140px] truncate">
                    FOLLICLE STIMULATING HORMONE
                  </td>

                  <td className="px-5 py-4 max-w-[160px] truncate">
                    16, Jun 2025 - 11:00 AM
                  </td>

                  <td className="px-5 py-4 max-w-[120px] truncate">
                    ₦50,0000 (transfer)
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

export default OverviewPage;
