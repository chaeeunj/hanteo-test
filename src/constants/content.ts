import { MatchCategory } from "../types/content";

export const matchCategory: MatchCategory[] = [
  { path: "/", category: "business" },
  { path: "/whook", category: "entertainment" },
  { path: "/event", category: "general" },
  { path: "/news", category: "health" },
  { path: "/store", category: "science" },
  { path: "/charging-station", category: "technology" },
] as const;
