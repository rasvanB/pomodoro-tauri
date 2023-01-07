import { cva } from "class-variance-authority";

export const button = cva([], {
  variants: {
    intent: {
      adjust:
        "bg-purple-600 hover:bg-purple-700 w-[40px] flex items-center justify-center text-white text-xl h-[40px] font-poppins",
    },
    rounding: {
      left: "rounded-l-md",
      right: "rounded-r-md",
    },
  },
});
