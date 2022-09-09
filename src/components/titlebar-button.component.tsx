import { Icon } from "@iconify/react";

type ButtonProps = {
  icon: string;
  onclick: () => void;
};

const TitleBarButton = ({ icon, onclick }: ButtonProps) => {
  return (
    <div
      onClick={onclick}
      className="h-full flex hover:bg-[#26263e] justify-center px-2 items-center"
    >
      <Icon icon={icon} className="text-xl text-white" />
    </div>
  );
};

export default TitleBarButton;
