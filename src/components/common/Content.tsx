import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGetArticles } from "../../hooks/useGetArticles";
import { useInView } from "react-intersection-observer";
import { matchCategory } from "../../constants/content";
import noImage from "../assets/no-image.png";

function Content() {
  const { pathname } = useLocation();
  const [category, setCategory] = useState("business");

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetArticles(category);
  const articles = data?.pages.flatMap((page) => page.articles) || [];

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  useEffect(() => {
    const matched = matchCategory.find((item) => item.path === pathname);
    if (matched) {
      setCategory(matched.category);
    }
  }, [pathname]);

  return (
    articles.length > 0 && (
      <div className="h-full max-w-[425px] bg-slate-300 p-4">
        <h1 className="mb-4 font-semibold">📰 {category} 뉴스 목록</h1>
        <section className="flex flex-col gap-4">
          {articles.map((article, idx) => (
            <article key={idx}>
              <Link
                to={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-white"
              >
                {article.urlToImage ? (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="h-16 w-16 rounded-lg"
                  />
                ) : (
                  <img
                    src={noImage}
                    alt="no-image"
                    className="h-16 w-16 rounded-lg"
                  />
                )}
                <h3 className="truncate">{article.title}</h3>
              </Link>
            </article>
          ))}
        </section>
        {hasNextPage && (
          <p ref={ref} className="mt-2 text-center text-sm">
            더보기
          </p>
        )}
      </div>
    )
  );
}

export default Content;
