import { Items } from "../../types/store";
import HowToVoteIcon from "@mui/icons-material/HowToVote";

interface StoreItemsProps {
  items: Items[];
}

function StoreItems({ items }: StoreItemsProps) {
  return (
    <main className="flex h-full w-full flex-col gap-3 px-4 pb-3">
      {items?.map((item: Items, idx: number) => (
        <article
          key={idx}
          className="flex w-full items-center gap-3 border-b border-red-100 pb-3 pt-2"
        >
          <HowToVoteIcon className="text-yellow-500" />
          <div className="flex w-full items-center justify-between">
            <h3 className="font-semibold">{item.itemName}</h3>
            <button className="h-fit w-[70px] rounded-3xl border border-red-400 text-sm font-semibold text-red-400">
              🪙{item.coin.toLocaleString()}
            </button>
          </div>
        </article>
      ))}
    </main>
  );
}

export default StoreItems;
