import { useState, useRef, useEffect } from "react";

const testOptions = [
  { label: "2 Hours Post Prandial (2PP)", price: 3500 },
  { label: "Albumin Serum", price: 3000 },
  { label: "ALPHA FETO PROTEIN", price: 17500 },
  { label: "Amylase Serum", price: 8000 },
  { label: "ASO Titre", price: 8000 },
  { label: "Aspirate Analysis", price: 20000 },
  { label: "AST (SGOT)", price: 3000 },
  { label: "Bence jones protein", price: 1500 },
  { label: "BHCG", price: 11000 },
  { label: "BHCG (Male)", price: 11000 },
  { label: "Bilirubin", price: 4000 },
  { label: "Bilirubin Conjugated", price: 2000 },
  { label: "Bilirubin Total", price: 2000 },
  { label: "Blood culture", price: 17000 },
  { label: "BLOOD FILM", price: 2000 },
  { label: "Blood Group", price: 2000 },
  { label: "C - REACTIVE PROTEIN  (CRP)", price: 12000 },
  { label: "Ca 125", price: 25000 },
  { label: "Ca 15-3", price: 20000 },
  { label: "Ca 19-9", price: 20000 },
  { label: "Calcium & phosphate", price: 4000 },
  { label: "Calcium Aspirate", price: 2500 },
  { label: "Calcium Serum", price: 3000 },
  { label: "CEA", price: 15000 },
  { label: "CEA", price: 15000 },
  { label: "CEREBROSPINAL FLUID (CSF)", price: 14400 },
  { label: "Cholesterol HDL", price: 3500 },
  { label: "CKMB", price: 20000 },
  { label: "Clotting profile", price: 22000 },
  { label: "C-Reactive Protein (CRP)", price: 12500 },
  { label: "Creatine Kinase Total (CK)", price: 7000 },
  { label: "Creatinine 24hr Urine", price: 3500 },
  { label: "Creatinine Aspirate", price: 3500 },
  { label: "Creatinine Clearance", price: 4000 },
  { label: "Creatinine Clearance 24hr Urine", price: 3500 },
  { label: "Creatinine Serum", price: 3000 },
  { label: "Creatinine Urine", price: 3000 },
  { label: "Creatinine Urine (24hr)", price: 3000 },
  { label: "CSF Analysis", price: 17000 },
  { label: "D-DIMER", price: 9500 },
  { label: "DIRECT COMBO TEST", price: 30000 },
  { label: "DIRECT COOMBS", price: 30000 },
  { label: "Electrolytes", price: 5000 },
  { label: "ENDO CERVICAL SWAB", price: 4500 },
  { label: "ESR (Erythrocyte Sedimentation Rate)", price: 2500 },
  { label: "ESTRADIOL    (E2)", price: 18500 },
  { label: "Estrogen-S (E2)", price: 15000 },
  { label: "FERRITIN", price: 12500 },
  { label: "FOLLICLE STIMULATING HORMONE (FSH)", price: 19000 },
  { label: "Follicle Stimulating Hormone (FSH)", price: 19000 },
  { label: "PREGNANCY TEST (PT)", price: 1500 },
  { label: "Free T3", price: 6000 },
  { label: "Free T4", price: 6000 },
  { label: "Free Testosterone", price: 40000 },
  { label: "Full / Complete Blood Count", price: 3500 },
  { label: "Gamma GT", price: 2000 },
  { label: "Glucose Fasting", price: 2000 },
  { label: "Glucose Random", price: 2000 },
  { label: "Growth Hormone", price: 55000 },
  { label: "Growth Hormone Suppression", price: 104000 },
  { label: "H.PYLORI", price: 2500 },
  { label: "HB Electrophoresis", price: 9000 },
  { label: "HB Genotype", price: 2500 },
  { label: "HbA1C", price: 12500 },
  { label: "HBsAg viral load", price: 42000 },
  { label: "HCV", price: 2500 },
  { label: "Helicobacter pylori Ag Stool", price: 7000 },
  { label: "Helicobacter pylori IgA Ab", price: 21000 },
  { label: "Helicobacter pylori IgG Ab", price: 21000 },
  { label: "Hepatitis A Virus IgG Ab", price: 11500 },
  { label: "Hepatitis A Virus IgM Ab", price: 11500 },
  { label: "Hepatitis B Profile", price: 130000 },
  { label: "Hepatitis B Virus core Ab", price: 4500 },
  { label: "Hepatitis B Virus core IgM Ab", price: 4500 },
  { label: "Hepatitis B Virus e Ab", price: 8000 },
  { label: "Hepatitis B Virus e Ag", price: 9000 },
  { label: "Hepatitis B Virus surface Ab", price: 6500 },
  { label: "Hepatitis B Virus surface Ag", price: 3000 },
  { label: "Hepatitis B virus surface Ag Stat", price: 1500 },
  { label: "HIGH VAGINAL SWAB", price: 4500 },
  { label: "HIV Stat", price: 2500 },
  { label: "HIV Type 1 & 2 + p24 Ag(VIDAS)", price: 9000 },
  { label: "HIV Viral load", price: 48000 },
  { label: "INDIRECT COOMBS", price: 3800 },
  { label: "LEUTINIZING HORMONE", price: 19000 },
  { label: "LFT Liver Function Test", price: 10000 },
  { label: "LIPID PROFILE", price: 10000 },
  { label: "Liver Enzymes", price: 2500 },
  { label: "Liver Function & Protein", price: 10000 },
  { label: "Luteinizing Hormone (LH)", price: 19000 },
  { label: "Magnesium serum", price: 2000 },
  { label: "Malaria Thick Film (MPS)", price: 1000 },
  { label: "Malaria Thin Film   (MPS)", price: 1000 },
  { label: "Microscopy & Urinalysis", price: 2500 },
  { label: "Microscopy Stool", price: 2500 },
  { label: "Microscopy Urine", price: 2000 },
  { label: "Non-Gynaecological Cytology", price: 17000 },
  { label: "ORAL GLUCOSE TOLERANCE   (OGTT)", price: 4000 },
  { label: "Packed Cell Volume (PCV)", price: 2000 },
  { label: "Platelet Count", price: 2000 },
  { label: "POTASSIUM SERUM", price: 1000 },
  { label: "POTASSIUM URINE", price: 4100 },
  { label: "PROGESTERONE", price: 19000 },
  { label: "PROLACTIN", price: 19000 },
  { label: "PGREGNANCY TEST  (PT)", price: 1500 },
  { label: "PROSTATE SPECIFIC ANTIGEN (PSA)", price: 13000 },
  { label: "PROTEIN SERUM", price: 3000 },
  { label: "ROTAVIRUS ANTIGEN", price: 2500 },
  { label: "RUBELLA IGM", price: 9000 },
  { label: "RVS", price: 2500 },
  { label: "Rh FACTOR", price: 12000 },
  { label: "Semen M/C/S", price: 6500 },
  { label: "Serum calcium & phosphate", price: 3500 },
  { label: "TESTOSTERONE", price: 19000 },
  { label: "THYROID FUNCTION TEST", price: 15000 },
  { label: "TOXOPLASMA 1gM", price: 11000 },
  { label: "TOXOPLASMA IgG", price: 11000 },
  { label: "Troponin-I", price: 18000 },
  { label: "TSH", price: 8000 },
  { label: "U/E", price: 4000 },
  { label: "U/E/CR", price: 9500 },
  { label: "Urea Serum", price: 2500 },
  { label: "URETHRAL SWAB", price: 4500 },
  { label: "URIC ACID", price: 3500 },
  { label: "Urine Analysis", price: 2000 },
  { label: "Urine m/c/s", price: 4500 },
  { label: "VDRL", price: 2500 },
  { label: "VITAMIN B12", price: 10000 },
  { label: "WIDAL", price: 1000 },
  { label: "Wound swab", price: 4500 },
  { label: "ANOMALY ULTRASOUND", price: 20000 },
  { label: "DOPPLER CAROTID", price: 20000 },
  { label: "DOPPLER EXTREMITY ARTERIAL (BILATERAL)", price: 23000 },
  { label: "DOPPLER EXTREMITY ARTERIAL (SINGLE)", price: 17000 },
  { label: "Doppler Obstetrics", price: 17000 },
  { label: "DOPPLER RENAL", price: 20000 },
  { label: "ECHOCARDIOGRAM", price: 22000 },
  { label: "FOLLICLE MONITORING", price: 17000 },
  { label: "RENAL BIOPSY UNDER ULTRASOUND", price: 20000 },
  { label: "TRANSVAGINAL ULTRASOUND", price: 11000 },
  { label: "ULTRASOND GALL BLADDER STUDY", price: 7000 },
  { label: "OBSTETRICS USS", price: 4000 },
  { label: "ULTRASOUND ABDOMEN AND PELVIS (WHOLE ABDOMEN)", price: 4000 },
  { label: "ULTRASOUND ANKLE (SINGLE PART)", price: 7000 },
  { label: "ULTRASOUND DOPPLER TESTES", price: 17000 },
  { label: "ULTRASOUND KUB", price: 6000 },
  { label: "ULTRASOUND KUB & PROSTATE", price: 8000 },
  { label: "ULTRASOUND OF THE BREAST", price: 9000 },
  { label: "ULTRASOUND PAROTID (SINGLE PART)", price: 9000 },
  { label: "ULTRASOUND PELVIS (SINGLE PART)", price: 4000 },
  { label: "ULTRASOUND PROSTATE", price: 7000 },
  { label: "ULTRASOUND SCROTUM", price: 9000 },
  { label: "ULTRASOUND TRANSFONTANELLE", price: 9000 },
  { label: "USS EYE", price: 9000 },
  { label: "USS NECK", price: 6500 },
  { label: "USS THYROID", price: 9000 },
  { label: "USS TRANSVAGINAL", price: 11000 },
  { label: "Xray Abdomen /KUB", price: 6000 },
  { label: "Xray Acromioclavicular Joint", price: 6000 },
  { label: "Xray paranasal sinuses", price: 7000 },
  { label: "Xray jaw/mandible", price: 8000 },
  { label: "Xray Barium Enema", price: 30000 },
  { label: "Xray Barium Meal/swallow", price: 35000 },
  { label: "Xray Both Ankle Joint AP/LAT", price: 10500 },
  { label: "Xray Both Clavicle", price: 10500 },
  { label: "Xray Both Elbow Joint AP/LAT", price: 10500 },
  { label: "XRAY BOTH FOOT AP/LAT", price: 10500 },
  { label: "XRAY BOTH FOOT AP/LAT/OBL", price: 10500 },
  { label: "Xray Both Foot AP/OBL", price: 10500 },
  { label: "Xray Both Forearm (Radius / Ulna) AP/LAT", price: 10500 },
  { label: "Xray Both Hand AP/OBL", price: 10500 },
  { label: "Xray Both Heel LAT/Axial", price: 10500 },
  { label: "Xray Both Hip Joints Frog View", price: 10500 },
  { label: "Xray Both Humerus AP/LAT", price: 10500 },
  { label: "Xray Both Knee AP/LAT Standing", price: 10500 },
  { label: "Xray Both Knee Axial View", price: 10500 },
  { label: "Xray Both Patella Skyline View", price: 10500 },
  { label: "Xray Both Sacro-iliac Joint OBL", price: 10500 },
  { label: "Xray Both Shoulder Joint AP/LAT", price: 10500 },
  { label: "Xray Both Tibia & Fibula PA/LAT", price: 10500 },
  { label: "Xray Both Toe AP/LAT", price: 10500 },
  { label: "Xray Both Wrist Joint AP/LAT", price: 10500 },
  { label: "Xray Cervical Spine", price: 7000 },
  { label: "Xray Chest PA View", price: 6000 },
  { label: "Xray Chest Right LAT View", price: 6000 },
  { label: "Xray Dorsal Spine AP/LAT", price: 6000 },
  { label: "Xray Finger AP/LAT", price: 6000 },
  { label: "Xray Fistulogram", price: 30000 },
  { label: "Xray Hand with Wrist AP For Bone Age", price: 17500 },
  { label: "XRAY HSG", price: 25000 },
  { label: "Xray IVP", price: 30000 },
  { label: "Xray KUB", price: 6000 },
  { label: "Xray L S Spine – AP / LAT", price: 8000 },
  { label: "Xray Ankle Joint AP/LAT", price: 7000 },
  { label: "Xray Clavicle", price: 6000 },
  { label: "Xray Elbow Joint AP/LAT", price: 6000 },
  { label: "Xray Foot AP/OBL", price: 7000 },
  { label: "Xray Forearm AP/LAT", price: 7000 },
  { label: "XRAY HAND AP/LAT", price: 6000 },
  { label: "Xray Humerus AP/LAT", price: 6000 },
  { label: "Xray Knee AP/LAT", price: 6000 },
  { label: "Xray Left Shoulder Joint AP", price: 6000 },
  { label: "Xray Left Tibia & Fibula PA/LAT", price: 6000 },
  { label: "Xray Lumbar Spine AP/LAT", price: 8000 },
  { label: "Xray Mastoid", price: 6000 },
  { label: "Xray RUG/MCUG", price: 30000 },
  { label: "Xray Post Nasal Space", price: 7000 },
  { label: "XRAY RETROGRADE PYELOGRAPHY", price: 6000 },
  { label: "Xray Right Elbow Joint AP/LAT", price: 6000 },
  { label: "Xray Right Wrist", price: 6000 },
  { label: "Xray Shoulder", price: 7000 },
  { label: "Xray Skull", price: 8000 },
  { label: "Xray Pelvic", price: 8000 },
  { label: "Xray Thoracic Inlet", price: 8000 },
  { label: "Xray Urethrogram", price: 35000 },
  { label: "Xray Whole Spine", price: 17500 },
  { label: "Xray Abdomen (Erect & Supine)", price: 8000 },
  { label: "RE-PRINTING OF RESULT - FILMS", price: 3000 },
  { label: "RE-PRINTING OF RESULT -A4 PAPER", price: 500 },
  { label: "RE-PRINTING OF RESULT -CD", price: 1000 },
];

const MAX_TESTS = 5;

const ConsultationForm = ({ onClose, onConfirm, setSidebarDisabled }) => {
  useEffect(() => {
    if (setSidebarDisabled) setSidebarDisabled(true);
    return () => {
      if (setSidebarDisabled) setSidebarDisabled(false);
    };
  }, [setSidebarDisabled]);

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

  const [showCancelConfirm, setShowCancelConfirm] = useState(false);

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
            onClick={() => setShowCancelConfirm(true)} // ✅ show modal first
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
                  onClose(); // actually close
                }}
                className="rounded-lg bg-[#829C15] px-3 py-[6px] text-white text-center text-sm font-medium leading-5 font-inter hover:bg-[#6f8911]"
              >
                YES, Cancel
              </button>
            </div>
          </div>
        </div>
      )}

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
              <option>Lab Techician</option>
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
                  ? "(5) Maximum tests selected"
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
