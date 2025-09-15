import { Domain, Project, VercelApiProject } from "@/types/types";
import { NextResponse } from "next/server";

export async function GET() {
  const vercelToken = process.env.VERCEL_TOKEN!;

  try {
    const res = await fetch("https://api.vercel.com/v10/projects", {
      headers: { Authorization: `Bearer ${vercelToken}` },
    });

    if (!res.ok) throw new Error("Failed to fetch projects");

    const data = (await res.json()) as { projects: VercelApiProject[] };

    const projects: Project[] = await Promise.all(
      data.projects.map(async (p) => {
        let url = `https://${p.name}.vercel.app`;

        try {
          const domainRes = await fetch(
            `https://api.vercel.com/v9/projects/${p.id}/domains`,
            { headers: { Authorization: `Bearer ${vercelToken}` } }
          );

          if (domainRes.ok) {
            const { domains } = (await domainRes.json()) as {
              domains: Domain[];
            };
            if (domains.length > 0) url = `https://${domains[0].name}`;
          }
        } catch (err) {
          console.warn(`Failed to fetch domains for project ${p.name}:`, err);
        }

        const screenshot = `/projects/${p.name}.png`;

        return { id: p.id, name: p.name, url, screenshot };
      })
    );

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
