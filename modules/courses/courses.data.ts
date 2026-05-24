import type { Course } from "@/types";
import { TAGMANGO_URL } from "@/modules/tagmango/redirect";

export const COURSES: Course[] = [
  {
    slug: "inner-mastery",
    title: "Inner Mastery Program",
    summary:
      "A 90-day deep transformation system to rewire emotional patterns and operate from clarity under pressure.",
    duration: "12 weeks",
    price: "₹24,999",
    highlights: ["Weekly live sessions", "Private community", "Lifetime access"],
    externalUrl: TAGMANGO_URL,
    featured: true,
  },
  {
    slug: "emotional-fluency",
    title: "Emotional Fluency for Leaders",
    summary:
      "A focused intensive for founders and managers — translate emotional signals into decisive action.",
    duration: "6 weeks",
    price: "₹14,999",
    highlights: ["Leadership case studies", "1:1 review call", "Frameworks library"],
    externalUrl: TAGMANGO_URL,
  },
  {
    slug: "calm-foundations",
    title: "Calm Foundations",
    summary:
      "Daily practice library for nervous system regulation, breathwork, and recovery from chronic overwhelm.",
    duration: "Self-paced",
    price: "₹4,999",
    highlights: ["60+ guided practices", "Mobile-friendly", "Lifetime access"],
    externalUrl: TAGMANGO_URL,
  },
];
