import { readFileSync } from "node:fs";
import { join } from "node:path";

import { ImageResponse } from "next/og";

const logoBuffer = readFileSync(join(process.cwd(), "public", "images", "logo-yuiryou.png"));
const logoDataUrl = `data:image/png;base64,${logoBuffer.toString("base64")}`;

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
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          padding: "22px",
        }}
      >
        <img
          src={logoDataUrl}
          alt="YUIRYOU logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    ),
    size,
  );
}