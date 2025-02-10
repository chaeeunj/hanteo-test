import { CarouselItems } from "../types/banner";

export const carouselItems: CarouselItems[] = [
  {
    img: "https://picsum.photos/380/130?random=1",
    link: "https://poc.mnetplus.world/mcountdown/ko/notice/detail/218",
    title: "＜M COUNTDOWN＞ 홈페이지 개편 안내",
    tag: "확인하기",
  },
  {
    img: "https://picsum.photos/380/130?random=2",
    link: "https://www.hanteochart.com/chart/world/global/weekly",
    title: "＜한터차트＞ 2월 3주차 글로벌 차트",
    tag: "확인하기",
  },
  {
    img: "https://picsum.photos/380/130?random=3",
    link: "https://www.whosfan.com/",
    title: "<한터차트> Whosfan 공식 App 출시",
    tag: "설치하기",
  },
] as const;
