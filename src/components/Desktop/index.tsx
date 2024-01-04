import { ReactNode, useState } from "react";
import { AboutModal } from "../Modals/AboutModal";
import { ProjectModal } from "../Modals/ProjectModal";
import { Taskbar } from "../Taskbar";
import { FileGrid } from "../Files/FileGrid";

type Props = {
  children: ReactNode;
};

const files = [
  {
    name: "CV - SWE",
    icon: "files/icon/pdf_icon.svg",
    tooltip: "Location: public/files/viktorSoderborgCV.pdf",
    click: () => {
      window.open("/files/viktorSoderborgCV.pdf");
    },
  },
  {
    name: "CV - ENG",
    icon: "files/icon/pdf_icon.svg",
    tooltip: "Location: public/files/viktorSoderborgCV_ENG.pdf",
    click: () => {
      window.open("/files/viktorSoderborgCV_ENG.pdf");
    },
  },
];

export const Desktop = ({ children }: Props) => {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  return (
    <main className="bg-[url('wallpaper.jpg')] bg-no-repeat bg-cover h-screen fixed inset-0 overscroll-none">
      <FileGrid files={files} />
      {children}
      <Taskbar
        setIsAboutModalOpen={setIsAboutModalOpen}
        setIsProjectModalOpen={setIsProjectModalOpen}
      />
      <AboutModal
        isOpen={isAboutModalOpen}
        handleClose={() => setIsAboutModalOpen(false)}
      />
      <ProjectModal
        isOpen={isProjectModalOpen}
        handleClose={() => setIsProjectModalOpen(false)}
      />
    </main>
  );
};
