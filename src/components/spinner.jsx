import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative w-12 h-12">
        {/* Outer Ring */}
        <div className="absolute w-full h-full border-4 border-[#E5E7EA] rounded-full"></div>

        {/* Animated Ring */}
        <div className="absolute w-full h-full border-4 border-transparent border-t-[#829C15] rounded-full animate-spin"></div>

        {/* Inner Glow */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-[#829C15]/20 to-transparent animate-pulse"></div>
      </div>
    </div>
  );
};

export default Spinner;
