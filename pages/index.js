import CarouselHome from "../Components/CarouselHome";
import HomeAbout from "../Components/HomeAbout";
import HomeCards from "../Components/HomeCards";

export default function Home() {
  const homeCarouselData = [
    {
      img: "/Assets/Projects/2-1.jpeg",
      label: "Label for first slide",
      caption: "Sample Text for Image One",
    },
    {
      img: "/Assets/carousel2.jpeg",
      label: "Label for second slide",
      caption: "Sample Text for Image Two",
    },
    {
      img: "/Assets/carousel3.jpeg",
      label: "Label for third slide",
      caption: "Sample Text for Image Three",
    },
  ];
  return (
    <>
      <CarouselHome homeCarouselData={homeCarouselData} />
      <HomeAbout />
      <HomeCards />
    </>
  );
}
