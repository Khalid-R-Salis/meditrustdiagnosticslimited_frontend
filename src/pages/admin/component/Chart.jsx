import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const Chart = () => {
  const data = [
    {
      name: "FOLLICLE STIMULATING HORMONE (FSH) HORMONE FOLLICLE STIMULATING HORMONE (FSH) HORMONEFOLLICLE STIMULATING HORMONE (FSH) HORMONEFOLLICLE STIMULATING HORMONE (FSH) HORMONEFOLLICLE STIMULATING HORMONE (FSH) HORMONEFOLLICLE STIMULATING HORMONE (FSH) HORMONE",
      value: 32,
      color: "#3C480A",
    },
    { name: "LUTEINIZING HORMONE (LH)", value: 32, color: "#829C15" },
    { name: "PROLACTIN (PRL)", value: 32, color: "#DDF08F" },
    { name: "OTHER TEST1", value: 4, color: "#C8D97E" },
    { name: "OTHER TEST2", value: 5, color: "#E6EEA3" },
  ];

  return (
    <div className="flex flex-col items-center md:items-start w-full max-w-sm mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center w-full mb-1 px-1">
        <h2 className="text-[15px] font-normal leading-[24px] text-[#000] font-inter ml-[5px]">
          Most requested tests
        </h2>

        <select className="border rounded-lg px-2 py-1 text-[11px] text-gray-600 font-inter w-[75px] outline-none">
          <option>Today</option>
          <option>This week</option>
          <option>This month</option>
        </select>
      </div>

      {/* Chart */}
      <div className="w-[160px] h-[160px] md:w-[160px] md:h-[160px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={65}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-gray-800 font-inter">
            {data.reduce((sum, d) => sum + d.value, 0)}
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-1 w-full px-1 max-h-[200px] overflow-y-auto overflow-x-auto scrollbar-thin-green">
        {data.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-[4px] bg-[#FAFAFA] px-2 py-[1px] mb-1 w-full"
          >
            {/* Color dot */}
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: item.color }}
            ></span>

            {/* Name  */}
            <span
              className="flex-1 min-w-0 overflow-x-auto whitespace-nowrap font-inter text-[10px] font-normal leading-[14px] text-[#596066] scrollbar-thin-green"
              title={item.name}
            >
              {item.name}
            </span>

            {/* Value */}
            <span className="font-inter text-[10px] leading-[14px] text-[#596066] font-medium shrink-0">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chart;
