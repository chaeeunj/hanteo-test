import { eventItems } from "../constants/banner";
import Banner from "../components/common/Banner";
import Content from "../components/common/Content";

function Event() {
  return (
    <div className="flex h-full w-full flex-col">
      <Banner items={eventItems} />
      <Content />
    </div>
  );
}

export default Event;
