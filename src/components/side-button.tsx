import { Icon } from "@iconify/react";
import { cx } from "class-variance-authority";
import { button } from "../styles/button";
import { breakAtom } from "../utils/store";
import { useAtom } from "jotai";

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
  const [isBreak] = useAtom(breakAtom);
  return (
    <button
      className={cx(
        button({ intent: "sideControl" }),
        isBreak
          ? "bg-[#152516] hover:bg-[#1a2e1b]"
          : "bg-[#181828] hover:bg-[#1e1e31]"
      )}
      onClick={onClick}
    >
      <Icon icon={getIcon(type)} className="text-[25px]"></Icon>
    </button>
  );
};

export default SideButton;
