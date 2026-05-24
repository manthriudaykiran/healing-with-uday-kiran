export const ROUTES = {
  home: "/",
  about: "/about",
  services: "/services",
  courses: "/courses",
  testimonials: "/testimonials",
  blog: "/blog",
  contact: "/contact",
  login: "/login",
  dashboard: "/dashboard",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export type RouteKey = keyof typeof ROUTES;
