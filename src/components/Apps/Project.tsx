import { useEffect, useState } from "react";
import type { Repo } from "@/types/Repo";
import { FileExplorer } from "@/components/Programs/FileExplorer";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

const loadRepos = async () => {
  const res = await fetch("/api/repo");
  const json = await res.json();
  const output: Repo[] = [];
  json.repos
    .filter((repo: typeof json.repos) => repo.name !== "voffie")
    .map((repo: typeof json.repos) =>
      output.push({
        name: repo.name,
        icon: "files/icon/github_icon.svg",
        tooltip: `Location: ~/server/projects/${repo.name}`,
        click: () => {
          window.open(repo.html_url);
        },
      }),
    );
  return output;
};

export const Project = ({ isOpen, handleClose }: Props) => {
  const [projects, setProjects] = useState<Repo[]>();

  useEffect(() => {
    loadRepos().then((res) => setProjects(res));
  }, []);

  return (
    projects && (
      <FileExplorer
        title="Projects"
        isOpen={isOpen}
        handleClose={handleClose}
        projects={projects}
      />
    )
  );
};
