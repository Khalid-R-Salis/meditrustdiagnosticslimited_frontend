import React, { useState } from "react";

const ContactAdmin = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    role: "",
    email: "",
    phone: "",
    complaint: "",
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Sending data to admin email:", formData);

    setMessageSent(true);

    // Clear form after sending
    setFormData({
      fullName: "",
      role: "",
      email: "",
      phone: "",
      complaint: "",
    });
  };

  const handleBack = (e) => {
    e.preventDefault();
    window.history.back(); // Go to immediate previous page
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center min-h-screen bg-[#f9f9f9] px-4"
    >
      <div className="bg-white p-[40px] rounded-[24px] shadow-md w-full max-w-[500px]">
        <div className="mb-8 text-[#383F45] text-[14px] font-inter font-normal leading-[20px]">
          <a href="#" onClick={handleBack}>
            ← BACK
          </a>
        </div>
        <h1 className="text-black text-[20px] font-semibold leading-[30px] font-inter mb-1">
          Contact Admin
        </h1>
        <p className="text-[#383F45] text-[14px] leading-[20px] font-normal font-inter mb-6">
          Kindly fill the form below and your complaint will be sent directly to
          the administrator.
        </p>

        <div className="mb-4">
          <label className="text-[#454C52] text-[14px] font-normal leading-5 font-inter mb-2 block">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full rounded-[8px] bg-white shadow-custom px-[14px] py-[10px] focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="text-[#454C52] text-[14px] font-normal leading-5 font-inter mb-2 block">
            Role
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full rounded-[8px] bg-white shadow-custom px-[14px] py-[10px] focus:outline-none"
          >
            <option value="">Select your role</option>
            <option value="Receptionist">Receptionist</option>
            <option value="Lab Technician">Lab Technician</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="text-[#454C52] text-[14px] font-normal leading-5 font-inter mb-2 block">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-[8px] bg-white shadow-custom px-[14px] py-[10px] focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="text-[#454C52] text-[14px] font-normal leading-5 font-inter mb-2 block">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-[8px] bg-white shadow-custom px-[14px] py-[10px] focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="text-[#454C52] text-[14px] font-normal leading-5 font-inter mb-2 block">
            Complaint Description
          </label>
          <textarea
            name="complaint"
            placeholder="Describe your issue or complaint"
            value={formData.complaint}
            onChange={handleChange}
            rows={4}
            required
            className="w-full rounded-[8px] bg-white shadow-custom px-[14px] py-[10px] focus:outline-none resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#829C15] text-white py-[10px] px-[18px] rounded-lg font-medium shadow-sm"
        >
          Send to Admin
        </button>

        {messageSent && (
          <p className="text-[#2E7D32] mt-4 text-[14px] font-inter">
            Message successfully sent to admin!
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactAdmin;
