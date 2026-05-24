export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Healing with Uday Kiran",
  shortName: "Uday Kiran",
  description:
    "Premium healing, transformation, and emotional mastery programs led by Uday Kiran. Calm under pressure. Clarity in chaos.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://healingwithudaykiran.com",
  tagmango:
    process.env.NEXT_PUBLIC_TAGMANGO_URL ??
    "https://academy.udaykiranmanthri.com/web/dashboard/getstarted",
  socials: {
    instagram: "https://instagram.com/udaykiranmanthri",
    youtube: "https://youtube.com/@udaykiranmanthri",
    linkedin: "https://linkedin.com/in/udaykiranmanthri",
  },
  contact: {
    email: "support@healingwithudaykiran.com",
    phone: "+91-00000-00000",
  },
} as const;

export type SiteConfig = typeof siteConfig;
