import { Link } from "react-router-dom";
import { useGetArticles } from "../../hooks/useGetArticles";
import noImage from "../assets/no-image.png";

function Content() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetArticles("business");
  const articles = data?.pages.flatMap((page) => page.articles) || [];

  return (
    articles.length > 0 && (
      <div className="mt-4 h-full max-w-[425px] bg-slate-300 p-4">
        <h1 className="mb-4 font-semibold">business 뉴스 목록</h1>
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
      </div>
    )
  );
}

export default Content;
