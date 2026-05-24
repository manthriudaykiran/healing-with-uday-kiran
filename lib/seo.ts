import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function buildMetadata(input: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const title = input.title ? `${input.title} — ${siteConfig.name}` : siteConfig.name;
  const description = input.description ?? siteConfig.description;
  const url = `${siteConfig.url}${input.path ?? ""}`;
  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    openGraph: { title, description, url, siteName: siteConfig.name, type: "website" },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: url },
  };
}
