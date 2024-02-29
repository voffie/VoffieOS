import { useEffect, useState } from "react";
import { fetchRepos } from "../../lib/github";
import { FileExplorerModal } from "./FileExplorerModal";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

export type Repo = {
  name: string;
  icon: string;
  tooltip: string;
  click: () => void;
};

const loadRepos = async () => {
  const res = await fetchRepos();
  const output: Repo[] = [];
  res.data
    .filter((repo) => repo.name !== "VoffieDev")
    .map((repo) =>
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

export const ProjectModal = ({ isOpen, handleClose }: Props) => {
  const [projects, setProjects] = useState<Repo[]>();

  useEffect(() => {
    loadRepos().then((res) => setProjects(res));
  }, []);
  return (
    projects && (
      <FileExplorerModal
        title="Projects"
        isOpen={isOpen}
        handleClose={handleClose}
        projects={projects}
      />
    )
  );
};
