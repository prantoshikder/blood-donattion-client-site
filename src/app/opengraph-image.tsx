import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #fff1f2 0%, #ffe4e6 45%, #ffffff 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 96,
              height: 96,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #f43f5e, #e11d48)",
              borderRadius: 24,
              color: "white",
              fontSize: 64,
              fontWeight: 800,
            }}
          >
            R
          </div>
          <div style={{ fontSize: 44, fontWeight: 700, color: "#e11d48" }}>
            {siteConfig.name}
          </div>
        </div>

        <div
          style={{
            marginTop: 48,
            fontSize: 68,
            fontWeight: 800,
            color: "#0f172a",
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Save lives with a drop of blood
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 32,
            color: "#475569",
            maxWidth: 920,
          }}
        >
          Connecting donors, receivers, hospitals and blood banks — in minutes.
        </div>
      </div>
    ),
    size,
  );
}
