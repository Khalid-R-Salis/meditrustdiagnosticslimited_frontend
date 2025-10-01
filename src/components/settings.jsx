import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DotsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <path
      d="M6.75 12C6.75 12.4142 6.41421 12.75 6 12.75C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25C6.41421 11.25 6.75 11.5858 6.75 12Z"
      stroke="#596066"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.75 12C12.75 12.4142 12.4142 12.75 12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25C12.4142 11.25 12.75 11.5858 12.75 12Z"
      stroke="#596066"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.75 12C18.75 12.4142 18.4142 12.75 18 12.75C17.5858 12.75 17.25 12.4142 17.25 12C17.25 11.5858 17.5858 11.25 18 11.25C18.4142 11.25 18.75 11.5858 18.75 12Z"
      stroke="#596066"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Settings = () => {
  const [showDotsMenu, setShowDotsMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const navigate = useNavigate();

  const toggleDotsMenu = () => setShowDotsMenu(!showDotsMenu);
  const handleLogoutClick = () => {
    setShowDotsMenu(false);
    setShowLogoutModal(true);
  };
  const handleChangePasswordClick = () => {
    setShowDotsMenu(false);
    setShowChangePasswordModal(true);
  };
  const handleLogoutConfirm = () => {
    setShowLogoutModal(false);
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  const handleLogoutCancel = () => setShowLogoutModal(false);

  const handleChangePasswordSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setPasswordMismatch(true);
      return;
    }
    alert("Password changed!");
    setShowChangePasswordModal(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setPasswordMismatch(false);
  };

  const handleChangePasswordCancel = () => {
    setShowChangePasswordModal(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setPasswordMismatch(false);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    setPasswordMismatch(false);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMismatch(false);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-start self-stretch p-[12px] rounded-[8px] border border-[#CED2D6] bg-white mb-6 relative">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-5 min-w-0 w-full">
            <span
              className="flex-1 min-w-0 truncate text-[#596066] text-[16px] sm:text-[15px] font-inter font-[400] leading-[24px] text-left cursor-default"
              title="Nwankwo paschal"
            >
              Nwankwo paschal
            </span>
            <button
              type="button"
              className="p-1 rounded hover:bg-gray-100 transition relative z-10"
              onClick={toggleDotsMenu}
            >
              <span title="Click to open settings" role="button" tabIndex={0}>
                <DotsIcon />
              </span>
            </button>
          </div>
        </div>
        <span
          className="text-[#9EA5AD] text-[14px] font-inter font-[400] leading-[20px] truncate w-full text-left cursor-default"
          title="nwakwopaschal017@gmail.com"
        >
          nwakwopaschalkwak017@gmail.com
        </span>

        {showDotsMenu && (
          <div
            className="fixed inset-0 z-20"
            onClick={() => setShowDotsMenu(false)}
          >
            <div
              className="absolute left-[120px] bottom-[100px] w-[160px] font-inter text-sm rounded-lg border border-[#E5E7EA] bg-white shadow-[0_1px_16px_0_rgba(0,0,0,0.12)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="w-full px-4 py-2 text-left mb-2 hover:bg-gray-100 text-[#596066] font-inter text-[14px] font-normal leading-[20px]"
                onClick={handleLogoutClick}
              >
                Log Out
              </button>
              <button
                className="w-full px-4 py-2 text-left hover:bg-gray-100 text-[#596066] font-inter text-[14px] font-normal leading-[20px]"
                onClick={handleChangePasswordClick}
              >
                Change Password
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleLogoutCancel}
        >
          <div
            className="bg-white rounded-lg p-10 w-[90%] max-w-sm shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-[#596066] font-inter text-[16px] font-semibold leading-[24px] mb-4">
              Are you sure you want to logout?
            </h2>
            <p className="text-[#676E76] font-inter text-[14px] font-normal leading-[20px] mb-6">
              Your session wouldn’t be saved. Be sure to complete whatever you
              are doing
            </p>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 rounded-lg border border-[#E5E7EA] bg-[#FAFAFA] hover:bg-gray-300"
                onClick={handleLogoutCancel}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-[#CD3636] text-white shadow hover:bg-red-700"
                onClick={handleLogoutConfirm}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Change Password Modal */}
      {showChangePasswordModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleChangePasswordCancel}
        >
          <form
            className="bg-white rounded-lg py-8 px-6 sm:px-[48px] w-[90%] max-w-md shadow-lg relative flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleChangePasswordSubmit}
          >
            <div className="absolute top-8 left-6 hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.375 9.375L9.40957 9.35771C9.88717 9.11891 10.4249 9.55029 10.2954 10.0683L9.70458 12.4317C9.57507 12.9497 10.1128 13.3811 10.5904 13.1423L10.625 13.125M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10ZM10 6.875H10.0063V6.88125H10V6.875Z"
                  stroke="#596066"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="flex flex-col gap-2 items-start mb-4">
              <h2 className="text-[#596066] font-inter text-base font-semibold leading-6">
                Change your password
              </h2>
              <p className="text-[#676E76] font-inter text-sm font-normal leading-5">
                Confirm your password to create a new one. Be sure to remember
                your password
              </p>
            </div>

            <label className="flex flex-col justify-start gap-2 text-sm text-[#454C52] font-inter font-[400]">
              Current Password
              <input
                type="password"
                placeholder="Enter your password"
                required
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="px-[14px] py-[10px] border-gray-300 rounded-lg bg-white 
             shadow-[0_2px_5px_rgba(103,110,118,0.08),0_0_0_1px_rgba(103,110,118,0.16),0_1px_1px_rgba(0,0,0,0.12)] 
             focus:outline-none focus:ring-1 focus:ring-[#829C15]"
              />
            </label>

            <div className="border-t border-[#E5E7EA] my-4"></div>

            <label className="flex flex-col justify-start gap-2 text-sm text-[#454C52] font-inter font-[400]">
              New Password
              <input
                type="password"
                placeholder="Enter your new password"
                required
                value={newPassword}
                onChange={handleNewPasswordChange}
                className={`px-[14px] py-[10px] border-gray-300 rounded-lg bg-white 
             shadow-[0_2px_5px_rgba(103,110,118,0.08),0_0_0_1px_rgba(103,110,118,0.16),0_1px_1px_rgba(0,0,0,0.12)] mb-2
             focus:outline-none focus:ring-1 focus:ring-[#829C15] ${
               passwordMismatch ? "border-red-500" : "border-gray-300"
             }`}
              />
            </label>

            <label className="flex flex-col justify-start gap-2 text-sm text-[#454C52] font-inter font-[400]">
              Confirm New Password
              <input
                type="password"
                placeholder="Re-enter your new password"
                required
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className={`px-[14px] py-[10px] border-gray-300 rounded-lg bg-white 
             shadow-[0_2px_5px_rgba(103,110,118,0.08),0_0_0_1px_rgba(103,110,118,0.16),0_1px_1px_rgba(0,0,0,0.12)] 
             focus:outline-none focus:ring-1 focus:ring-[#829C15] ${
               passwordMismatch ? "border-red-500" : "border-gray-300"
             }`}
              />
              {passwordMismatch && (
                <span className="text-red-500 text-xs mt-1">
                  New password and confirmation password do not match
                </span>
              )}
            </label>

            <div className="flex justify-start gap-4 mt-4">
              <button
                type="button"
                className="px-3 py-1.5 rounded-lg border border-[#E5E7EA] bg-[#FAFAFA] text-[#000] text-center font-inter text-sm font-medium leading-5 hover:bg-gray-200 transition-colors"
                onClick={handleChangePasswordCancel}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-3 py-1.5 rounded-lg bg-[#829C15] text-[#FFF] text-center font-inter text-sm font-medium leading-5 tracking-wide 
           shadow-[inset_1px_1px_2px_1px_rgba(255,255,255,0.18),inset_-1px_-1px_2px_1px_rgba(255,255,255,0.18)] hover:bg-[#6F7F0E] transition-colors"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Settings;
