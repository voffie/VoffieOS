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
      alt: "LinkedIn logo",
    },
    {
      name: "GitHub",
      img: "files/icon/github_icon.svg",
      click: () => window.open("https://github.com/voffiedev"),
      alt: "GitHub logo",
    },
  ];
  return (
    <nav className="bar-bg absolute bottom-0 left-0 right-0 flex h-10 items-center justify-center">
      <div className="flex w-fit items-center justify-center gap-5">
        {items.map((item, index) =>
          item.img ? (
            <div
              key={index}
              className="hover-text cursor-pointer"
              onClick={() => item.click()}
            >
              <img
                className="h-6 w-6 rounded-md"
                src={item.img}
                alt={item.alt}
                loading="lazy"
              />
              <span className="tooltip-text">{item.name}</span>
            </div>
          ) : (
            <p
              key={index}
              className="hover-text cursor-pointer text-white"
              onClick={() => item.click(!item.isOpen)}
            >
              {item.icon && item.icon}
              <span className="tooltip-text">{item.name}</span>
            </p>
          ),
        )}
      </div>
    </nav>
  );
};
