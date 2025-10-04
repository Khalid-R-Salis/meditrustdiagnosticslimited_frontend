import React, { useRef } from "react";
import meditrustbg from "../../src/assets/meditrustbg.jpg";

const TestResult = ({ disableUpload = false }) => {
  const cardRef = useRef();

  // ✅ Download as high-quality PDF
  const handleDownload = async () => {
    const element = cardRef.current;
    if (!element) return;

    const html2canvas = (await import("html2canvas")).default;
    const { jsPDF } = await import("jspdf");

    const canvas = await html2canvas(element, {
      scale: 3, // higher = sharper
      useCORS: true, // keeps background
      backgroundColor: null, // keeps transparency if any
    });

    const imgData = canvas.toDataURL("image/png", 1.0); // max quality
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgProps = pdf.getImageProperties(imgData);
    const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, imgHeight, "", "FAST");
    pdf.save("test-result.pdf");
  };

  // ✅ Print with background in high quality
  const handlePrint = async () => {
    const element = cardRef.current;
    if (!element) return;

    const html2canvas = (await import("html2canvas")).default;
    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
      backgroundColor: null,
    });

    const imgData = canvas.toDataURL("image/png", 1.0);
    const WinPrint = window.open("", "_blank", "width=800,height=600");
    WinPrint.document.write(`
      <html>
        <head>
          <title>Print Test Result</title>
          <style>
            body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; }
            img { max-width: 100%; height: auto; }
          </style>
        </head>
        <body>
          <img src="${imgData}" />
        </body>
      </html>
    `);
    WinPrint.document.close();
    WinPrint.focus();
    setTimeout(() => {
      WinPrint.print();
      WinPrint.close();
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form className="flex flex-col items-center justify-center">
        {/* CARD */}
        <div
          ref={cardRef}
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
                arranged one on top of the other...
              </p>
            </div>

            {/* Footer */}
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

        {/* BUTTONS */}
        <div className="flex justify-between mt-2 w-[220px] gap-8">
          {/* ✅ Download PDF */}
          <button
            type="button"
            onClick={handleDownload}
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
          >
            Download
          </button>

          {/* ✅ Print */}
          <button
            type="button"
            disabled={disableUpload}
            onClick={handlePrint}
            className={`text-[7px] font-medium text-white ${
              disableUpload ? "bg-gray-300 cursor-not-allowed" : "bg-[#829C15]"
            }`}
            style={{
              display: "flex",
              padding: "4px 6px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "2px",
              flex: "1 0 0",
              borderRadius: "6px",
              boxShadow:
                "1px 1px 2px 1px rgba(255, 255, 255, 0.18) inset, -1px -1px 2px 1px rgba(255, 255, 255, 0.18) inset",
            }}
          >
            Print
          </button>
        </div>
      </form>
    </div>
  );
};

export default TestResult;
