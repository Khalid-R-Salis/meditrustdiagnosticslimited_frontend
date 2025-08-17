import React from "react";
import meditrustbg from "../../src/assets/meditrustbg.jpg";

const PatientReport = ({ onClose }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div
        className="relative overflow-hidden shadow-sm rounded-lg flex flex-col"
        style={{
          width: "min(80vw, 210px)",
          height: "calc(min(80vw, 210px) * 1.41)",
          backgroundImage: `url(${meditrustbg})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
        }}
      >
        {/* Card Content */}
        <div className="relative z-10 text-gray-900 px-4 pt-16 text-[7px] flex flex-col h-full">
          {/* Patient details */}
          <div className="mb-2">
            <div className="flex justify-between">
              <span className="font-medium">Name of patient</span>
              <span>John Smith Doe</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Sex/Age</span>
              <span>Male/20</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Test Conducted</span>
              <span>X Ray</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Phone number</span>
              <span>09000000000</span>
            </div>
          </div>

          {/* Report */}
          <div className="flex-1 overflow-hidden flex items-start">
            <p className="text-[7px] leading-[12px] flex-shrink">
              A row consists of people, things, or information placed in a
              straight line, side by side. A column consists of elements
              arranged one on top of the other. In other words, the difference
              between a row and a column is that a row is horizontal, whereas a
              column is vertical. This is a test to see how the content behaves
              when it becomes too much. Instead of overflowing, it should shrink
              so the footer still remains visible at the bottom.
            </p>
          </div>

          {/* Footer  */}
          <div className="flex justify-between items-center text-[5px] border-t pt-1 mt-2 mb-8">
            <div>
              <p>
                <span className="font-medium">Date/Time:</span>{" "}
                {new Date().toLocaleString()}
              </p>
            </div>
            <div>
              <p>
                <span className="font-medium">Radiologist:</span> Dr. John Doe
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-2 w-[220px] gap-8">
        <button
          className="text-[7px] font-medium"
          style={{
            display: "flex",
            padding: "4px 6px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2px",
            flex: "1 0 0",
            borderRadius: "6px",
            border: "1px solid #E5E7EA",
            background: "#FAFAFA",
          }}
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="text-[7px] font-medium text-white"
          style={{
            display: "flex",
            padding: "4px 6px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2px",
            flex: "1 0 0",
            borderRadius: "6px",
            background: "#829C15",
            boxShadow:
              "1px 1px 2px 1px rgba(255, 255, 255, 0.18) inset, -1px -1px 2px 1px rgba(255, 255, 255, 0.18) inset",
          }}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default PatientReport;
