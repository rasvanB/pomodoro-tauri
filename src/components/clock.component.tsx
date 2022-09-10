const Clock = () => {
  return (
    <div className="flex justify-center items-center px-5 relative">
      <svg className="h-[317px] -rotate-90 pt-1">
        <circle
          cx="153.5px"
          cy="153.5px"
          r="125px"
          fill="transparent"
          stroke="#161626"
          strokeWidth="30px"
        />
        <circle
          cx="153.5px"
          cy="153.5px"
          r="125px"
          fill="transparent"
          stroke="#7000FF"
          strokeDasharray="785.4px"
          strokeDashoffset="589.1px"
          strokeWidth="30px"
        />
        <circle
          cx="153.5px"
          cy="153.5px"
          r="120px"
          fill="#0e0e18"
          style={{ filter: "drop-shadow(0px 0px 6px rgb(0,0,0,0.4))" }}
        />
      </svg>
      <div className="absolute flex flex-col pb-5 text-center font-montserrat select-none">
        <div className="font-medium text-[24px] text-[#D2CCCC]">Focus</div>
        <div className="font-medium text-[65px] text-white leading-none">
          11:23
        </div>
        <div className="font-semibold text-[16px] text-[#393939]">
          ROUND 0 / 4
        </div>
      </div>
    </div>
  );
};
export default Clock;
