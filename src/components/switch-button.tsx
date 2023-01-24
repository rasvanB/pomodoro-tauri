import { CSSTransition } from "react-transition-group";

type SwitchButtonProps = {
  value: boolean;
  onToggle: () => void;
  label?: string;
};

function SwitchButton({ value, onToggle, label }: SwitchButtonProps) {
  return (
    <div className="flex justify-center items-center mt-2">
      {label && <span className="mr-4 font-inter">{label}</span>}
      <button
        className={`flex w-[48.5px] rounded-full focus:outline-none transition-colors ${
          value
            ? "bg-purple-500 dark:bg-green-600"
            : "bg-[#1a1a2c] dark:bg-[#1b2c1a]"
        }`}
        onClick={onToggle}
      >
        <div
          className={`${
            value ? "translate-x-full" : "translate-x-0"
          } inline-block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out`}
        />
      </button>
    </div>
  );
}
export default SwitchButton;
