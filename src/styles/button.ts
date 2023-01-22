import { cva } from "class-variance-authority";

export const button = cva([], {
  variants: {
    intent: {
      adjust:
        "bg-purple-600 hover:bg-purple-700 w-[40px] flex items-center justify-center text-white text-xl h-[40px] font-poppins",
      sideControl:
        " w-[55px] h-[55px] rounded-full flex justify-center items-center z-10 transition-colors duration-300 ease-in-out relative",
    },
    rounding: {
      left: "rounded-l-md",
      right: "rounded-r-md",
    },
  },
});
