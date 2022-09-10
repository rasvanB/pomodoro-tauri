import { Icon } from "@iconify/react";

type ButtonProps = {
  icon: string;
  onClick: () => void;
};

const TitleBarButton = ({ icon, onClick }: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      className="h-full flex hover:bg-[#1e1e30] justify-center px-2 items-center"
    >
      <Icon icon={icon} className="text-xl text-white" />
    </div>
  );
};

export default TitleBarButton;
