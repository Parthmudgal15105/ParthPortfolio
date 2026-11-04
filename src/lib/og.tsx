import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

async function dataUri(publicPath: string) {
  const buf = await readFile(join(process.cwd(), "public", publicPath));
  const type = publicPath.endsWith(".svg") ? "image/svg+xml" : publicPath.endsWith(".jpg") ? "image/jpeg" : "image/png";
  return `data:${type};base64,${buf.toString("base64")}`;
}

export async function ogImage(opts: { title: string; subtitle: string; eyebrow: string; accent: string; icon?: string }) {
  const icon = opts.icon ? await dataUri(opts.icon) : null;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#f5f3ee",
          backgroundImage: `radial-gradient(circle at 85% 20%, ${opts.accent}55, transparent 55%)`,
          color: "#17160f",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {icon ? <img src={icon} width={120} height={120} style={{ borderRadius: 28 }} alt="" /> : null}
          <div style={{ display: "flex", fontSize: 30, color: "#6a665c", letterSpacing: 2, textTransform: "uppercase" }}>{opts.eyebrow}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 1000 }}>{opts.title}</div>
          <div style={{ display: "flex", fontSize: 34, color: "#3b3932", maxWidth: 980, lineHeight: 1.3 }}>{opts.subtitle}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#6a665c" }}>
          <span>parthmudgal.com</span>
          <span style={{ display: "flex", width: 120, height: 10, borderRadius: 5, background: opts.accent }} />
        </div>
      </div>
    ),
    ogSize,
  );
}
