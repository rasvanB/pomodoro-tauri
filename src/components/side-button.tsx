import { Icon } from "@iconify/react";
import { cx } from "class-variance-authority";
import { button } from "../styles/button";

type SideButtonType = "reset" | "stop";
type SideButtonProps = {
  type: SideButtonType;
  onClick: () => void;
};

const getIcon = (type: SideButtonType): string => {
  switch (type) {
    case "reset":
      return "codicon:debug-restart";
    case "stop":
      return "ph:stop-fill";
  }
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
      <Icon icon={getIcon(type)} className="text-[25px]"></Icon>
    </button>
  );
};

export default SideButton;
