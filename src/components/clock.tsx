/*
CALCULATIONS 
------------------------------
size = 100
strokeWidth = 10
center = size / 2
       = 100 / 2 = 50
radius = center - strokeWidth 
       = 50 - 10 = 40
------------------------------
*/

const Clock = () => {
  return (
    <div className="flex justify-center items-center px-5 relative mt-5">
      <svg className="w-[330px] h-[330px] -rotate-90 pt-2 mr-5 drop-shadow-[0_0_20px_rgba(129,31,255,0.1)]">
        <circle
          cx="165px"
          cy="165px"
          r="135px"
          fill="transparent"
          stroke="#1f1f36"
          strokeWidth="20px"
        />
        <circle
          cx="165px"
          cy="165px"
          r="135px"
          fill="transparent"
          stroke="#7000FF"
          strokeDasharray="785px"
          strokeDashoffset="575px"
          strokeWidth="20px"
          strokeLinecap="round"
        />
        <circle
          cx="165px"
          cy="165px"
          r="125px"
          fill="#0e0e18"
          style={{ filter: "drop-shadow(0px 0px 8px rgb(0,0,0,0.4))" }}
        />
      </svg>
      <div className="absolute flex flex-col pb-5 text-center font-montserrat select-none">
        <div className="font-medium text-[24px] text-[#D2CCCC]">Focus</div>
        <div className="font-medium text-[70px] text-white leading-none">
          11:23
        </div>
        <div className="font-semibold text-[16px] text-[#393939] mt-1">
          ROUND 0 / 4
        </div>
      </div>
    </div>
  );
};
export default Clock;
