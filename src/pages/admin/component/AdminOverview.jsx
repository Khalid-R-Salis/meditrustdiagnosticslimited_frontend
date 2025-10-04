import HeaderStats from "../component/AdminHeaderStats";
import Chart from "../component/Chart";
import Siderecord from "../component/Siderecord";
import UserActivities from "../component/UserActivities";

const AdminOverview = ({ setActiveNav }) => {
  return (
    <>
      {/* Main content container */}
      <div className="overflow-y-auto max-h-screen pt-[64px] md:pt-0 scrollbar-thin-green">
        <div className="bg-white pt-0 pb-4 px-4 sm:pt-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 relative">
          {/* Desktop fixed header hidden on tablet/mobile*/}
          <div className="hidden md:block mb-[4rem]">
            <div className="fixed top-0 right-0 z-40 bg-white h-[64px] px-10 lg:px-16 xl:px-20 2xl:px-24 flex items-center w-[calc(100%-350px)]">
              <h1 className="text-[24px] font-semibold leading-[32px] text-black font-inter">
                Overview
              </h1>
            </div>
          </div>

          {/* Stats cards */}
          <HeaderStats />

          {/* Chart + Siderecord */}
          <div className="flex flex-col lg:flex-row justify-start items-start gap-6 w-full mt-[50px]">
            <div className="w-full lg:w-[350px] md:w-[300px] flex justify-center lg:justify-start">
              <Chart />
            </div>

            <div className="flex-1 w-full overflow-x-hidden">
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
