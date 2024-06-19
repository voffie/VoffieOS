import { useState } from "react";
import { FileGrid } from "@/components/Files/FileGrid";
import { Taskbar } from "@/components/Taskbar";
import { About } from "@/components/Apps/About";
import { Project } from "@/components/Apps/Project";
import { WelcomeNote } from "@/components/Apps/Welcome";

const files = [
  {
    name: "CV - Swedish",
    icon: "files/icon/pdf_icon.svg",
    tooltip: "Location: ~/server/files/viktorSoderborgCV.pdf",
    click: () => {
      window.open(
        "https://docs.google.com/document/d/1EgvIkK6Drqsr8y9noqiUbsjHSeJ6_YJTl-jpnP4j5zQ",
      );
    },
  },
  {
    name: "CV - English",
    icon: "files/icon/pdf_icon.svg",
    tooltip: "Location: ~/server/files/viktorSoderborgCV_ENG.pdf",
    click: () => {
      window.open(
        "https://docs.google.com/document/d/1iNdrInzH6AIJvwHQoJ6M8hlGrtPQAa__Xk4unLmcp-E",
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
      <WelcomeNote />
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
