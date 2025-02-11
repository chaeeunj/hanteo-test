import { MenuList } from "../types/header";

export const menuList: MenuList[] = [
  { link: "/", menu: "차트" },
  { link: "/whook", menu: "Whook" },
  { link: "/event", menu: "이벤트" },
  { link: "/news", menu: "뉴스" },
  { link: "/store", menu: "스토어" },
  { link: "/charging-station", menu: "충전소" },
] as const;
