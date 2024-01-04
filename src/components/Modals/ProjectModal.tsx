import { FileExplorerModal } from "./FileExplorerModal";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

const projects = [
  {
    name: "Codele - Demo",
    icon: "files/icon/html_icon.svg",
    tooltip: "A daily programming language guessing game",
    click: () => {
      window.open("https://codele-voffiedev.vercel.app/");
    },
  },
  {
    name: "Codele - Github",
    icon: "files/icon/github_icon.svg",
    click: () => {
      window.open("https://github.com/VoffieDev/Codele");
    },
  },
  {
    name: "Teapot - Github",
    icon: "files/icon/github_icon.svg",
    tooltip: "A webserver in Ruby",
    click: () => {
      window.open("https://github.com/VoffieDev/Teapot");
    },
  },
];

export const ProjectModal = ({ isOpen, handleClose }: Props) => {
  return (
    <FileExplorerModal
      title="Projects"
      isOpen={isOpen}
      handleClose={handleClose}
      projects={projects}
    />
  );
};
