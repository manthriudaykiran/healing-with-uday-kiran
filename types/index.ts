export type Course = {
  slug: string;
  title: string;
  summary: string;
  duration: string;
  price: string;
  highlights: string[];
  externalUrl: string;
  featured?: boolean;
};

export type Testimonial = {
  id: string;
  author: string;
  role?: string;
  body: string;
  rating?: number;
};

export type NavItem = { label: string; href: string; external?: boolean };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
};
