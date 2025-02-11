import { Link } from "react-router-dom";
import { menuList } from "../../constants/header";

function Header() {
  return (
    <header className="h-fit w-full bg-red-300 px-5 py-3">
      <ul className="flex justify-between gap-4">
        {menuList.map((item, idx: number) => (
          <li key={idx} className="font-bold hover:text-white">
            <Link to={item.link}>{item.menu}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
