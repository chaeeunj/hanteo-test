import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { carouselItemsType } from "../../pages/Home";

interface BannerProps {
  items: carouselItemsType[];
}

function Banner({ items }: BannerProps) {
  const [current, setCurrent] = useState<number>(0);

  // const onClickPrevButton = () =>
  //   setCurrent((curr) => (curr === 0 ? items.length - 1 : curr - 1));

  const slideToNext = () =>
    setCurrent((curr) => (curr === items.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const slideInterval = setInterval(slideToNext, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden bg-slate-500 py-4">
      <article
        className="mx-auto mb-4 flex h-fit w-[380px] flex-nowrap gap-3 transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * (380 + 12)}px)` }} // gap-3: 12px 만큼 더해서 이동동
      >
        {items?.map((item) => (
          <div
            key={item.link}
            className="h-fit w-full flex-shrink-0 cursor-pointer rounded-lg bg-white"
          >
            <Link
              to={item.link}
              className=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={item.img} alt={item.title} />
              <div className="flex items-center justify-between p-3">
                <h3 className="truncate text-sm font-bold">{item.title}</h3>
                <span className="rounded-2xl border border-red-400 px-2 py-1 text-xs font-semibold text-red-400">
                  {item.tag}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </article>

      <div className="absolute bottom-3 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {items.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 w-2 cursor-pointer rounded-full transition-all ${current === idx ? "bg-red-300" : "bg-white bg-opacity-50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;
