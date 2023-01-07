import { Icon } from "@iconify/react";
import { button } from "../styles/button";

type SpinnerProps = {
  onIncrement?: () => void;
  onDecrement?: () => void;
  onChange?: (value: number) => void;
  label?: string;
  value: number;
};

const Spinner = ({
  onIncrement,
  onDecrement,
  onChange,
  value,
  label,
}: SpinnerProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const inputValue = Number(e.target.value);
      onChange(inputValue);
    }
  };
  return (
    <div className="flex flex-col items-center">
      {label && (
        <span className="text-white mb-2 font-inter font-medium">{label}</span>
      )}
      <div className="flex items-center justify-center px-2">
        <button
          className={button({ intent: "adjust", rounding: "left" })}
          onClick={onDecrement}
        >
          <Icon icon="bx:minus" />
        </button>
        <input
          type="text"
          className="h-[40px] w-[100px] bg-[#1a1a2c] outline outline-0 outline-zinc-800 text-center focus:outline-1 font-semibold"
          value={value}
          onChange={handleChange}
        />
        <button
          className={button({
            intent: "adjust",
            rounding: "right",
          })}
          onClick={onIncrement}
        >
          <Icon icon="majesticons:plus-line" />
        </button>
      </div>
    </div>
  );
};

export default Spinner;
