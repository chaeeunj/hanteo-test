import { Link } from 'react-router';

const menuList = [
  { link: '/', menu: '차트' },
  { link: '/', menu: 'Whook' },
  { link: '/', menu: '이벤트트' },
  { link: '/', menu: '뉴스' },
  { link: '/', menu: '스토어' },
  { link: '/', menu: '충전소소' },
];

function Header() {
  return (
    <main className="bg-red-300 px-7 py-3">
      <ul className="flex gap-8">
        {menuList.map((item, idx) => (
          <li key={idx} className="font-bold hover:text-white">
            <Link to={item.link}>{item.menu}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Header;
