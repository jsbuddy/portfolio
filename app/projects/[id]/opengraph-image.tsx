import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";
import projects from "@/lib/projects";

export const alt = "Project preview from judecod.es";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return new Response("Not found", { status: 404 });

  const logo = fs.readFileSync(
    path.join(process.cwd(), "public/images/logo-icon.svg"),
  );
  const logoSrc = `data:image/svg+xml;base64,${logo.toString("base64")}`;
  const screenshot = fs.readFileSync(
    path.join(process.cwd(), "public", project.image),
  );
  const screenshotSrc = `data:image/png;base64,${screenshot.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0a0a",
          padding: 72,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={72} height={72} alt="" />
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 520 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#fafafa",
              letterSpacing: -2,
            }}
          >
            {project.title}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#a1a1aa",
              marginTop: 16,
              lineHeight: 1.35,
            }}
          >
            {project.description}
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#6b7280" }}>
          {`judecod.es/projects/${project.id}`}
        </div>
        <div
          style={{
            position: "absolute",
            top: 96,
            left: 640,
            width: 700,
            height: 437,
            display: "flex",
            borderRadius: 16,
            border: "1px solid #27272a",
            overflow: "hidden",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={screenshotSrc}
            width={700}
            height={437}
            alt=""
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
