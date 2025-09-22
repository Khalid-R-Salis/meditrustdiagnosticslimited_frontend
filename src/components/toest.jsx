// success and error toast

import React, { useState } from "react";
import Toast from "../../../components/toest";

const ToastDemo = () => {
  const [toast, setToast] = useState(null);

  const showSuccess = (message) => {
    setToast({ type: "success", message });
  };

  const showError = (message) => {
    setToast({ type: "error", message });
  };

  return (
    <div className="p-8">
      <button
        onClick={() => showSuccess("Complaint removed successfully!")}
        className="px-4 py-2 bg-green-500 text-white rounded mr-4"
      >
        Show Success Toast
      </button>
      <button
        onClick={() => showError("Oops! Something went wrong.")}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Show Error Toast
      </button>

      <Toast toast={toast} setToast={setToast} />
    </div>
  );
};

export default ToastDemo;

/**
 If you’re using this Toast across multiple pages,
   lift toast state up (e.g., inside a Layout or App component).
 
  Example (App.js or Layout.js):
 
  function App() {
   const [toast, setToast] = useState(null);
 
    return (
   <div>
        <YourPage setToast={setToast} />
      <Toast toast={toast} setToast={setToast} />
    </div>
   );
 }

 Then in any page:
 
 props.setToast({ type: "success", message: "User created successfully!" });
 */
