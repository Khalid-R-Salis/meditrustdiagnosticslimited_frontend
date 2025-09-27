import { useNavigate } from "react-router-dom";

const mockPatientData = [
  {
    id: 1,
    name: "Olivia Pam",
    phone: "0909999999",
    testType: "FOLLICLE STIMULATING HORMONE (FSH)",
    dateTime: "16, Jun 2025 - 11:00 AM",
    amount: "₦50,0000 (cash)",
  },
  {
    id: 2,
    name: "Olivia Pam",
    phone: "0909999999",
    testType: "FOLLICLE STIMULATING HORMONE (FSH)",
    dateTime: "16, Jun 2025 - 11:00 AM",
    amount: "₦50,0000 (transfer)",
  },
  {
    id: 3,
    name: "Olivia Pam",
    phone: "0909999999",
    testType: "FOLLICLE STIMULATING HORMONE (FSH)",
    dateTime: "16, Jun 2025 - 11:00 AM",
    amount: "₦50,0000 (transfer)",
  },
  {
    id: 4,
    name: "Olivia Pam",
    phone: "0909999999",
    testType: "FOLLICLE STIMULATING HORMONE (FSH)",
    dateTime: "16, Jun 2025 - 11:00 AM",
    amount: "₦50,0000 (transfer)",
  },
  {
    id: 5,
    name: "Olivia Pam",
    phone: "0909999999",
    testType: "FOLLICLE STIMULATING HORMONE (FSH)",
    dateTime: "16, Jun 2025 - 11:00 AM",
    amount: "₦50,0000 (transfer)",
  },
];

const Siderecord = ({ setActiveNav }) => {
  return (
    <div className="flex-1 bg-[#ffffff] px-4 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[15px] font-normal leading-[24px] text-[#000] font-inter">
          Recent patient tests
        </h2>

        <button
          onClick={() => setActiveNav("PatientReports")}
          className="
          text-sm font-medium leading-5 text-[#000000] font-inter
          rounded-lg border border-[#E5E7EA] bg-[#FAFAFA]
          flex justify-center items-center
          px-3 py-1.5
          hover:bg-gray-100
        "
        >
          View all
        </button>
      </div>

      <section className="bg-white overflow-x-auto max-w-full">
        <table className="min-w-[600px] w-full text-left text-[10px] text-[#676E76] rounded-sm">
          <thead>
            <tr className="border-b font-inter">
              <th className="px-3 py-[7px] font-medium leading-[16px] text-[#676E76] font-inter">
                Patient’s info
              </th>
              <th className="px-3 py-[7px] font-medium leading-[16px] text-[#676E76] font-inter">
                Test type
              </th>
              <th className="px-3 py-[7px] font-medium leading-[16px] text-[#676E76] font-inter">
                Date and time
              </th>
              <th className="px-3 py-[7px] font-medium leading-[16px] text-[#676E76] font-inter">
                Amount paid
              </th>
            </tr>
          </thead>

          <tbody>
            {mockPatientData.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="px-3 py-[5px]">
                  <div className="flex flex-col space-y-[1px]">
                    <span className="font-medium leading-[16px] text-[#000] font-inter">
                      {item.name}
                    </span>
                    <span className="font-normal leading-[16px] text-[#676E76] font-inter">
                      {item.phone}
                    </span>
                  </div>
                </td>

                <td className="px-3 py-[5px] truncate max-w-[150px]">
                  {item.testType}
                </td>
                <td className="px-3 py-[5px]">{item.dateTime}</td>
                <td className="px-3 py-[5px]">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Siderecord;
