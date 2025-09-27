import React, { useState, useEffect, useRef } from "react";

const NewUser = ({
  onClose,
  onConfirm,
  setSidebarDisabled,
  setActiveNav,
  setToast,
}) => {
  useEffect(() => {
    if (setSidebarDisabled) setSidebarDisabled(true);
    return () => {
      if (setSidebarDisabled) setSidebarDisabled(false);
    };
  }, [setSidebarDisabled]);

  const [form, setForm] = useState({
    name: "",
    phoneNumber: "",
    emailAddress: "",
    role: "",
  });

  const [errors, setErrors] = useState({});
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required.";
    if (!form.emailAddress.trim())
      newErrors.emailAddress = "Email address is required.";
    if (!form.role) newErrors.role = "Role is required.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    if (onConfirm) onConfirm(form);

    if (setToast) {
      setToast({
        type: "success",
        message: "New user created successfully!",
      });

      setTimeout(() => setToast(null), 3000);
    }

    if (setActiveNav) {
      setActiveNav("UserManagement");
    } else if (onClose) {
      onClose();
    }
  };

  const handleExternalSubmit = () => {
    if (formRef.current) {
      if (typeof formRef.current.requestSubmit === "function") {
        formRef.current.requestSubmit();
      } else {
        formRef.current.dispatchEvent(
          new Event("submit", { bubbles: true, cancelable: true })
        );
      }
    }
  };

  return (
    <div className="bg-white w-full flex flex-col py-7 px-[72px] h-full relative">
      {/* Top bar */}
      <div className="flex flex-wrap justify-between items-center border-b pb-[24px] mb-[40px] mt-[5px] sm:mt-0">
        <h2 className="text-[16px] sm:text-[20px] md:text-[24px] font-semibold leading-tight text-black font-inter mt-[5px] sm:mt-0">
          New user
        </h2>

        <div className="flex justify-center items-center gap-2 mt-[5px] sm:mt-0">
          <button
            type="button"
            onClick={() => setShowCancelConfirm(true)}
            className="rounded-lg border border-[#E5E7EA] bg-[#FAFAFA] px-3 py-[6px] text-[12px] sm:text-sm font-medium leading-5 text-center hover:bg-gray-100 font-inter"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleExternalSubmit}
            className="rounded-lg bg-[#829C15] px-3 py-[6px] text-white text-center text-[12px] sm:text-sm font-medium leading-5 font-inter hover:bg-[#6f8911]"
          >
            Confirm creation
          </button>
        </div>
      </div>

      {showCancelConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-md mx-4 text-center">
            <p className="text-gray-800 text-base mb-6">
              Are you sure you want to close this page? <br />
              <b className="uppercase text-red-600">Changes are Unsaved!</b>
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <button
                type="button"
                onClick={() => setShowCancelConfirm(false)}
                className="rounded-lg border border-[#E5E7EA] bg-[#FAFAFA] px-3 py-[6px] text-black text-sm font-medium leading-5 text-center hover:bg-gray-100 font-inter"
              >
                NO
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowCancelConfirm(false);
                  if (onClose) onClose();
                }}
                className="rounded-lg bg-[#829C15] px-3 py-[6px] text-white text-center text-sm font-medium leading-5 font-inter hover:bg-[#6f8911]"
              >
                YES, Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Form body */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex-1 max-h-[70vh] overflow-y-auto pr-2 space-y-4 custom-scroll max-w-2xl"
      >
        <div className="space-y-4 flex flex-col gap-3">
          <h3 className="text-[15px] font-medium leading-[28px] text-black font-inter">
            Enter user details
          </h3>

          <div>
            <label
              htmlFor="name"
              className="text-[#676E76] font-inter text-sm font-normal leading-5 block mb-1"
            >
              Name
            </label>
            <input
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              pattern="[A-Za-z\s]+"
              placeholder="Enter the staff name"
              className="flex w-full px-[14px] py-[10px] items-center gap-2 self-stretch rounded-lg border border-[#E5E7EA] bg-white focus:outline-none focus:border-[#829C15]"
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="text-[#676E76] font-inter text-sm font-normal leading-5 block mb-1"
            >
              Phone number
            </label>
            <input
              name="phoneNumber"
              type="number"
              id="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              placeholder="Enter the staff phone number"
              className="flex w-full px-[14px] py-[10px] items-center gap-2 self-stretch rounded-lg border border-[#E5E7EA] bg-white focus:outline-none focus:border-[#829C15]"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="emailAddress"
              className="text-[#676E76] font-inter text-sm font-normal leading-5 block mb-1"
            >
              Email address
            </label>
            <input
              name="emailAddress"
              typeof="email"
              id="emailAddress"
              type="email"
              value={form.emailAddress}
              onChange={handleChange}
              placeholder="Enter the satff email address"
              className="flex w-full px-[14px] py-[10px] items-center gap-2 self-stretch rounded-lg border border-[#E5E7EA] bg-white focus:outline-none focus:border-[#829C15]"
            />
            {errors.emailAddress && (
              <p className="text-red-500 text-sm mt-1">{errors.emailAddress}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="role"
              className="text-[#676E76] font-inter text-sm font-normal leading-5 block mb-1"
            >
              Role
            </label>
            <select
              name="role"
              id="role"
              value={form.role}
              onChange={handleChange}
              className="flex w-full px-[14px] py-[10px] items-center gap-2 self-stretch rounded-lg border border-[#E5E7EA] bg-white focus:outline-none focus:border-[#829C15]"
            >
              <option value="" disabled hidden>
                Select role
              </option>
              <option value="Receptionist">Receptionist</option>
              <option value="Lab Technician">Lab Technician</option>
              <option value="Receptionist">Radiologiest</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm mt-1">{errors.role}</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
