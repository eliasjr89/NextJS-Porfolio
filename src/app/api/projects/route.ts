import { Deployment, Domain, Project, VercelApiProject } from "@/types/types";
import { NextResponse } from "next/server";

export async function GET() {
  const vercelToken = process.env.VERCEL_TOKEN!;
  const teamSlug = "eliasjr1989s-projects";

  try {
    const res = await fetch("https://api.vercel.com/v10/projects", {
      headers: { Authorization: `Bearer ${vercelToken}` },
    });

    if (!res.ok) throw new Error("Failed to fetch projects");

    const data = (await res.json()) as { projects: VercelApiProject[] };

    const projects: Project[] = await Promise.all(
      data.projects.map(async (p) => {
        let url = `https://${p.name}.vercel.app`;

        const domainRes = await fetch(
          `https://api.vercel.com/v9/projects/${p.id}/domains`,
          { headers: { Authorization: `Bearer ${vercelToken}` } }
        );

        if (domainRes.ok) {
          const { domains } = (await domainRes.json()) as { domains: Domain[] };
          if (domains.length > 0) url = `https://${domains[0].name}`;
        }

        const depRes = await fetch(
          `https://api.vercel.com/v13/deployments?projectId=${p.id}&state=READY&target=production&limit=1`,
          { headers: { Authorization: `Bearer ${vercelToken}` } }
        );

        let screenshot = "";
        if (depRes.ok) {
          const { deployments } = (await depRes.json()) as {
            deployments: Deployment[];
          };
          if (deployments.length > 0) {
            const deploymentId = deployments[0].uid;
            screenshot = `https://vercel.com/api/screenshot?dark=0&deploymentId=${deploymentId}&teamId=${teamSlug}&withStatus=1`;
          }
        }

        return { id: p.id, name: p.name, url, screenshot };
      })
    );

    return NextResponse.json(projects);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
