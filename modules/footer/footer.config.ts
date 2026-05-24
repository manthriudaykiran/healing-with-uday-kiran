import { ROUTES } from "@/constants/routes";

export const FOOTER_COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "About", href: ROUTES.about },
      { label: "Services", href: ROUTES.services },
      { label: "Courses", href: ROUTES.courses },
      { label: "Blog", href: ROUTES.blog },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact", href: ROUTES.contact },
      { label: "Testimonials", href: ROUTES.testimonials },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: ROUTES.privacy },
      { label: "Terms & Conditions", href: ROUTES.terms },
    ],
  },
];
