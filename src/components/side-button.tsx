import { Icon } from "@iconify/react";
import { cx } from "class-variance-authority";
import { button } from "../styles/button";

type SideButtonType = "reset" | "stop";

type SideButtonProps = {
  type: SideButtonType;
  onClick: () => void;
};

const iconMap: { [key in SideButtonType]: string } = {
  reset: "codicon:debug-restart",
  stop: "ph:stop-fill",
};

const SideButton = ({ type, onClick }: SideButtonProps) => {
  return (
    <button
      className={cx(
        button({ intent: "sideControl" }),
        "dark:bg-[#152516] dark:hover:bg-[#1a2e1b] bg-[#181828] hover:bg-[#1e1e31]"
      )}
      onClick={onClick}
    >
      <Icon icon={iconMap[type]} className="text-[25px]"></Icon>
    </button>
  );
};

export default SideButton;
