import { SlDocs, SlUser } from "react-icons/sl";

type TaskbarProps = {
  isAboutModalOpen: boolean;
  setIsAboutModalOpen: (value: boolean) => void;
  isProjectModalOpen: boolean;
  setIsProjectModalOpen: (value: boolean) => void;
};

export const Taskbar = ({
  isAboutModalOpen,
  setIsAboutModalOpen,
  isProjectModalOpen,
  setIsProjectModalOpen,
}: TaskbarProps) => {
  const items = [
    {
      name: "About me",
      icon: <SlUser />,
      click: setIsAboutModalOpen,
      isOpen: isAboutModalOpen,
    },
    {
      name: "Projects",
      icon: <SlDocs />,
      click: setIsProjectModalOpen,
      isOpen: isProjectModalOpen,
    },
    {
      name: "LinkedIn",
      img: "images/linkedin_logo.png",
      click: () =>
        window.open("https://linkedin.com/in/viktor-söderborg-3217a123b"),
    },
    {
      name: "GitHub",
      img: "files/icon/github_icon.svg",
      click: () => window.open("https://github.com/voffiedev"),
    },
  ];
  return (
    <nav className="absolute bottom-0 h-10 bar-bg left-0 right-0 flex justify-center items-center">
      <div className="w-fit flex items-center justify-center gap-5">
        {items.map((item, index) =>
          item.img ? (
            <div
              key={index}
              className="cursor-pointer hover-text"
              onClick={() => item.click()}
            >
              <img
                className="rounded-md w-6 h-6"
                src={item.img}
              />
              <span className="tooltip-text">{item.name}</span>
            </div>
          ) : (
            <p
              key={index}
              className="cursor-pointer hover-text"
              onClick={() => item.click(!item.isOpen)}
            >
              {item.icon && item.icon}
              <span className="tooltip-text">{item.name}</span>
            </p>
          )
        )}
      </div>
    </nav>
  );
};
