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
    <div className="bg-white w-full flex flex-col mt-8 mx-5 sm:py-7 sm:px-[72px] sm:mt-0 sm:mx-0 relative overflow-y-hidden">
      {/* Top bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-[24px] mb-[40px] mt-[5px] sm:mt-0 gap-2">
        <h2 className="text-[24px] md:text-[24px] font-semibold leading-[28px] md:leading-[32px] text-black font-inter mt-[5px] sm:mt-0">
          New test
        </h2>

        <div className="flex justify-center items-center gap-2 mt-[5px] sm:mt-0">
          <button
            type="button"
            onClick={() => setShowCancelConfirm(true)}
            className="
        rounded-lg border border-[#E5E7EA] bg-[#FAFAFA] 
        px-3 py-[10px] text-[15px] font-medium leading-4 
        text-center hover:bg-gray-100 font-inter
        md:px-3 md:py-[6px] md:text-sm md:leading-5
      "
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleExternalSubmit}
            className="
        rounded-lg bg-[#829C15] 
        px-3 py-[10px] text-[15px] font-medium leading-4 
        text-white text-center font-inter hover:bg-[#6f8911] 
        md:px-3 md:py-[6px] md:text-sm md:leading-5
      "
          >
            Confirm creation
          </button>
        </div>
      </div>

      {showCancelConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full text-center m-6 p-[15px] sm:m-0 sm:p-6">
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
        className="flex-1 max-h-[70vh] overflow-y-auto space-y-4 custom-scroll max-w-2xl"
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
              type="number"
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
