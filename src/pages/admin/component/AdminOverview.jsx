import HeaderStats from "../component/AdminHeaderStats";
import Chart from "../component/Chart";
import Siderecord from "../component/Siderecord";
import UserActivities from "../component/UserActivities";

const AdminOverview = ({ setActiveNav }) => {
  return (
    <div className="flex w-full overflow-x-hidden min-h-screen overflow-y-auto">
      <div className="flex-1 bg-[#ffffff] py-0 px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 relative">
        <div className="flex justify-between items-center mb-4 mt-2">
          <h1 className="text-[24px] font-semibold leading-[32px] text-black font-inter">
            Overview
          </h1>
        </div>

        <HeaderStats />

        <div className="flex flex-wrap lg:flex-nowrap justify-start items-start gap-6 w-full overflow-hidden">
          <Chart />
          <div className="flex-1 min-w-0">
            <Siderecord setActiveNav={setActiveNav} />
          </div>
        </div>

        <UserActivities setActiveNav={setActiveNav} />
      </div>
    </div>
  );
};

export default AdminOverview;
