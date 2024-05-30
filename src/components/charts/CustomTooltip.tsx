export const ScoreTrendLineChartCustomTooltip = ({ ...props }) => {
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

export const ScoreTrendBarChartCustomTooltip = ({ ...props }) => {
  const { active, payload, label } = props;

  if (active && payload && payload.length) {
    return (
      <div className=" min-w-fit text-nowrap rounded-md bg-white p-[17px]  shadow-md">
        <p className="mb-2 text-[14px] font-bold">{`${label}`}</p>
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-row items-center gap-2">
            <div className="h-3 w-3 rounded-full border-2 border-solid border-blue-700 bg-white" />
            <p className="mr-[4px] text-[#A8A8A8]">내호실</p>
            <p className="text-[14px] text-body3">{payload[0].value}점</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="border-[#A8A8A8]-700 h-3 w-3 rounded-full border-2 border-solid bg-white" />
            <p className="mr-[4px] text-[#A8A8A8]">타호실</p>
            <p className="text-[14px] text-body3">{payload[1].value}점</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
