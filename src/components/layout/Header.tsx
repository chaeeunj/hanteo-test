import { Link } from "react-router-dom";

interface MenuList {
  link: string;
  menu: string;
}

const menuList: MenuList[] = [
  { link: "/", menu: "차트" },
  { link: "/whook", menu: "Whook" },
  { link: "/event", menu: "이벤트" },
  { link: "/news", menu: "뉴스" },
  { link: "/store", menu: "스토어" },
  { link: "/charging-station", menu: "충전소" },
];

function Header() {
  return (
    <header className="h-full w-full bg-red-300 px-5 py-3">
      <ul className="flex justify-between gap-4">
        {menuList.map((item: MenuList, idx: number) => (
          <li key={idx} className="font-bold hover:text-white">
            <Link to={item.link}>{item.menu}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
