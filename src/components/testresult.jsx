import { useNavigate } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useRef, useState } from "react";

// PDF.js worker for Vite
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const TestResult = ({ onClose, from }) => {
  // const [fileUrl] = useState(`${import.meta.env.BASE_URL}sample.pdf`);
  const [fileUrl] = useState("/sample.pdf");

  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const containerRef = useRef(null);
  const [pageWidth, setPageWidth] = useState(800);
  const navigate = useNavigate();

  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobileOrTablet(width < 1024);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      const containerW = containerRef.current?.clientWidth ?? window.innerWidth;
      const computed = Math.min(containerW * 0.95, 1200);
      setPageWidth(Math.max(300, computed));
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "test-result.pdf";
    link.click();
  };

  const handlePrint = () => {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = fileUrl;
    document.body.appendChild(iframe);
    iframe.onload = () => {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
      setTimeout(() => iframe.remove(), 1000);
    };
  };

  return (
    <div className="w-full h-screen flex flex-col bg-white font-inter relative">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-20">
        <h2 className="text-lg font-semibold">Test Result</h2>
        <div className="flex gap-2">
          <button
            onClick={!isMobileOrTablet ? handlePrint : undefined}
            disabled={isMobileOrTablet}
            className={`px-3 py-1 rounded text-white transition-colors ${
              isMobileOrTablet
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#829C15] hover:bg-[#718813]"
            }`}
            title={
              isMobileOrTablet
                ? "Print not supported on mobile/tablet"
                : "Print PDF"
            }
          >
            Print
          </button>

          <button
            onClick={handleDownload}
            className="border px-3 py-1 rounded hover:bg-gray-100"
          >
            Download
          </button>

          <button
            onClick={() => setShowCancelConfirm(true)}
            className="border px-3 py-1 rounded hover:bg-red-50 hover:text-red-600"
          >
            Cancel
          </button>
        </div>
      </div>

      {/* PDF Viewer */}
      <div
        ref={containerRef}
        className="flex-1 overflow-auto flex justify-center items-start bg-gray-50 py-4 scrollbar-thin-green"
      >
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => console.error("PDF failed to load:", error)}
          loading={<p className="text-center py-8">Loading PDF...</p>}
          error={
            <p className="text-red-500 text-center py-8">
              Failed to load PDF file.
            </p>
          }
        >
          {numPages &&
            Array.from({ length: numPages }, (_, i) => (
              <Page
                key={`page_${i + 1}`}
                pageNumber={i + 1}
                width={pageWidth}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                className="shadow-md border bg-white my-2 mx-auto"
              />
            ))}
        </Document>
      </div>

      {/* Confirmation Modal */}
      {showCancelConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-full max-w-sm mx-4 text-center border-t-4 border-red-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Confirm Close
            </h3>
            <p className="text-gray-600 text-base mb-6">
              Are you sure you want to close this page? <br />
              <b className="uppercase text-red-600 block mt-1">
                Changes are Unsaved!
              </b>
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button
                type="button"
                onClick={() => setShowCancelConfirm(false)}
                className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-2 text-black text-base font-semibold hover:bg-gray-100 transition-colors"
              >
                NO, Stay
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowCancelConfirm(false);
                  if (from === "admin") {
                    navigate("/admin", { replace: true });
                    navigate(0); // force refresh
                  } else if (from === "technician") {
                    navigate("/technician", { replace: true });
                    navigate(0); // force refresh
                  } else {
                    if (typeof onClose === "function") onClose();
                  }
                }}
                className="flex-1 rounded-xl bg-[#829C15] px-4 py-2 text-white text-base font-semibold hover:bg-[#718813] transition-colors shadow-md"
              >
                YES, Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestResult;
