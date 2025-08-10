import { useState, useRef, useEffect } from "react";

const testOptions = [
  { label: "2 Hours Post Prandial (2PP)", price: 3500 },
  { label: "Albumin Serum", price: 3000 },
  { label: "ALPHA FETO PROTEIN", price: 17500 },
  { label: "Amylase Serum", price: 8000 },
  { label: "ASO Titre", price: 8000 },
  { label: "AST", price: 3000 },
  { label: "Basic Metabolic Panel", price: 12000 },
  { label: "Beta HCG Quantitative", price: 18000 },
  { label: "Blood Grouping & Crossmatch", price: 12000 },
  { label: "Blood Grouping (ABO & RH)", price: 4000 },
  { label: "Blood Urea", price: 1500 },
  { label: "Bilirubin Direct", price: 2000 },
  { label: "Bilirubin Total", price: 2000 },
  { label: "Blood Film for Malaria Parasite", price: 2500 },
  { label: "Blood Film for Parasites", price: 2500 },
  { label: "Blood Count (Full)", price: 4000 },
  { label: "Calcium", price: 3000 },
  { label: "Carcinoembryonic Antigen (CEA)", price: 18000 },
  { label: "CBC with ESR", price: 4000 },
  { label: "Chloride", price: 1500 },
  { label: "Cholesterol Total", price: 3000 },
  { label: "Creatinine Serum", price: 3000 },
  { label: "CRP", price: 18000 },
  { label: "CSF Analysis", price: 12000 },
  { label: "Culture & Sensitivity (Urine)", price: 5000 },
  { label: "D-Dimer", price: 18000 },
  { label: "ESR", price: 1500 },
  { label: "Electrolytes", price: 12000 },
  { label: "Fasting Blood Sugar (FBS)", price: 2500 },
  { label: "Ferritin", price: 18000 },
  { label: "Folate Serum", price: 18000 },
  { label: "GGT", price: 3000 },
  { label: "Glucose", price: 2500 },
  { label: "HBA1C", price: 12000 },
  { label: "Hepatitis B Surface Antigen (HBsAg)", price: 12000 },
  { label: "Hepatitis C Virus Antibody", price: 12000 },
  { label: "HIV 1 & 2", price: 12000 },
  { label: "Iron Serum", price: 3000 },
  { label: "LDH", price: 3000 },
  { label: "Lipid Profile", price: 12000 },
  { label: "Liver Function Test (LFT)", price: 12000 },
  { label: "Magnesium Serum", price: 3000 },
  { label: "Malaria Parasite", price: 2500 },
  { label: "Osmolality", price: 18000 },
  { label: "Phosphate", price: 3000 },
  { label: "Potassium Serum", price: 1500 },
  { label: "Prostate Specific Antigen (PSA)", price: 18000 },
  { label: "Protein Total", price: 3000 },
  { label: "Sodium Serum", price: 1500 },
  { label: "Thyroid Stimulating Hormone (TSH)", price: 18000 },
  { label: "Triglycerides", price: 3000 },
  { label: "Troponin I", price: 18000 },
  { label: "Uric Acid", price: 3000 },
  { label: "Vitamin B12", price: 18000 },
  { label: "Vitamin D", price: 18000 },
  { label: "Widal Test", price: 5000 },
  { label: "Urinalysis", price: 2500 },
];

const MAX_TESTS = 3;

const ConsultationForm = ({ onClose, onConfirm }) => {
  const [form, setForm] = useState({
    name: "",
    sex: "Male",
    phone: "",
    sample: "",
    hospital: "",
    operator: "",
    tests: [],
    payment: "Cash",
  });

  const [errors, setErrors] = useState({});
  const [testSearch, setTestSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const formRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name" || name === "hospital" || name === "sample") {
      if (/[^a-zA-Z\s]/.test(value)) return;
    }
    if (name === "phone") {
      if (/[^0-9]/.test(value)) return;
    }

    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const addTest = (value) => {
    if (value && form.tests.length < MAX_TESTS && !form.tests.includes(value)) {
      setForm({ ...form, tests: [...form.tests, value] });
      setErrors({ ...errors, tests: "" });
      setTestSearch("");
      setDropdownOpen(false);
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

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredTests = testOptions.filter(
    (t) =>
      t.label.toLowerCase().includes(testSearch.toLowerCase()) &&
      !form.tests.includes(t.label)
  );

  return (
    <div className="bg-white w-full flex flex-col py-7 px-[72px] h-full relative">
      <div className="flex justify-between items-center border-b pb-[24px] mb-[40px]">
        <h2 className="text-[24px] font-semibold leading-[32px] text-black font-inter">
          New Consultation
        </h2>
        <div className="flex justify-center items-center gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-[#E5E7EA] bg-[#FAFAFA] px-3 py-[6px] text-black text-sm font-medium leading-5 text-center hover:bg-gray-100 font-inter"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleExternalSubmit}
            className="rounded-lg bg-[#829C15] px-3 py-[6px] text-white text-center text-sm font-medium leading-5 font-inter hover:bg-[#6f8911]"
          >
            Confirm Consultation
          </button>
        </div>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex-1 max-h-[70vh] overflow-y-auto pr-2 space-y-4 custom-scroll max-w-2xl"
      >
        <div className="space-y-4 flex flex-col gap-3">
          {/* Patient Details */}
          <h3 className="text-[15px] font-medium leading-[28px] text-black font-inter">
            Enter patient details
          </h3>

          <div>
            <label className="block mb-1 text-[#676E76] font-inter text-sm">
              Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full rounded-lg border border-[#E5E7EA] bg-white px-[14px] py-[10px] focus:outline-none focus:border-[#829C15]"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-[#676E76] text-sm">Sex</label>
            <select
              name="sex"
              value={form.sex}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#E5E7EA] bg-white px-[14px] py-[10px] focus:outline-none focus:border-[#829C15]"
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-[#676E76] font-inter text-sm">
              Phone number
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="09099999999"
              className="w-full rounded-lg border border-[#E5E7EA] bg-white px-[14px] py-[10px] focus:outline-none focus:border-[#829C15]"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-[#676E76] font-inter text-sm">
              Sample received
            </label>
            <input
              name="sample"
              value={form.sample}
              onChange={handleChange}
              placeholder="Blood"
              className="w-full rounded-lg border border-[#E5E7EA] bg-white px-[14px] py-[10px] focus:outline-none focus:border-[#829C15]"
            />
            {errors.sample && (
              <p className="text-red-500 text-sm mt-1">{errors.sample}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-[#676E76] font-inter text-sm">
              Referring hospital
            </label>
            <input
              name="hospital"
              value={form.hospital}
              onChange={handleChange}
              placeholder="St. Bernard’s hospital"
              className="w-full rounded-lg border border-[#E5E7EA] bg-white px-[14px] py-[10px] focus:outline-none focus:border-[#829C15]"
            />
            {errors.hospital && (
              <p className="text-red-500 text-sm mt-1">{errors.hospital}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-[#676E76] text-sm">
              Operator
            </label>
            <select
              name="operator"
              value={form.operator}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#E5E7EA] bg-white px-[14px] py-[10px] focus:outline-none focus:border-[#829C15]"
            >
              <option value="">Select</option>
              <option>Radiologist</option>
              <option>Pathologist</option>
            </select>
            {errors.operator && (
              <p className="text-red-500 text-sm mt-1">{errors.operator}</p>
            )}
          </div>

          {/* Test details */}
          <h3 className="text-[15px] font-medium leading-[28px] text-black font-inter">
            Test details
          </h3>
          <div className="relative" ref={dropdownRef}>
            <label className="block mb-1 text-[#676E76] text-sm">
              Select test
            </label>

            <input
              type="text"
              placeholder={
                form.tests.length >= MAX_TESTS
                  ? "Maximum tests selected"
                  : "Search tests..."
              }
              value={testSearch}
              onChange={(e) => {
                setTestSearch(e.target.value);
                setDropdownOpen(true);
              }}
              onFocus={() => setDropdownOpen(true)}
              disabled={form.tests.length >= MAX_TESTS}
              className={`w-full rounded-lg border px-[14px] py-[10px] ${
                form.tests.length >= MAX_TESTS
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white border-[#E5E7EA]"
              } focus:outline-none focus:border-[#829C15]`}
              autoComplete="off"
            />

            {dropdownOpen && filteredTests.length > 0 && (
              <ul
                className="absolute z-10 mt-1 max-h-48 w-full overflow-auto rounded border border-[#E5E7EA] bg-white shadow-lg scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#9ca3af #f3f4f6",
                }}
              >
                {filteredTests.map((test) => (
                  <li
                    key={test.label}
                    onClick={() => addTest(test.label)}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-300"
                  >
                    {test.label} [₦{test.price.toLocaleString()}]
                  </li>
                ))}
              </ul>
            )}
            {dropdownOpen && filteredTests.length === 0 && (
              <div className="absolute z-10 mt-1 w-full rounded border border-[#E5E7EA] bg-white px-4 py-2 text-gray-500">
                No tests found.
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {form.tests.map((test, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-full px-3 py-1 flex items-center text-sm max-w-full"
              >
                <span className="mr-2">
                  {test} (₦{getTestPrice(test).toLocaleString()})
                </span>
                <button
                  type="button"
                  onClick={() => removeTest(index)}
                  className="text-red-500 font-bold"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          {errors.tests && (
            <p className="text-red-500 text-sm mt-1">{errors.tests}</p>
          )}

          {/* Payment type */}
          <div>
            <label className="block mb-1 text-[#676E76] text-sm">
              Payment type
            </label>
            <div className="space-x-4 mt-1">
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
            </div>
          </div>

          {/* Total */}
          <div>
            <label className="block mb-1 text-[#676E76] text-sm">Total</label>
            <input
              value={`₦${total.toLocaleString()}`}
              readOnly
              className="w-full rounded-lg border-none bg-white px-[14px] py-[10px]"
            />
          </div>
        </div>
      </form>

      {/* Scrollbar styling */}
      <style>{`
        /* Firefox scrollbar */
        * {
          scrollbar-width: thin;
          scrollbar-color: #9ca3af #f3f4f6;
        }
        /* WebKit scrollbar */
        ul::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        ul::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 3px;
        }
        ul::-webkit-scrollbar-thumb {
          background-color: #9ca3af;
          border-radius: 3px;
          border: 1px solid #f3f4f6;
        }
      `}</style>
    </div>
  );
};

export default ConsultationForm;
