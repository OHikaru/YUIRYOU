import { siteConfig } from "@/content/site";

export const runtime = "nodejs";

export async function GET() {
  const manifest = {
    name: siteConfig.brandName,
    short_name: "YUIRYOU",
    description: siteConfig.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/android-icon-192",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-icon-512",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };

  return new Response(JSON.stringify(manifest), {
    headers: {
      "Content-Type": "application/manifest+json; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}