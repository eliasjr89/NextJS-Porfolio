import { Domain, Project, VercelApiProject } from "@/types/types";
import { NextResponse } from "next/server";
import { RateLimiter } from "@/lib/rate-limit";

// Enable ISR with 1 hour revalidation
export const revalidate = 3600;

// Rate limiter: 10 requests per 10 seconds
const limiter = new RateLimiter({
  interval: 10 * 1000, // 10 seconds
  uniqueTokenPerInterval: 10, // 10 requests
});

export async function GET(request: Request) {
  // Rate limiting
  const ip = request.headers.get('x-forwarded-for') ?? 'anonymous';
  const rateLimitResult = await limiter.check(ip);

  if (!rateLimitResult.success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: {
          'X-RateLimit-Limit': rateLimitResult.limit.toString(),
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          'X-RateLimit-Reset': new Date(rateLimitResult.reset).toISOString(),
        },
      }
    );
  }

  const vercelToken = process.env.VERCEL_TOKEN;

  if (!vercelToken) {
    console.error("VERCEL_TOKEN is not defined");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch("https://api.vercel.com/v10/projects", {
      headers: { Authorization: `Bearer ${vercelToken}` },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      throw new Error(`Vercel API responded with status: ${res.status}`);
    }

    const data = (await res.json()) as { projects: VercelApiProject[] };

    const projects: Project[] = await Promise.all(
      data.projects.map(async (p) => {
        let url = `https://${p.name}.vercel.app`;

        try {
          const domainRes = await fetch(
            `https://api.vercel.com/v9/projects/${p.id}/domains`,
            { 
              headers: { Authorization: `Bearer ${vercelToken}` },
              next: { revalidate: 3600 },
            }
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

    return NextResponse.json(projects, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    });
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to fetch projects", details: errorMessage },
      { status: 500 }
    );
  }
}
