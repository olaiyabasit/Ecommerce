import { Categories, NavLinks } from "@/types";
import { link } from "fs";

export const navLinks: NavLinks[] = [
  {
    name: "Login",
    route: "/Login",
  },
  {
    name: "About",
    route: "/about",
  },
  {
    name: "WishList",
    route: "/wishlist",
  },
  {
    name: "Contact",
    route: "/contact",
  },
  {
    name: "Cart",
    route: "/cart",
  },
];

export const categories: Categories[] = [
  {
    name: "Electornics",
    link: "/categories/electronics",
  },
  { name: "Fashion", link: "/categories/fashion" },
  { name: "Toys", link: "/catgories/toys" },
  { name: "Books", link: "/categories/books" },
];
