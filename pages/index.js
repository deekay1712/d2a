import CarouselHome from "../Components/CarouselHome";
import HomeAbout from "../Components/HomeAbout";
import HomeCards from "../Components/HomeCArds";

export default function Home() {
  const homeCarouselData = [
    {
      img: "/Assets/carousel1.jpg",
      label: "Label for first slide",
      caption: "Sample Text for Image One",
    },
    {
      img: "/Assets/carousel2.jpg",
      label: "Label for second slide",
      caption: "Sample Text for Image Two",
    },
    {
      img: "/Assets/carousel3.jpg",
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
