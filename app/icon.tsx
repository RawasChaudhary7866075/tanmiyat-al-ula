import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import path from "path";

export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default function Icon() {
  const logoPath = path.join(
    process.cwd(),
    "public",
    "images",
    "branding",
    "tanmiyat-logo.png"
  );
  const logoBuffer = readFileSync(logoPath);
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  // Logo is 1536 × 1024 landscape. The logo mark sits in the center.
  // Render at 288 × 192 (3:2, same ratio) inside a 192 × 192 container with
  // overflow:hidden — this crops the left/right margins and squares the icon.
  return new ImageResponse(
    (
      <div
        style={{
          width: 192,
          height: 192,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <img src={logoSrc} width={288} height={192} />
      </div>
    ),
    { width: 192, height: 192 }
  );
}
