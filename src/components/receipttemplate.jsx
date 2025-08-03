import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import logo2 from "../assets/logo2.png";

const ReceiptPage = ({ data }) => {
  const handleDownload = () => {
    const input = document.getElementById("receipt");
    html2canvas(input, {
      scale: 4,
      useCORS: true,
      logging: false,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [58, (canvas.height * 58) / canvas.width],
      });
      pdf.addImage(
        imgData,
        "PNG",
        0,
        0,
        58,
        (canvas.height * 58) / canvas.width
      );
      pdf.save("patient_receipt.pdf");
    });
  };

  const handlePrint = () => {
    const content = document.getElementById("receipt").innerHTML;
    const win = window.open("", "", "width=300,height=600");
    win.document.write(`
      <html>
        <head>
          <title>Print Receipt</title>
          <style>
            body {
              font-family: sans-serif;
              font-size: 8px;
              margin: 0;
              padding: 10px;
              width: 230px;
              background-color: #F8F9F4;
            }
            .text-center { text-align: center; }
            img { max-width: 80px; margin: auto; display: block; }
          </style>
        </head>
        <body onload="window.print(); window.close();">
          ${content}
        </body>
      </html>
    `);
    win.document.close();
  };

  return (
    <div className="flex flex-col items-center py-4">
      {/* Receipt */}
      <div
        id="receipt"
        className="w-full max-w-[230px] font-inter text-black text-[7px] print:bg-[#F8F9F4] print:shadow-none print:text-black print:p-0 p-4 border"
        style={{ backgroundColor: "#F8F9F4" }}
      >
        {/* Header */}
        <div className="text-center border-b pb-2 mb-2">
          <img src={logo2} alt="Logo" className="w-16 mx-auto mb-1" />
          <p className="text-[8px] font-bold uppercase">PATIENT RECEIPT</p>
          <p className="text-[5px] mt-[-3px]">{new Date().toLocaleString()}</p>
        </div>

        {/* Details */}
        <div className="space-y-1 leading-[10px]">
          {[
            { label: "Ticket ID:", value: `#${data?.ticket || "5787"}` },
            { label: "Patient's Name:", value: data?.name || "John Doe" },
            { label: "Sex:", value: data?.sex },
            { label: "Phone:", value: data?.phone },
            { label: "Sample:", value: data?.sample },
            { label: "Referral Hospital:", value: data?.hospital },
            { label: "Operator:", value: data?.operator },
            { label: "Test Type:", value: data?.test },
            { label: "Test Price:", value: "₦50,000" },
            { label: "Total:", value: data?.total },
            { label: "Payment Method:", value: data?.payment },
            { label: "Processed by:", value: "Nwankwo Paschal" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col border-b border-dashed border-gray-300 pb-1"
            >
              <div className="flex justify-between w-full">
                <span
                  style={{
                    color: "var(--Grey-500, #676E76)",
                    fontWeight: 400,
                  }}
                  className="whitespace-nowrap text-[7px]"
                >
                  {item.label}
                </span>
                <span
                  style={{
                    color: "var(--Primary-Black, #000)",
                    fontWeight: 500,
                  }}
                  className="text-right max-w-[60%] text-[7px] break-words"
                >
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Paid Stamp */}
        <div className="mt-2 text-center">
          <img
            src="/src/assets/paid_stamp.png"
            alt="Paid Stamp"
            className="w-12 mx-auto"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-2 gap-2 w-full max-w-[230px] print:hidden">
        <button
          onClick={handleDownload}
          style={{
            borderRadius: "8px",
            border: "1px solid var(--Grey-200, #E5E7EA)",
            background: "var(--Grey-50, #FAFAFA)",
            color: "var(--Primary-Black, #000)",
            fontFamily: "Inter, sans-serif",
            fontSize: "8px",
            fontWeight: 400,
            lineHeight: "16px",
            padding: "2px 8px",
          }}
        >
          Download
        </button>
        <button
          onClick={handlePrint}
          style={{
            borderRadius: "8px",
            background: "var(--Brand-dark, #829C15)",
            boxShadow:
              "1px 1px 2px 1px rgba(255,255,255,0.18) inset, -1px -1px 2px 1px rgba(255,255,255,0.18) inset",
            color: "var(--Primary-White, #FFF)",
            fontFamily: "Inter, sans-serif",
            fontSize: "8px",
            fontWeight: 400,
            lineHeight: "16px",
            padding: "2px 8px",
            width: "45%",
            textAlign: "center",
          }}
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default ReceiptPage;
