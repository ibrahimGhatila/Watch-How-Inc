import { ImageResponse } from "next/og";
import { logoMarkDataUri } from "@/lib/seo";

export const alt =
  "Watch How Inc. — Full-Service GTM Agency. One unified GTM engine.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const accents = ["#1D6B44", "#F07832", "#0097A7", "#F5C518", "#6B46E0", "#D4006A"];

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FFFFFF",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoMarkDataUri} width={72} height={72} alt="" />
          <div style={{ fontSize: 32, fontWeight: 700, color: "#0F1A12" }}>
            Watch How Inc.
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              color: "#0F1A12",
              lineHeight: 1.02,
              letterSpacing: "-3px",
            }}
          >
            Watch how we 10x
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              color: "#1D6B44",
              lineHeight: 1.02,
              letterSpacing: "-3px",
            }}
          >
            your revenue.
          </div>
          <div style={{ fontSize: 32, color: "#6B7280", marginTop: 28 }}>
            Content · Paid Ads · Outbound · Web Management — one GTM engine.
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {accents.map((color) => (
            <div
              key={color}
              style={{
                width: 56,
                height: 12,
                background: color,
                borderRadius: 6,
              }}
            />
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
