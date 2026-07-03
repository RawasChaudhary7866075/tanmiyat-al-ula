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

  // The PNG is 1536×1024 with transparency outside the circular emblem.
  // The emblem occupies roughly the centre 380×380px of the full canvas.
  // Rendering at 766×511 (scale ≈ 0.5) maps those 380px → ~190px, filling
  // the 192×192 icon. overflow:hidden clips the transparent outer margins.
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
        }}
      >
        <img src={logoSrc} width={766} height={511} style={{ marginTop: 64 }} />
      </div>
    ),
    { width: 192, height: 192 }
  );
}
