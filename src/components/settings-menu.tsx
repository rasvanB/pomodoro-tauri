import { CSSTransition } from "react-transition-group";
import { settingsMenuTransition } from "../styles/settings-menu";
import { settingsAtom } from "../utils/store";
import { useAtom } from "jotai";

import Spinner from "./spinner";
import { MAX_ROUNDS, MAX_TIME, NumberKeys, Settings } from "../types/settings";
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
    if (inputValue < min) {
      setSettings((prev) => ({ ...prev, [value]: min }));
    }
    if (inputValue > max) {
      setSettings((prev) => ({ ...prev, [value]: max }));
    }
  };
  const handleToggle = () => {
    setSettings((prev) => ({ ...prev, endless: !prev.endless }));
  };
  return (
    <CSSTransition
      in={show}
      timeout={{
        enter: 200,
        exit: 200,
      }}
      classNames={settingsMenuTransition}
      appear
    >
      <div className="absolute bg-[#11111D] text-white select-none h-[505px] w-full z-10 flex flex-col items-center gap-3 pt-5">
        <Spinner
          value={settings.focusTime}
          label="Focus Time"
          onDecrement={() => handleDecrement(1, "focusTime")}
          onIncrement={() => handleIncrement(MAX_TIME, "focusTime")}
          onChange={(value: number) =>
            handleChange(1, MAX_TIME, "focusTime", value)
          }
        />
        <Spinner
          value={settings.shortBreakTime}
          label="Short Break Time"
          onDecrement={() => handleDecrement(1, "shortBreakTime")}
          onIncrement={() => handleIncrement(MAX_TIME, "shortBreakTime")}
          onChange={(value: number) =>
            handleChange(1, MAX_TIME, "shortBreakTime", value)
          }
        />
        <Spinner
          value={settings.longBreakTime}
          label="Long Break Time"
          onDecrement={() => handleDecrement(1, "longBreakTime")}
          onIncrement={() => handleIncrement(MAX_TIME, "longBreakTime")}
          onChange={(value: number) =>
            handleChange(1, MAX_TIME, "longBreakTime", value)
          }
        />
        <Spinner
          value={settings.rounds}
          label="Number of Rounds"
          onDecrement={() => handleDecrement(1, "rounds")}
          onIncrement={() => handleIncrement(MAX_ROUNDS, "rounds")}
          onChange={(value: number) =>
            handleChange(1, MAX_ROUNDS, "rounds", value)
          }
        />
        <SwitchButton
          onToggle={handleToggle}
          isOn={settings.endless}
          label="Endless Mode"
        />
      </div>
    </CSSTransition>
  );
};

export default SettingsMenu;