import { useState } from "react";
import { FileGrid } from "@/components/Files/FileGrid";
import { Taskbar } from "@/components/Taskbar";
import { About } from "@/components/Apps/About";
import { Project } from "@/components/Apps/Project";

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

const Desktop = () => {
  const [isAboutAppOpen, setIsAboutAppOpen] = useState(false);
  const [isProjectAppOpen, setIsProjectAppOpen] = useState(false);
  return (
    <>
      <FileGrid files={files} />
      <Taskbar
        setIsAboutAppOpen={setIsAboutAppOpen}
        setIsProjectAppOpen={setIsProjectAppOpen}
        isAboutAppOpen={isAboutAppOpen}
        isProjectAppOpen={isProjectAppOpen}
      />
      <About
        isOpen={isAboutAppOpen}
        handleClose={() => setIsAboutAppOpen(false)}
      />
      <Project
        isOpen={isProjectAppOpen}
        handleClose={() => setIsProjectAppOpen(false)}
      />
    </>
  );
};

export default Desktop;
