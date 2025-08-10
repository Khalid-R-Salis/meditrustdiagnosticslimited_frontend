import { useState } from "react";

const testOptions = [
  { label: "FOLLICLE STIMULATING HORMONE (FSH)", price: 50000 },
  { label: "LUTEINIZING HORMONE (LH)", price: 45000 },
  { label: "PROGESTERONE", price: 30000 },
  { label: "PROGESTERONE1", price: 30000 },
  { label: "PROGESTERONE2", price: 30000 },
  { label: "PROGESTERONE3", price: 30000 },
  { label: "PROGESTERONE4", price: 30000 },
  { label: "PROGESTERONE5", price: 30000 },
  { label: "PROGESTERONE6", price: 30000 },
];

const MAX_TESTS = 3;

const ConsultationForm = ({ onClose, onConfirm }) => {
  const [form, setForm] = useState({
    name: "",
    sex: "Male",
    phone: "",
    sample: "",
    operator: "",
    hospital: "",
    tests: [],
    payment: "Bank transfer",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const addTest = (value) => {
    if (
      value &&
      form.tests.length < MAX_TESTS &&
      !form.tests.find((t) => t === value)
    ) {
      setForm({ ...form, tests: [...form.tests, value] });
      setErrors({ ...errors, tests: "" });
    }
  };

  const removeTest = (index) => {
    const updated = [...form.tests];
    updated.splice(index, 1);
    setForm({ ...form, tests: updated });
  };

  const getTestPrice = (label) => {
    const found = testOptions.find((t) => t.label === label);
    return found ? found.price : 0;
  };

  const total = form.tests.reduce((sum, label) => sum + getTestPrice(label), 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = ["name", "phone", "hospital", "sample", "operator"];
    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!form[field].trim()) {
        newErrors[field] = "This field is required.";
      }
    });

    if (form.tests.length === 0) {
      newErrors.tests = "Please select at least one test.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    onConfirm({ ...form, total });
  };

  return (
    <div className="bg-white w-full flex flex-col py-7 px-[72px]">
      <div className="flex justify-between items-center border-b pb-[24px] mb-[40px]">
        <h2 className="text-[24px] font-semibold leading-[32px] text-black font-inter">
          New Consultation
        </h2>
        <div className="flex justify-center items-center gap-2">
          <button
            type="button"
            onClick={onClose}
            className="
    rounded-lg border border-[#E5E7EA] bg-[#FAFAFA] px-3 py-[6px] text-black text-sm font-medium leading-5 text-center hover:bg-gray-100 font-inter"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="
    rounded-lg bg-[#829C15] px-3 py-[6px] text-white text-center text-sm font-medium leading-5 font-inter hover:bg-[#6f8911]"
          >
            Confirm Consultation
          </button>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scroll max-w-2xl"
      >
        <div className="space-y-4 flex flex-col gap-3">
          <h3 className="text-[15px] font-medium leading-[28px] text-black font-inter">
            Enter patient details
          </h3>

          {["name", "phone", "hospital"].map((field) => (
            <div key={field}>
              <label className="block mb-1 text-[#676E76] font-inter text-sm font-normal leading-[20px]">
                {field === "phone"
                  ? "Phone number"
                  : field === "hospital"
                  ? "Referring hospital"
                  : "Name"}
              </label>
              <input
                name={field}
                value={form[field]}
                onChange={handleChange}
                className="w-full rounded-lg border border-[#E5E7EA] bg-white px-[14px] py-[10px] focus:outline-none focus:border-[#E5E7EA] focus:ring-0"
                placeholder={
                  field === "phone"
                    ? "09099999999"
                    : field === "hospital"
                    ? "St. Bernard’s hospital"
                    : "John Doe"
                }
              />
              {errors[field] && (
                <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          <div>
            <label className="block mb-1 text-[#676E76] text-sm font-normal leading-[20px]">
              Sex
            </label>
            <select
              name="sex"
              value={form.sex}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#E5E7EA] bg-white px-[14px] py-[10px]"
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          {[
            {
              name: "sample",
              label: "Sample received",
              options: ["Blood", "Urine", "Stool", "Saliva"],
            },
            {
              name: "operator",
              label: "Operator",
              options: ["Radiologist", "Technician", "Pathologist"],
            },
          ].map(({ name, label, options }) => (
            <div key={name}>
              <label className="block mb-1 text-[#676E76] text-sm font-normal leading-[20px]">
                {label}
              </label>
              <select
                name={name}
                value={form[name]}
                onChange={handleChange}
                className="w-full rounded-lg border border-[#E5E7EA] bg-white px-[14px] py-[10px]"
              >
                <option value="">Select</option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors[name] && (
                <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
              )}
            </div>
          ))}

          <h3 className="text-[15px] font-medium leading-[28px] text-black font-inter">
            Test details
          </h3>
          <div>
            <label className="block mb-1 text-[#676E76] text-sm font-normal leading-[20px]">
              Select test
            </label>
            <select
              onChange={(e) => addTest(e.target.value)}
              value=""
              disabled={form.tests.length >= MAX_TESTS}
              className={`w-full rounded-lg px-[14px] py-[10px] border ${
                form.tests.length >= MAX_TESTS
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white border-[#E5E7EA]"
              }`}
            >
              <option value="">Select test</option>
              {testOptions.map((t, i) => (
                <option key={i} value={t.label}>
                  {t.label} [₦{t.price.toLocaleString()}]
                </option>
              ))}
            </select>
            <div className="flex flex-wrap gap-2 mt-3">
              {form.tests.map((test, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-full px-3 py-1 flex items-center text-sm max-w-full"
                >
                  <span className="mr-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]">
                    {test} (₦{getTestPrice(test).toLocaleString()})
                  </span>
                  <button
                    type="button"
                    onClick={() => removeTest(index)}
                    className="text-red-500 font-bold hover:text-red-700"
                    title="Remove test"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            {errors.tests && (
              <p className="text-red-500 text-sm mt-1">{errors.tests}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-[#676E76] text-sm font-normal leading-[20px]">
              Payment type
            </label>
            <div className="space-x-4 mt-1">
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="Bank transfer"
                  checked={form.payment === "Bank transfer"}
                  onChange={handleChange}
                />{" "}
                Bank transfer
              </label>
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="Cash"
                  checked={form.payment === "Cash"}
                  onChange={handleChange}
                />{" "}
                Cash
              </label>
            </div>
          </div>

          <div>
            <label className="block mb-1 text-[#676E76] text-sm font-normal leading-[20px]">
              Total
            </label>
            <input
              value={`₦${total.toLocaleString()}`}
              readOnly
              className="w-full rounded-lg border-none bg-white px-[14px] py-[10px] focus:outline-none focus:border-[#E5E7EA] focus:ring-0"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ConsultationForm;
