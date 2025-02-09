import { useInfiniteQuery } from "@tanstack/react-query";
import { NewsApiResponse } from "../types/news";

const fetchArticles = async (
  page: number,
  category: string,
): Promise<NewsApiResponse> => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=6&page=${page}&apiKey=${API_KEY}`,
  );
  if (!response.ok) {
    throw new Error("fetch articles error");
  }

  const data: NewsApiResponse = await response.json();
  return data;
};

export const useGetArticles = (category: string) => {
  return useInfiniteQuery({
    queryKey: ["fetchArticles", category],
    queryFn: ({ pageParam = 1 }: { pageParam: number }) => {
      return fetchArticles(pageParam, category);
    },
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return nextPage * 6 < lastPage.totalResults ? nextPage : undefined;
    },
    initialPageParam: 1,
  });
};
