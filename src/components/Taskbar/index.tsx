import { SlDocs, SlUser } from "react-icons/sl";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type TaskbarProps = {
  isAboutAppOpen: boolean;
  setIsAboutAppOpen: (value: boolean) => void;
  isProjectAppOpen: boolean;
  setIsProjectAppOpen: (value: boolean) => void;
};

export const Taskbar = ({
  isAboutAppOpen,
  setIsAboutAppOpen,
  isProjectAppOpen,
  setIsProjectAppOpen,
}: TaskbarProps) => {
  const currentDate = new Date();
  const items = [
    {
      name: "About me",
      icon: <SlUser />,
      click: setIsAboutAppOpen,
      isOpen: isAboutAppOpen,
    },
    {
      name: "Projects",
      icon: <SlDocs />,
      click: setIsProjectAppOpen,
      isOpen: isProjectAppOpen,
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="size-5" />,
      click: () =>
        window.open("https://linkedin.com/in/viktor-söderborg-3217a123b"),
      alt: "LinkedIn logo",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="size-5" />,
      click: () => window.open("https://github.com/voffiedev"),
      alt: "GitHub logo",
    },
  ];
  return (
    <nav className="bar-bg absolute bottom-0 left-0 right-0 flex h-10 items-center justify-between text-white">
      <div className="ml-4" />
      <div className="flex w-fit items-center justify-center gap-5">
        {items.map((item, index) => (
          <p
            key={index}
            className="tooltip cursor-pointer"
            onClick={() => item.click(!item.isOpen)}
            title={item.name}
          >
            {item.icon && item.icon}
          </p>
        ))}
      </div>
      <div className="mr-4">
        <p>{`${("0" + currentDate.getDate()).slice(-2)}-${("0" + (currentDate.getMonth() + 1)).slice(-2)}-${currentDate.getFullYear()}`}</p>
      </div>
    </nav>
  );
};
