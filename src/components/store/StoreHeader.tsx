import { Link } from "react-router-dom";
import { StoreUser } from "../../types/store";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

interface UserProps {
  user: StoreUser;
}

function StoreHeader({ user }: UserProps) {
  return (
    <header className="h-full w-full px-4 pb-3 pt-6">
      <section className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <StorefrontIcon
            className="text-red-500"
            style={{ width: "28px", height: "28px" }}
          />
          <h1 className="text-2xl font-bold">STORE</h1>
        </div>
        <Link to={""}>
          <PermIdentityIcon
            className="cursor-pointer text-gray-600"
            style={{ width: "30px", height: "30px" }}
          />
        </Link>
      </section>
      <section className="flex justify-between">
        <h4 className="text-sm font-medium">{user?.name}님</h4>
        <p className="text-sm">💰{user?.coin.toLocaleString()}</p>
      </section>
      <hr className="mt-7 shadow" />
    </header>
  );
}

export default StoreHeader;
