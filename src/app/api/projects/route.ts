import { NextResponse } from "next/server";

interface VercelApiProject {
  id: string;
  name: string;
  alias?: { url: string }[];
}

interface Project {
  id: string;
  name: string;
  url: string;
}

export async function GET() {
  const token = process.env.VERCEL_TOKEN;

  const res = await fetch("https://api.vercel.com/v10/projects", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }

  const data = (await res.json()) as { projects: VercelApiProject[] };
  console.log(data);

  const projects: Project[] = data.projects.map((p) => ({
    id: p.id,
    name: p.name,
    url: p.alias?.[0]?.url || `https://${p.name}.vercel.app`,
  }));

  return NextResponse.json(projects);
}
