export type NavItem = {
  label: string;
  href: string;
};

export type MenuFavorite = {
  name: string;
  note: string;
  tag: string;
};

export type CustomerReview = {
  name: string;
  quote: string;
  detail?: string;
};

export type SiteData = {
  name: string;
  category: string;
  tagline: string;
  description: string;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  address: string;
  streetAddress: string;
  city: string;
  region: string;
  postalCode: string;
  facebookUrl: string;
  heroImage: string;
  logoImage: string;
  hours: string;
  hoursShort: string;
  nav: NavItem[];
  trust: string[];
  menuFavorites: MenuFavorite[];
  reviews: CustomerReview[];
};
