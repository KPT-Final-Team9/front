export const ScoreTrendChartCustomTooltip = ({ ...props }) => {
  const { active, payload, label } = props;

  if (active && payload && payload.length) {
    return (
      <div className=" min-w-[139px] rounded-md bg-white p-[17px] shadow-md">
        <p className="mb-2 text-[14px] font-bold">{`${label}`}</p>
        <div className="flex flex-row items-center gap-2">
          <div className="h-3 w-3 rounded-full border-2 border-solid border-blue-700 bg-white" />
          <p className="mr-[4px] text-[#A8A8A8]">이번달</p>
          <p className="text-[14px] text-body3">{payload[0].value}점</p>
        </div>
      </div>
    );
  }

  return null;
};
