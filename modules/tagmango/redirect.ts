/**
 * TagMango integration module.
 * Owns the external auth redirect URL. Swap this module to migrate to internal auth.
 */
export const TAGMANGO_URL =
  process.env.NEXT_PUBLIC_TAGMANGO_URL ??
  "https://academy.udaykiranmanthri.com/web/dashboard/getstarted";

export const TAGMANGO_LABELS = {
  login: "Login",
  enroll: "Enroll Now",
  dashboard: "Go to Dashboard",
  access: "Access Member Area",
} as const;
