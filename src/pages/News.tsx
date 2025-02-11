import Content from "../components/common/Content";

function News() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="mt-4 w-full bg-slate-500 p-10">배너영역</div>
      <Content />
    </div>
  );
}

export default News;
