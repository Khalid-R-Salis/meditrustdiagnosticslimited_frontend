import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/sidebar";
import HeaderStats from "../../../components/headerstats";

import ConsultationForm from "../../../components/consultationform";
import ReceiptTemplate from "../../../components/receipttemplate";

const OverviewPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);

  const handleLogout = () => console.log("Logging out");
  const handleUpdatePassword = () => console.log("Updating password");

  const handleConfirmConsultation = (data) => {
    console.log("Confirmed consultation:", data);
    setShowForm(false);
  };

  return (
    <div
      className={`flex ${
        showForm || showReceipt ? "overflow-hidden h-screen" : ""
      }`}
    >
      <Sidebar
        onLogout={handleLogout}
        onUpdatePassword={handleUpdatePassword}
      />

      <div className="flex-1 bg-[#ffffff] py-8 px-[100px] relative">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-[24px] font-semibold leading-[32px] text-black font-inter">
            Overview
          </h1>

          <button
            className="text-white text-center font-medium text-[14px] leading-[20px] font-inter 
             flex items-center justify-center gap-2 
             px-3 py-[6px] rounded-[8px] 
             bg-[#829C15] shadow-[inset_1px_1px_2px_1px_rgba(255,255,255,0.18),inset_-1px_-1px_2px_1px_rgba(255,255,255,0.18)] 
             hover:bg-[#6f8612]"
            onClick={() => setShowForm(true)}
          >
            + New Consultation
          </button>
        </div>

        <HeaderStats />

        <div className="flex justify-between items-center mb-2">
          <h2 className="text-[16px] font-normal leading-6 text-primary-black font-inter">
            Recent Patient Entries
          </h2>

          <Link to="/authforms/contactadmin">
            <button
              className="
                flex flex-col justify-center items-start gap-2 
                px-3 py-1.5 
                rounded-lg 
                border border-[#E5E7EA] 
                bg-[#FAFAFA] 
                text-[#000] 
                text-sm font-medium leading-5 
                text-center 
                font-inter
              "
            >
              View all
            </button>
          </Link>
        </div>

        <section className="bg-white p-4">
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
                  <td className="text-[#000] text-[12px] font-medium leading-[18px] font-inter px-5 py-4 max-w-[100px] truncate overflow-hidden whitespace-nowrap">
                    #3266
                  </td>

                  <td className="flex-col items-start justify-center py-4 max-w-[140px] truncate overflow-hidden whitespace-nowrap">
                    Khalid Rabiu – 09099999999
                  </td>

                  <td className="px-5 py-4 max-w-[60px] truncate overflow-hidden whitespace-nowrap">
                    Male
                  </td>

                  <td className="px-5 py-4 max-w-[140px] truncate overflow-hidden whitespace-nowrap">
                    FOLLICLE STIMULATING HORMONE
                  </td>

                  <td className="px-5 py-4 max-w-[160px] truncate overflow-hidden whitespace-nowrap">
                    16, Jun 2025 - 11:00 AM
                  </td>

                  <td className="px-5 py-4 max-w-[120px] truncate overflow-hidden whitespace-nowrap">
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

      {/* Modal Form */}
      {showForm && (
        <ConsultationForm
          onClose={() => setShowForm(false)}
          onConfirm={handleConfirmConsultation}
        />
      )}

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
