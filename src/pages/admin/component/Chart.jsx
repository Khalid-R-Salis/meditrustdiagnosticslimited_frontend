import { PieChart, Pie, Cell, Tooltip } from "recharts";

const Chart = () => {
  const data = [
    {
      name: "FOLLICLE STIMULATING HORMONE (FSH) HORMONE",
      value: 32,
      color: "#3C480A",
    },
    { name: "LUTEINIZING HORMONE (LH)", value: 32, color: "#829C15" },
    { name: "PROLACTIN (PRL)", value: 32, color: "#DDF08F" },
    { name: "OTHER TEST1", value: 4, color: "#C8D97E" },
    { name: "OTHER TEST2", value: 5, color: "#E6EEA3" },
  ];

  return (
    <div className="flex flex-col items-start relative w-[250px]">
      {/* Header */}
      <div className="flex justify-between items-center w-full mb-2">
        <h2 className="text-[15px] font-normal leading-[24px] text-[#000] font-inter">
          Most requested tests
        </h2>

        <select className="border rounded-lg px-1 py-0.5 text-[11px] text-gray-600 font-inter w-[85px] outline-none">
          <option>Today</option>
          <option>This week</option>
          <option>This month</option>
        </select>
      </div>

      {/* Chart */}
      <div className="relative w-[160px] h-[160px] my-1 mx-auto">
        <PieChart width={160} height={160}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={45}
            outerRadius={65}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-gray-800 font-inter">
            {data.reduce((sum, d) => sum + d.value, 0)}
          </span>
        </div>
      </div>

      <div className="mt-2 space-y-[2px] w-full">
        {data.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-[4px] bg-[#FAFAFA] px-2 py-[1px] w-full"
          >
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: item.color }}
            ></span>

            <span
              className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap font-inter text-[10px] font-normal leading-[14px] text-[#596066]"
              title={item.name}
            >
              {item.name}
            </span>

            <span className="font-inter text-[10px] leading-[14px] text-[#596066] font-medium">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chart;
