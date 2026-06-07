import type { SiteData } from "@/types/site";

export const siteData: SiteData = {
  name: "Bayou Bella’s & Biscuits",
  category: "Food Truck",
  tagline: "Big Cajun flavor rolling through Glenwood.",
  description:
    "Bayou Bella’s & Biscuits is a women-owned food truck in Glenwood, Arkansas serving authentic Louisiana Creole and Cajun cuisine with a rotating menu of comfort-food favorites.",
  phone: "(870) 828-8588",
  phoneHref: "tel:8708288588",
  email: "bayoubellas@yahoo.com",
  emailHref: "mailto:bayoubellas@yahoo.com",
  address: "242 Hwy 70, Glenwood, AR",
  city: "Glenwood, Arkansas",
  facebookUrl: "#",
  heroImage: "/images/truck/bayou-truck.png",
  logoImage: "/images/logo/logo.png",
  nav: [
    { label: "Menu", href: "#menu" },
    { label: "Favorites", href: "#favorites" },
    { label: "Find Us", href: "#location" },
    { label: "Photos", href: "#gallery" },
  ],
  trust: [
    "100% Recommended",
    "9 Facebook Reviews",
    "Women-Owned",
    "Authentic Cajun & Creole",
  ],
  menuFavorites: [
    {
      name: "Gumbo",
      note: "A warm Cajun favorite that shows up often on the rotating menu.",
      tag: "Comfort",
    },
    {
      name: "Jambalaya Fries",
      note: "Loaded, bold, and built for food-truck cravings.",
      tag: "Fan Favorite",
    },
    {
      name: "Wings",
      note: "A regular favorite to ask about before they sell out.",
      tag: "Call Ahead",
    },
    {
      name: "Boudin Cornbread",
      note: "A Southern-style side with real Louisiana personality.",
      tag: "Bayou Bite",
    },
    {
      name: "Cajun Boiled Eggs",
      note: "One of those menu items locals know to watch for.",
      tag: "Limited",
    },
    {
      name: "Bread Pudding",
      note: "A sweet finish when it lands on the menu.",
      tag: "Sweet",
    },
    {
      name: "Shrimp Alfredo",
      note: "A creamy special that has appeared on recent menu posts.",
      tag: "Special",
    },
    {
      name: "Crawfish Étouffée",
      note: "A Louisiana classic worth checking the daily menu for.",
      tag: "Cajun",
    },
    {
      name: "Cajun Chicken Salad Sandwiches",
      note: "A lighter rotating special with Bayou Bella’s flavor.",
      tag: "Lunch",
    },
  ],
};