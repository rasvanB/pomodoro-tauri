import { CSSTransition } from "react-transition-group";
import { settingsMenuTransition } from "../styles/settings-menu";
import { settingsAtom } from "../utils/store";
import { useAtom } from "jotai";

import Spinner from "./spinner";
import { MAX_TIME, NumberKeys, Settings } from "../types/settings";
import SwitchButton from "./switch-button";

type SettingsMenuProps = {
  show: boolean;
};

const SettingsMenu = ({ show }: SettingsMenuProps) => {
  const [settings, setSettings] = useAtom(settingsAtom);

  const handleIncrement = (max: number, value: NumberKeys<Settings>) => {
    if (settings[value] < max) {
      setSettings((prev) => ({ ...prev, [value]: prev[value] + 1 }));
    }
  };
  const handleDecrement = (min: number, value: NumberKeys<Settings>) => {
    if (settings[value] > min) {
      setSettings((prev) => ({ ...prev, [value]: prev[value] - 1 }));
    }
  };
  const handleChange = (
    min: number,
    max: number,
    value: NumberKeys<Settings>,
    inputValue: number
  ) => {
    if (inputValue >= min && inputValue <= max) {
      setSettings((prev) => ({ ...prev, [value]: inputValue }));
    }
    if (inputValue < min && settings[value] !== min) {
      setSettings((prev) => ({ ...prev, [value]: min }));
    }
    if (inputValue > max && settings[value] !== max) {
      setSettings((prev) => ({ ...prev, [value]: max }));
    }
  };
  const handleToggle = () => {
    setSettings((prev) => ({ ...prev, endless: !prev.endless }));
  };

  const settingsKeys = Object.keys(settings).filter((k) => {
    return typeof settings[k as NumberKeys<Settings>] === "number";
  });

  return (
    <CSSTransition
      in={show}
      timeout={{
        enter: 200,
        exit: 200,
      }}
      classNames={settingsMenuTransition}
    >
      <div className="absolute bg-[#11111D] text-white select-none h-[505px] w-full z-20 flex flex-col items-center gap-3 pt-1 overflow-y-auto overflow-x-hidden pb-10 scrollbar scrollbar-thumb-[#171727] -translate-y-full dark:bg-[#0f1a12] dark:scrollbar-thumb-[#17291c]">
        <h1 className="text-2xl font-inter font-semibold">SETTINGS</h1>
        {settingsKeys.map((value) => {
          const capitalizedName = value
            .split(/(?=[A-Z])/)
            .map((word) => word[0].toUpperCase() + word.slice(1))
            .join(" ");
          const field = value as NumberKeys<Settings>;
          return (
            <Spinner
              key={value}
              value={settings[field]}
              label={capitalizedName}
              onDecrement={() => handleDecrement(1, field)}
              onIncrement={() => handleIncrement(MAX_TIME, field)}
              onChange={(val: number) => handleChange(1, MAX_TIME, field, val)}
            />
          );
        })}

        <SwitchButton
          onToggle={handleToggle}
          value={settings.endless}
          label="Endless Mode"
        />
      </div>
    </CSSTransition>
  );
};

export default SettingsMenu;
