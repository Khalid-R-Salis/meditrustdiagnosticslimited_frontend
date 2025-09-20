import React, { useState, useEffect } from "react";
import bg1 from "../../assets/bg1.png";
import logo2 from "../../assets/logo2.png";

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

    // 👇 scroll to top so success message is visible
    window.scrollTo({ top: 0, behavior: "smooth" });

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
    window.history.back();
  };
  useEffect(() => {
    if (messageSent) {
      const timer = setTimeout(() => {
        setMessageSent(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [messageSent]);

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex flex-col items-center justify-center min-h-screen gap-[8px] bg-[#f9f9f9]"
    >
      <div
        className="absolute top-0 left-0 w-full flex items-center"
        style={{
          borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
          height: "64px",
        }}
      >
        <a href="/">
          <img
            src={logo2}
            alt="Logo"
            className="h-[40px] w-[166px] ml-4 sm:ml-[140px]"
          />
        </a>
      </div>

      <div className="bg-[#FFF] p-[24px] sm:p-[40px] rounded-[24px] shadow-md w-[90%] sm:w-[440px] max-w-[440px] mt-[72px] sm:mt-0 mb-[2px]">
        {messageSent && (
          <p className="text-[#2E7D32] text-[13px] sm:text-[14px] font-inter mb-3 sm:mb-4 text-center sm:text-left">
            Message successfully sent to admin!
          </p>
        )}

        <div className="mb-[2px] sm:mb-8 text-[#383F45] text-[13px] sm:text-[14px] font-inter font-normal leading-[20px]">
          <a href="#" onClick={handleBack}>
            ← BACK
          </a>
        </div>

        <h1 className="text-black text-[19px] sm:text-[20px] font-semibold leading-[30px] font-inter mb-1">
          Contact Admin
        </h1>
        <p className="text-[#383F45] text-[13px] sm:text-[14px] leading-[20px] font-normal font-inter mb-6">
          Kindly fill the form below and your complaint will be sent directly to
          the administrator.
        </p>

        <div className="mb-4">
          <label className="text-[#454C52] text-[13px] sm:text-[14px] font-normal leading-5 font-inter mb-2 block">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full rounded-[8px] bg-white shadow-custom px-[14px] py-[10px] focus:outline-none text-[13px] sm:text-[14px]"
          />
        </div>

        <div className="mb-4">
          <label className="text-[#454C52] text-[13px] sm:text-[14px] font-normal leading-5 font-inter mb-2 block">
            Role
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full rounded-[8px] bg-white shadow-custom px-[14px] py-[10px] focus:outline-none text-[13px] sm:text-[14px]"
          >
            <option value="">Select your role</option>
            <option value="Receptionist">Receptionist</option>
            <option value="Lab Technician">Lab Technician</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="text-[#454C52] text-[13px] sm:text-[14px] font-normal leading-5 font-inter mb-2 block">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-[8px] bg-white shadow-custom px-[14px] py-[10px] focus:outline-none text-[13px] sm:text-[14px]"
          />
        </div>

        <div className="mb-4">
          <label className="text-[#454C52] text-[13px] sm:text-[14px] font-normal leading-5 font-inter mb-2 block">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-[8px] bg-white shadow-custom px-[14px] py-[10px] focus:outline-none text-[13px] sm:text-[14px]"
          />
        </div>

        <div className="mb-6">
          <label className="text-[#454C52] text-[13px] sm:text-[14px] font-normal leading-5 font-inter mb-2 block">
            Complaint Description
          </label>
          <textarea
            name="complaint"
            placeholder="Describe your issue or complaint"
            value={formData.complaint}
            onChange={handleChange}
            rows={4}
            required
            className="w-full rounded-[8px] bg-white shadow-custom px-[14px] py-[10px] focus:outline-none resize-none text-[13px] sm:text-[14px]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#829C15] text-white py-[10px] px-[18px] rounded-lg font-medium shadow-sm text-[13px] sm:text-[14px]"
        >
          Send to Admin
        </button>
      </div>
    </form>
  );
};

export default ContactAdmin;
