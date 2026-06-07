import type { SiteData } from "@/types/site";

export const siteData: SiteData = {
  name: "Bayou Bella’s & Biscuits",
  category: "Food Truck",
  tagline: "Authentic Louisiana Creole and Cajun food in Glenwood.",
  description:
    "Bayou Bella’s & Biscuits is a women-owned food truck in Glenwood, Arkansas serving authentic Louisiana Creole and Cajun favorites from a rotating menu that changes often and sells out fast.",
  phone: "(870) 828-8588",
  phoneHref: "tel:8708288588",
  email: "bayoubellas@yahoo.com",
  emailHref: "mailto:bayoubellas@yahoo.com",
  address: "242 Hwy 70, Glenwood, AR",
  streetAddress: "242 Hwy 70",
  city: "Glenwood",
  region: "AR",
  postalCode: "71943",
  facebookUrl: "https://www.facebook.com/1026499283882357/",
  heroImage: "/images/truck/bayou-truck.png",
  logoImage: "/images/logo/logo.png",
  hours: "Monday, Tuesday, Thursday, Friday, and Saturday from 12 PM to 6 PM",
  hoursShort: "Mon, Tue, Thu, Fri & Sat · 12 PM to 6 PM",
  nav: [
    { label: "Menu", href: "#menu" },
    { label: "Favorites", href: "#favorites" },
    { label: "Reviews", href: "#reviews" },
    { label: "Find Us", href: "#location" },
    { label: "Photos", href: "#gallery" },
  ],
  trust: [
    "100% Recommended",
    "10 Facebook Reviews",
    "Women-Owned",
    "Authentic Cajun & Creole",
  ],
 menuFavorites: [
  {
    tag: "Truck favorites",
    name: "Jambalaya fries, boudin balls & Cajun boiled eggs",
    note: "The kind of Bayou Bella’s favorites people ask about, post about, and try to catch before they sell out.",
  },
  {
    tag: "Gumbo & Cajun classics",
    name: "Gumbo, étouffée, stews & shrimp Creole",
    note: "Chicken and sausage gumbo, shrimp and okra gumbo, crawfish or shrimp étouffée, seafood stews, and scratch-made roux dishes.",
  },
  {
    tag: "Seafood plates",
    name: "Shrimp, crawfish, crab, catfish & oysters",
    note: "Fried shrimp, fried catfish, fried oysters, chargrilled oysters, snow crab, crawfish, crab, and seafood specials when they hit the menu.",
  },
  {
    tag: "Pasta & comfort food",
    name: "Fettuccine, scampi, meatballs & gravy plates",
    note: "Shrimp and crawfish fettuccine, shrimp scampi, hand-rolled meatballs, beef tips, roast, ribeyes, hamburger steaks, and gravy-style comfort plates.",
  },
  {
    tag: "Stuffed & smothered",
    name: "Stuffed chicken, stuffed peppers & smothered plates",
    note: "Stuffed chicken breast, stuffed bell peppers, stuffed shrimp, stuffed crab, smothered pork chops, smothered chicken, pulled pork, brisket, and more.",
  },
  {
    tag: "Scratch-made extras",
    name: "Biscuits, cornbread, sauces, soups & sweets",
    note: "Garlic butter biscuits, boudin cornbread, crawfish bread, loaded potatoes, handmade sauces, soups, beignets, banana pudding, and fresh-cut ingredients.",
  },
],
  reviews: [
    {
      name: "Billy Holliday",
      quote:
        "Everything was incredible. The banana pudding was crazy good and the wings were good size.",
      detail: "Called out the dirty spaghetti, wings, dirty fries, pink lemonade pie, and banana pudding.",
    },
    {
      name: "Felicity D. Wilson",
      quote:
        "We’ve eaten here a few times already and every time it gets better. Sweetest ladies and the tastiest food.",
    },
    {
      name: "Pamela Cantrell",
      quote:
        "Everything is amazing. The best gumbo I’ve ever eaten. The boudin cornbread is a must.",
      detail: "Great food, creative cuisine, and cheap eats.",
    },
    {
      name: "Marla Stewart",
      quote:
        "Marvelous Cajun food. Definitely try the boudin cornbread.",
    },
    {
      name: "Gabby Webunt",
      quote:
        "Great food and portions. I left extremely satisfied. Definitely would recommend.",
    },
    {
      name: "Colleen C. Thomas",
      quote:
        "These ladies can cook. Sell out every single day they’re open. Rain or shine, they’re there with smiles and conversation.",
      detail: "Loved the authentic Cajun style cooking.",
    },
  ],
};
