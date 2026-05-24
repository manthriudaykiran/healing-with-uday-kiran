import { siteConfig } from "@/config/site";

export function getAuthRedirectUrl(): string {
  return siteConfig.tagmango;
}

export function redirectToAuth(): void {
  if (typeof window !== "undefined") {
    window.location.href = getAuthRedirectUrl();
  }
}
