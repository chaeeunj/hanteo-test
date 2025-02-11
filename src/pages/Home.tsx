import { chartItems } from "../constants/banner";
import Content from "../components/common/Content";
import Banner from "../components/common/Banner";

function Home() {
  return (
    <div className="flex h-full w-full flex-col">
      <Banner items={chartItems} />
      <Content />
    </div>
  );
}

export default Home;
