import { Link } from "react-router";

const menuList = [
  { link: "/", menu: "차트" },
  { link: "/entertainment", menu: "Whook" },
  { link: "/general", menu: "이벤트" },
  { link: "/health", menu: "뉴스" },
  { link: "/science", menu: "스토어" },
  { link: "/technology", menu: "충전소" },
];

function Header() {
  return (
    <header className="h-full w-full bg-red-300 px-5 py-3">
      <ul className="flex justify-between gap-5">
        {menuList.map((item, idx) => (
          <li key={idx} className="font-bold hover:text-white">
            <Link to={item.link}>{item.menu}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
