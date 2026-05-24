/**
 * TagMango integration module.
 * Owns the external auth redirect URL. Swap this module to migrate to internal auth.
 */
export const TAGMANGO_URL =
  process.env.NEXT_PUBLIC_TAGMANGO_URL ??
  "https://academy.udaykiranmanthri.com/web/dashboard/getstarted";

export const TAGMANGO_LOGIN_URL =
  process.env.NEXT_PUBLIC_TAGMANGO_LOGIN_URL ??
  "https://academy.udaykiranmanthri.com/web/checkout/68086943146bd5bc5e55ccb1";

export const TAGMANGO_LABELS = {
  login: "Login",
  enroll: "Enroll Now",
  dashboard: "Go to Dashboard",
  access: "Access Member Area",
} as const;
