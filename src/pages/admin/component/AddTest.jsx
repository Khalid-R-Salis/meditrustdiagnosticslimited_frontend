import { useState, useEffect, useRef } from "react";

const AddTest = ({ onClose, onConfirm, setSidebarDisabled, setActiveNav }) => {
  useEffect(() => {
    if (setSidebarDisabled) setSidebarDisabled(true);
    return () => {
      if (setSidebarDisabled) setSidebarDisabled(false);
    };
  }, [setSidebarDisabled]);

  const [form, setForm] = useState({
    testName: "",
    testPrice: "",
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
    if (!form.testName.trim()) newErrors.testName = "Test name is required.";
    if (!form.testPrice.trim()) newErrors.testPrice = "Test price is required.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    if (onConfirm) onConfirm(form);

    if (setActiveNav) setActiveNav("Pricing");
    else if (onClose) onClose();
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
      <div className="flex justify-between items-center border-b pb-[24px] mb-[40px]">
        <h2 className="text-[24px] font-semibold leading-[32px] text-black font-inter">
          New test
        </h2>
        <div className="flex justify-center items-center gap-2">
          <button
            type="button"
            onClick={() => setShowCancelConfirm(true)}
            className="rounded-lg border border-[#E5E7EA] bg-[#FAFAFA] px-3 py-[6px] text-black text-sm font-medium leading-5 text-center hover:bg-gray-100 font-inter"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleExternalSubmit}
            className="rounded-lg bg-[#829C15] px-3 py-[6px] text-white text-center text-sm font-medium leading-5 font-inter hover:bg-[#6f8911]"
          >
            Confirm creation
          </button>
        </div>
      </div>

      {showCancelConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full text-center">
            <p className="text-gray-800 text-base mb-6">
              Are you sure you want to close this page? <br />
              <b className="uppercase text-red-600">Changes are Unsaved!</b>
            </p>
            <div className="flex justify-center gap-3">
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
            Enter test details
          </h3>

          <div>
            <label className="block mb-1 text-[#676E76] font-inter text-sm">
              Test name
            </label>
            <input
              name="testName"
              value={form.testName}
              onChange={handleChange}
              placeholder="X RAY TEST"
              className="w-full rounded-lg border border-[#E5E7EA] bg-white px-[14px] py-[10px] focus:outline-none focus:border-[#829C15]"
            />
            {errors.testName && (
              <p className="text-red-500 text-sm mt-1">{errors.testName}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-[#676E76] font-inter text-sm">
              Test price
            </label>
            <input
              name="testPrice"
              value={form.testPrice}
              onChange={handleChange}
              placeholder="₦50,0000"
              className="w-full rounded-lg border border-[#E5E7EA] bg-white px-[14px] py-[10px] focus:outline-none focus:border-[#829C15]"
            />
            {errors.testPrice && (
              <p className="text-red-500 text-sm mt-1">{errors.testPrice}</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTest;
