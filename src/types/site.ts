export type NavItem = {
  label: string;
  href: string;
};

export type MenuFavorite = {
  name: string;
  note: string;
  tag: string;
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
  city: string;
  facebookUrl: string;
  heroImage: string;
  logoImage: string;
  nav: NavItem[];
  trust: string[];
  menuFavorites: MenuFavorite[];
};