import type { NavItem } from "@/types";
import { ROUTES } from "@/constants/routes";

export const PRIMARY_NAV: NavItem[] = [
  { label: "About", href: ROUTES.about },
  { label: "Services", href: ROUTES.services },
  { label: "Courses", href: ROUTES.courses },
  { label: "Testimonials", href: ROUTES.testimonials },
  { label: "Blog", href: ROUTES.blog },
  { label: "Contact", href: ROUTES.contact },
];
