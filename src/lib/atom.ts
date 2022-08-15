import { atom } from "jotai";

export const openMenu = atom<boolean>(false);

type MenuType = {
  title: string;
  link: string;
};

export const menus: MenuType[] = [
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Portfolio",
    link: "/portfolio",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];
