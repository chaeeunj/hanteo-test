import { storeUser, storeItems } from "../constants/store";
import StoreHeader from "../components/store/StoreHeader";
import StoreItems from "../components/store/StoreItems";

function Store() {
  return (
    <div className="flex h-full w-full flex-col">
      <StoreHeader user={storeUser} />
      <StoreItems items={storeItems} />
    </div>
  );
}

export default Store;
