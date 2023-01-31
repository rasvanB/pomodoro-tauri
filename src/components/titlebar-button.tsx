import { Icon } from "@iconify/react";

type ButtonProps = {
  icon: string;
  onClick: () => void;
};

const TitleBarButton = ({ icon, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="h-full flex bg-white bg-opacity-0 hover:bg-opacity-5 justify-center px-2 items-center focus:outline-none focus:bg-opacity-10"
    >
      <Icon icon={icon} className="text-xl text-white" />
    </button>
  );
};

export default TitleBarButton;
