import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const alt = "Jude Francis · Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = fs.readFileSync(
    path.join(process.cwd(), "public/images/logo-icon.svg"),
  );
  const logoSrc = `data:image/svg+xml;base64,${logo.toString("base64")}`;

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
          padding: 80,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={88} height={88} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: "#fafafa",
              letterSpacing: -2,
            }}
          >
            Jude Francis
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#a1a1aa",
              marginTop: 16,
              maxWidth: 820,
              lineHeight: 1.3,
            }}
          >
            Software Engineer building AI agents, SaaS platforms, and full-stack
            web apps.
          </div>
        </div>
        <div style={{ fontSize: 28, color: "#6b7280" }}>judecod.es</div>
      </div>
    ),
    { ...size },
  );
}
