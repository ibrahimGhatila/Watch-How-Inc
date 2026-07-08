import { ImageResponse } from "next/og";
import { logoMarkDataUri } from "@/lib/seo";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFFFFF",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoMarkDataUri} width={150} height={150} alt="Watch How Inc." />
      </div>
    ),
    { ...size }
  );
}
