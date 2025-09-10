import HeaderStats from "../component/AdminHeaderStats";
import Chart from "../component/Chart";
import Siderecord from "../component/Siderecord";
import UserActivities from "../component/UserActivities";

const AdminOverview = ({ setActiveNav }) => {
  return (
    <div className="flex w-full">
      <div className="flex-1 bg-[#ffffff] py-8 px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 relative">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-[24px] font-semibold leading-[32px] text-black font-inter">
            Overview
          </h1>
        </div>

        <HeaderStats />

        <div className="flex justify-start items-start gap-6">
          <Chart />
          <Siderecord setActiveNav={setActiveNav} />
        </div>

        <UserActivities setActiveNav={setActiveNav} />
      </div>
    </div>
  );
};

export default AdminOverview;
