import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import logo2 from "../assets/logo2.png";
import paidStamp from "../assets/paid_stamp.png";

const ReceiptTemplate = () => {
  // Hardcoded receipt details, Fahad will replace with actual data later
  const receiptDetails = [
    { label: "Patient ID:", value: "#5787" },
    { label: "Patient's Name:", value: "John Doe" },
    { label: "Sex:", value: "Male" },
    { label: "Phone:", value: "08012345678" },
    { label: "Sample:", value: "Blood" },
    { label: "Referral Hospital:", value: "General Hospital Kano" },
    { label: "Operator:", value: "Jane Smith" },
    { label: "Test Type:", value: "Full Blood Count" },
    { label: "Test Price:", value: "NGN 50,000" },
    { label: "Total:", value: "NGN 50,000" },
    { label: "Payment Method:", value: "Cash" },
    { label: "Processed by:", value: "Nwankwo Paschal" },
  ];

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

  const sendInChunks = async (characteristic, data, chunkSize = 20) => {
    for (let i = 0; i < data.length; i += chunkSize) {
      const chunk = data.slice(i, i + chunkSize);
      await characteristic.writeValue(chunk);
      await new Promise((res) => setTimeout(res, 50)); // small delay for buffer flush
    }
  };

  const handleBluetoothPrint = async () => {
    try {
      const device = await navigator.bluetooth.requestDevice({
        filters: [{ name: "MTP-II" }],
        optionalServices: ["000018f0-0000-1000-8000-00805f9b34fb"],
      });

      const server = await device.gatt.connect();
      const service = await server.getPrimaryService(
        "000018f0-0000-1000-8000-00805f9b34fb"
      );

      const characteristics = await service.getCharacteristics();
      const writeCharacteristic = characteristics.find(
        (c) => c.properties.write || c.properties.writeWithoutResponse
      );

      if (!writeCharacteristic) {
        throw new Error("No writable characteristic found!");
      }

      const esc = "\x1B";
      const newLine = "\x0A";
      let textToPrint = "";

      textToPrint += esc + "@"; // Initialize
      textToPrint += esc + "a" + "\x01"; // Center
      textToPrint += esc + "!" + "\x10"; // Double height
      textToPrint += esc + "E" + "\x01"; // Bold
      textToPrint += "MEDITRUST DIAGNOSTICS LIMITED" + newLine;
      textToPrint += esc + "!" + "\x00"; // Reset
      textToPrint += esc + "E" + "\x00"; // Bold off

      textToPrint += "Address: Mandawari, Kano" + newLine + newLine;

      textToPrint += esc + "E" + "\x01";
      textToPrint += "PATIENT RECEIPT" + newLine;
      textToPrint += esc + "E" + "\x00";
      textToPrint += new Date().toLocaleString() + newLine + newLine;

      // Details
      textToPrint += esc + "a" + "\x00"; // Left align
      receiptDetails.forEach((item) => {
        textToPrint += `${item.label.padEnd(13)} ${item.value}${newLine}`;
      });

      textToPrint += newLine + esc + "a" + "\x01" + "*** PAID ***" + newLine;
      textToPrint += esc + "a" + "\x01";
      textToPrint += "Thanks for your patronage";
      textToPrint += newLine.repeat(4);

      const encoder = new TextEncoder();
      const dataBytes = encoder.encode(textToPrint);

      // 🚀 Send in chunks
      await sendInChunks(writeCharacteristic, dataBytes, 20);

      alert("Bluetooth printing completed!");
    } catch (err) {
      alert("Failed to print via Bluetooth: " + err.message);
    }
  };

  return (
    <div className="flex flex-col items-center py-4">
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
          {receiptDetails.map((item, idx) => (
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
          <img src={paidStamp} alt="Paid Stamp" className="w-12 mx-auto" />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-2 gap-2 w-full max-w-[230px] print:hidden">
        <button
          onClick={handleDownload}
          style={{
            borderRadius: "5px",
            border: "1px solid var(--Grey-200, #E5E7EA)",
            background: "var(--Grey-50, #FAFAFA)",
            color: "var(--Primary-Black, #000)",
            fontFamily: "Inter, sans-serif",
            fontSize: "8px",
            fontWeight: 400,
            lineHeight: "16px",
            padding: "2px 8px",
            width: "40%",
            textAlign: "center",
          }}
        >
          Download
        </button>

        <button
          onClick={handleBluetoothPrint}
          style={{
            borderRadius: "5px",
            background: "var(--Brand-dark, #829C15)",
            boxShadow:
              "1px 1px 2px 1px rgba(255,255,255,0.18) inset, -1px -1px 2px 1px rgba(255,255,255,0.18) inset",
            color: "var(--Primary-White, #FFF)",
            fontFamily: "Inter, sans-serif",
            fontSize: "8px",
            fontWeight: 400,
            lineHeight: "16px",
            padding: "2px 8px",
            width: "40%",
            textAlign: "center",
          }}
        >
          Print
        </button>
      </div>
    </div>
  );
};

export default ReceiptTemplate;
