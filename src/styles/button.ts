import { cva } from "class-variance-authority";

export const button = cva([], {
  variants: {
    intent: {
      adjust:
        "bg-purple-600 hover:bg-purple-700 w-[40px] flex items-center justify-center text-white text-xl h-[40px] font-poppins",
      sideControl:
        "bg-[#181828] w-[55px] h-[55px] rounded-full flex justify-center items-center hover:bg-[#1e1e31] z-10",
    },
    rounding: {
      left: "rounded-l-md",
      right: "rounded-r-md",
    },
  },
});
