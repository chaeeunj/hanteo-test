import { StoreUser, Items } from "../types/store";

export const storeUser: StoreUser = {
  name: "chae92",
  coin: 140000,
} as const;

export const storeItems: Items[] = [
  { itemName: "Whosfan 골드 투표권 X 25", coin: 615 },
  { itemName: "Whosfan 골드 투표권 X 10", coin: 245 },
  { itemName: "Whosfan 골드 투표권 X 5", coin: 130 },
  { itemName: "Whosfan 골드 투표권 X 1", coin: 25 },
  { itemName: "Whosfan 실버 투표권 X 25", coin: 375 },
  { itemName: "Whosfan 골드 투표권 X 10", coin: 155 },
  { itemName: "Whosfan 골드 투표권 X 5", coin: 80 },
  { itemName: "Whosfan 골드 투표권 X 1", coin: 15 },
] as const;
