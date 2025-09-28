import HeaderStats from "../component/AdminHeaderStats";
import Chart from "../component/Chart";
import Siderecord from "../component/Siderecord";
import UserActivities from "../component/UserActivities";

const AdminOverview = ({ setActiveNav }) => {
  return (
    <>
      {/* Mobile fixed header */}
      <div className="block md:hidden fixed top-0 left-0 w-full bg-white z-30 border-b border-gray-200 px-4 py-2">
        <div className="flex justify-between items-center">
          <h1 className="text-[24px] font-semibold leading-[32px] text-black font-inter ml-[40px] mt-[7px] md:ml-0 md:mt-0">
            Overview
          </h1>
        </div>
      </div>

      {/* Main content container */}
      <div
        className={`overflow-x-auto overflow-y-auto scrollbar-thin-green ${"mt-[64px] md:mt-0 max-h-[calc(100vh-64px)] md:max-h-full"}`}
      >
        <div className="flex-1 bg-[#ffffff] py-4 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 relative">
          {/* Desktop header */}
          <div className="hidden md:flex justify-between items-center mb-4 mt-2">
            <h1 className="text-[24px] font-semibold leading-[32px] text-black font-inter">
              Overview
            </h1>
          </div>

          {/* Stats cards */}
          <HeaderStats />

          {/* Chart + Siderecord */}
          <div className="flex flex-col lg:flex-row justify-start items-start gap-6 w-full mt-4">
            <div className="w-full lg:w-[350px] md:w-[300px] flex justify-center lg:justify-start">
              <Chart />
            </div>

            <div className="flex-1 w-full  overflow-x-hidden">
              <Siderecord setActiveNav={setActiveNav} />
            </div>
          </div>

          {/* User Activities */}
          <div className="mt-6">
            <UserActivities setActiveNav={setActiveNav} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminOverview;
