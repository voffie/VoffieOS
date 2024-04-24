import { useState } from "react";
import { AboutModal } from "../Modals/AboutModal";
import { ProjectModal } from "../Modals/ProjectModal";
import { Taskbar } from "../Taskbar";
import { FileGrid } from "../Files/FileGrid";

const files = [
  {
    name: "CV - SWE",
    icon: "files/icon/pdf_icon.svg",
    tooltip: "Location: ~/server/files/viktorSoderborgCV.pdf",
    click: () => {
      window.open(
        "https://docs.google.com/document/d/1E6_XJgVuzHoJGKFhJhXDsdU7Jvs-pW5I0pBwbFQSodo/edit#heading=h.inx73jfg7qti",
      );
    },
  },
  {
    name: "CV - ENG",
    icon: "files/icon/pdf_icon.svg",
    tooltip: "Location: ~/server/files/viktorSoderborgCV_ENG.pdf",
    click: () => {
      window.open(
        "https://docs.google.com/document/d/12IgiklLd9nvC9XSBcVG79B4pV1LScGFGIfj4OKgdWgQ/edit#heading=h.inx73jfg7qti",
      );
    },
  },
];

export const Desktop = () => {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  return (
    <>
      <FileGrid files={files} />
      <Taskbar
        setIsAboutModalOpen={setIsAboutModalOpen}
        setIsProjectModalOpen={setIsProjectModalOpen}
        isAboutModalOpen={isAboutModalOpen}
        isProjectModalOpen={isProjectModalOpen}
      />
      <AboutModal
        isOpen={isAboutModalOpen}
        handleClose={() => setIsAboutModalOpen(false)}
      />
      <ProjectModal
        isOpen={isProjectModalOpen}
        handleClose={() => setIsProjectModalOpen(false)}
      />
    </>
  );
};
