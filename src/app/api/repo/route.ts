import { NextResponse } from "next/server";
import { Octokit } from "octokit";

export async function GET() {
  const octokit = new Octokit({ auth: process.env.GITHUB_AUTH_TOKEN });

  const repos = await octokit.request("GET /users/{username}/repos", {
    username: "VoffieDev",
  });

  return NextResponse.json({ repos: repos.data }, { status: 200 });
}
