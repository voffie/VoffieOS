import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: import.meta.env.VITE_GITHUB_AUTH_TOKEN,
});

export const fetchRepos = async () => {
  const res = await octokit.request("GET /users/{username}/repos", {
    username: "VoffieDev",
  });
  return res;
};
