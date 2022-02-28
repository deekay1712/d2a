import CarouselHome from "../Components/CarouselHome";
import HomeAbout from "../Components/HomeAbout";
import HomeCards from "../Components/HomeCards";
import HomeWhyUs from "../Components/HomeWhyUs";

export default function Home() {
  const homeCarouselData = [
    {
      img: "/Assets/carousel1.jpeg",
      label: ``,
      caption: `"To create, one must first question everything."`,
    },
    {
      img: "/Assets/carousel2.jpeg",
      label: ``,
      caption: `"We shape our buildings: thereafter they shape us."`
    },
    {
      img: "/Assets/carousel3.jpeg",
      label: ``,
      caption: `"When we build, let us think that we build forever."`,
    },
  ];
  return (
    <>
      <CarouselHome homeCarouselData={homeCarouselData} />
      <HomeAbout />
      <HomeCards />
      <HomeWhyUs />
    </>
  );
}
