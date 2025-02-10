import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CarouselItems } from "../../types/banner";

interface BannerProps {
  items: CarouselItems[];
}

function Banner({ items }: BannerProps) {
  const [current, setCurrent] = useState<number>(1);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // 무한루프처럼 보이기 위해 처음에 마지막, 마지막에 첫 이미지 항목 복제
  const extendedItems = [items[items.length - 1], ...items, items[0]];

  const slideNext = () => setCurrent((prev) => prev + 1);

  useEffect(() => {
    const slideInterval = setInterval(slideNext, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  // 무한 루프처럼 보이도록 트랜지션 종료 시 처리
  const handleTransitionEnd = () => {
    if (current === items.length + 1) {
      // 맨 끝(가짜 첫 번째)에서 진짜 첫 번째로 순간 이동
      setIsTransitioning(false);
      setCurrent(1);
      setTimeout(() => setIsTransitioning(true), 50);
    } else if (current === 0) {
      // 맨 앞(가짜 마지막)에서 진짜 마지막으로 순간 이동
      setIsTransitioning(false);
      setCurrent(items.length);
      setTimeout(() => setIsTransitioning(true), 50);
    }
  };

  return (
    <div className="relative h-full w-full overflow-hidden py-4">
      <article
        ref={containerRef}
        className="mx-auto mb-4 flex h-fit w-[380px] flex-nowrap gap-3"
        style={{
          transform: `translateX(-${current * (380 + 12)}px)`,
          transition: isTransitioning ? "transform 0.5s ease-out" : "none",
        }}
        onTransitionEnd={handleTransitionEnd} // 트랜지션 끝났을 때 실행
      >
        {extendedItems.map((item, idx) => (
          <div
            key={idx}
            className="h-[180px] w-full flex-shrink-0 cursor-pointer rounded-lg bg-white shadow-md"
          >
            <Link to={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.img}
                alt={item.title}
                className="h-[130px] rounded-t-lg"
              />
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
              className={`h-2 w-2 cursor-pointer rounded-full transition-all ${current % items.length === idx ? "bg-red-300" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;
